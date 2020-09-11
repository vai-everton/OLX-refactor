import express, { json, request, response } from 'express';
import knex from './database/connection';

import anunciosController from './Controllers/AnunciosController';
const anunciocontroller = new anunciosController();

import tiposController from './Controllers/TiposController';
const tiposcontroller = new tiposController();

const routes = express.Router();

// LISTA TODOS OS TIPOS
//routes.get('/tipos', tiposcontroller.index);

// LISTA A TABELA ANUNCIO-TIPO
routes.get('/anuncio-tipo', tiposcontroller.index_anuncio);

// CRIA UM ANUNCIO
routes.post('/anuncios', anunciocontroller.create);

// LISTA TODOS OS ANUNCIOS
routes.get('/anuncios', anunciocontroller.index);

// LISTA ANUNCIO POR ID
routes.get('/tipos/:id', tiposcontroller.show);

export default routes;