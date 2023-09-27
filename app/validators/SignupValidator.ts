import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignupValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    email: schema.string({trim:true}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email', caseInsensitive: true }),
    ]),
    password: schema.string({}, [rules.confirmed(), rules.maxLength(16), rules.minLength(8)]),
    userName: schema.string({trim:true}, [
      rules.alphaNum(),
      rules.minLength(2),
      rules.maxLength(30),
      rules.unique({ table: 'users', column: 'user_name' }),
    ]), 
    rememberMe:schema.boolean.optional()
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'email.unique': 'Email is already taken',
    'email.required': 'Email is required',
    'email.email': 'Email is not valid',
    'password.confirmed': 'password  d\'ont match',
    'password.minLength': 'Password must be at least 8 characters long',
    'password.maxLength': 'Password must be at most 16 characters long',
    'userName.minLength': 'Username must be at least 2 characters long',
    'userName.alphaNum': 'Username can only contain letters and numbers',
    'userName.maxLength': 'Username must be at most 30 characters long',
    'userName.required': 'Username is required',
    'userName.unique': 'Username is already taken',
  }
}
