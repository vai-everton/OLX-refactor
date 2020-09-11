import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('tipos', table => {
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('tipo').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('tipos');
}