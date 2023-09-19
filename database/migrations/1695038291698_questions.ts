import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'questions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE")
      table.string("title",100).notNullable(),
      table.string("description",500).notNullable(),
      table.integer("view_count").notNullable().defaultTo(0),
      table.integer("score").notNullable().defaultTo(0),
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
