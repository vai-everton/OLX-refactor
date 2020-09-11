import knex from '../database/connection';
import {Request, Response} from 'express';

class tiposController {

    // LISTA TODOS OS TIPOS
    async index(request: Request, response: Response) {
        const tipos = await knex('tipos').select('*');

        return response.json( tipos );
    };

    async index_anuncio (request: Request, response: Response) {
        const anuncios_ = await knex('anuncio_tipo').select('*');
        return response.json( anuncios_ );
    }
    
    async show (request: Request, response: Response) {
        const { id } = request.params;
        const anuncio = await knex('anuncios').where('id', id).first();

        if (!anuncio) {
            return response.status(400).json({messagem: 'Anuncio não encontrado.'});
        }

        return response.json( anuncio );
    }
}

export default tiposController;