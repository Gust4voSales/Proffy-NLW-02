import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable(); 
        table.integer('to').notNullable();
        // Reference to the class
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE') // if the class ID is updated then all its classes schedules are updated as well with the new ID
            .onDelete('CASCADE'); // if the class is deleted then all its classes schedules are deleted as well
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}