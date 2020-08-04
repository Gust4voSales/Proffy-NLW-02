import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        // Reference to the teacher
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') // if the teacher ID is updated then all his classes are updated as well with the new ID
            .onDelete('CASCADE'); // if the teacher is deleted then all his classes are deleted as well
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}