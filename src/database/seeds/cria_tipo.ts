import Knex from 'knex';

export async function seed (knex: Knex) {
    await knex('tipos').insert([
        { tipo: 'Imoveis', imagem: 'imoveis.svg'},
        { tipo: 'Autos e Peças', imagem: 'autos.svg'},
        { tipo: 'Para a Sua Casa', imagem: 'casa.svg'},
        { tipo: 'Eletronicos e Celulares', imagem: 'eletro.svg'},
        { tipo: 'Música e Hobbies', imagem: 'musica.svg'},
        { tipo: 'Esportes e Lazer', imagem: 'esportes.svg'},
        { tipo: 'Artigos Infantis', imagem: 'infantil.svg'},
        { tipo: 'Animais de Estimação', imagem: 'pets.svg'},
        { tipo: 'Moda e Beleza', imagem: 'moda.svg'},
        { tipo: 'Agro e Industria', imagem: 'agro.svg'},
        { tipo: 'Comércio e Escritório', imagem: 'comercio.svg'},
        { tipo: 'Serviços', imagem: 'servicos.svg'},
        { tipo: 'Vagas de Emprego', imagem: 'vagas.svg'}
    ]);
}