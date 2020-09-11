import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('anuncio_tipo', table => {
        table.increments('id').primary();

        table.integer('tipo_id')
        .references('id')
        .inTable('tipos')
        .notNullable();

        table.integer('anuncio_id')
        .references('id')
        .inTable('anuncios')
        .notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('anuncio_tipo');
}