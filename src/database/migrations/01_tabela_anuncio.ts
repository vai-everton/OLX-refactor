import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('anuncios', table => {
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('titulo').notNullable();
        table.string('texto').notNullable();
        table.string('uf', 2).notNullable();
        table.string('cidade').notNullable();
        table.string('whatsapp', 9).notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('anuncios');
}