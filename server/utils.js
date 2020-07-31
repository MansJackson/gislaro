const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const getDb = async () => JSON.parse(fs.readFileSync('./db.json').toString());
const writeToDb = async db => {
  await fs.writeFileSync('./db.json', JSON.stringify(db));
  return true;
};

const sortAlpha = collection => collection.sort((a, b) => {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
});

const getAmountInGenre = (genre, albums) => (
  albums.filter(album => album.genre === genre).length
);

const getGenres = async () => {
  try {
    const db = await getDb();
    const genres = [];
    const result = {};
    db.albums.forEach(el => {
      if (!genres.includes(el.genre)) genres.push(el.genre);
    });
    genres.forEach(async genre => { result[genre] = getAmountInGenre(genre, db.albums); });
    return { status: 200, message: result };
  } catch (err) {
    return { status: 500, message: 'Something went wrong' };
  }
};

const sortAlbums = async () => {
  try {
    const db = await getDb();
    let albums = sortAlpha(db.albums).map(el => ({ ...el, folder: 'unsorted', position: null }));
    const folders = db.folders.map(el => ({ ...el, records: [] }));

    const newFolders = folders.map(folder => {
      if (folder.records.length >= folder.maxSize) return folder;
      const unsortedAlbums = albums.filter(album => (
        album.genre === folder.genre && album.folder === 'unsorted'
      ));

      unsortedAlbums.forEach((album, index) => {
        if (folder.records.length >= folder.maxSize) return;
        folder.records.push(album.id);
        albums = [
          ...albums.filter(el => album.id !== el.id),
          { ...album, folder: folder.name, position: index + 1 },
        ];
      });

      return folder;
    });
    await writeToDb({ albums, folders: newFolders });
    return { status: 200, message: 'Records sorted' };
  } catch (err) {
    return { status: 500, message: 'Something went wrong' };
  }
};

const getFolders = async () => {
  try {
    const db = await getDb();
    return { status: 200, message: db.folders };
  } catch (err) {
    return { status: 500, message: 'Something went wrong' };
  }
};

const createFolder = async folder => {
  try {
    const db = await getDb();
    if (!db.folders) db.folders = [];
    if (db.folders.map(el => el.name.toLowerCase()).includes(folder.name.toLowerCase())) {
      return { status: 409, message: 'That name is already taken' };
    }
    db.folders.push({ id: uuidv4(), records: [], ...folder });
    await writeToDb(db);
    return { status: 201, message: 'Folder was created' };
  } catch (err) {
    return { status: 500, message: 'Something went wrong' };
  }
};

const removeFolder = async id => {
  try {
    const db = await getDb();
    const filtered = db.folders.filter(el => el.id !== id);
    db.folders = filtered;
    await writeToDb(db);
    await sortAlbums();
    return { status: 200, message: 'Folder was deleted' };
  } catch (err) {
    return { status: 500, message: 'Something went wrong' };
  }
};

const getAlbums = async () => {
  try {
    const db = await getDb();
    return { status: 200, message: await db.albums };
  } catch (err) {
    return { status: 500, message: 'Something went wrong' };
  }
};

const addAlbum = async album => {
  try {
    const db = await getDb();
    if (!db.albums) db.albums = [];
    if (db.albums.map(el => el.id).includes(album.id)) {
      return { status: 409, message: 'Record is already in your library' };
    }
    db.albums.push(album);
    await writeToDb(db);
    return { status: 201, message: 'Album was added to lirary' };
  } catch (err) {
    return { status: 500, message: 'Something went wrong' };
  }
};

const removeAlbum = async id => {
  try {
    const db = await getDb();
    const filteredAlbums = db.albums.filter(el => el.id !== Number(id));
    await writeToDb({ ...db, albums: filteredAlbums });
    return { status: 200, message: 'Album deleted from database' };
  } catch (err) {
    return { status: 500, message: 'Something went wrong' };
  }
};

module.exports = {
  getFolders,
  createFolder,
  removeFolder,
  getAlbums,
  addAlbum,
  removeAlbum,
  getGenres,
  sortAlbums,
};
