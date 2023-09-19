import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number
  
  @column()
  public title: string

  @column()
  public description: string
  
  @column()
  public viewCount: number

  @column()
  public score: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
