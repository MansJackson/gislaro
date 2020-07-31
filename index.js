require('dotenv').config();
const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const {
  addAlbum, getAlbums, removeAlbum, createFolder, removeFolder, getFolders, getGenres, sortAlbums,
} = require('./utils');

const PORT = process.env.PORT || 8000;
const app = express();

const sendResponse = (res, data) => {
  res.status(data.status).json(data.message).end();
};

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/albums', async (req, res) => {
  const result = await addAlbum(req.body);
  sendResponse(res, result);
});

app.get('/api/albums', async (_, res) => {
  const result = await getAlbums();
  sendResponse(res, result);
});

app.delete('/api/albums/:id', async (req, res) => {
  const { id } = req.params;
  const result = await removeAlbum(id);
  sendResponse(res, result);
});

app.post('/api/folders', async (req, res) => {
  const result = await createFolder(req.body);
  sendResponse(res, result);
});

app.get('/api/folders', async (_, res) => {
  const result = await getFolders();
  sendResponse(res, result);
});

app.delete('/api/folders/:id', async (req, res) => {
  const { id } = req.params;
  const result = await removeFolder(id);
  sendResponse(res, result);
});

app.post('/search', async (req, res) => {
  const key = process.env.KEY;
  const secret = process.env.SECRET;
  const type = req.query.masters ? 'master' : 'release';
  const { page } = req.query;
  const fullUrl = req.query.barcode
    ? `https://api.discogs.com/database/search?catno=${req.body.query}&type=${type}&page=${page}&per_page=10&key=${key}&secret=${secret}`
    : `https://api.discogs.com/database/search?q=${req.body.query}&type=${type}&page=${page}&per_page=10&key=${key}&secret=${secret}`;
  fetch(fullUrl)
    .then(result => result.json())
    .then(result => { res.status(200).json(result); });
});

app.get('/api/genres', async (_, res) => {
  const result = await getGenres();
  sendResponse(res, result);
});

app.get('/api/albums/sort', async (_, res) => {
  const result = await sortAlbums();
  sendResponse(res, result);
});

app.listen(PORT);
