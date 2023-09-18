import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'answers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text("body")
      table.integer("user_id").unsigned().references("id").inTable("users")
      table.integer("question_id").unsigned().references("id").inTable("questions").nullable()
      table.boolean("is_accepted").defaultTo(false).notNullable()
      table.integer("rating").defaultTo(0).notNullable() // TODO: index it fro high to low (for perf ?)
      
     
      // table.unique(['question_id', 'is_accepted']);   //!test 
      
      /**
       *? Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
