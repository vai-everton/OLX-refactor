import knex from '../database/connection';
import {Request, Response} from 'express';

class anunciosController {
    async create (request: Request, response: Response) {
        const {
            titulo,
            texto,
            uf,
            cidade,
            whatsapp, 
            tipos,
        } = request.body;

        const ids = await knex('anuncios').insert({
            titulo,
            texto,
            uf,
            cidade,
            whatsapp
        });
        
        const anuncio_id = ids[0];

        const tipoAnuncio = tipos.map((tipo_id: number) => {
            return {
                tipo_id,
                anuncio_id
            };
        });

        await knex('anuncio_tipo').insert(tipoAnuncio);

        return response.json ({sucess: 'true'});
    }

    async index (request: Request, response: Response) {
        const all_anuncios = await knex('anuncios').select('*');
    
        return response.json( all_anuncios);
    }
}

export default anunciosController;