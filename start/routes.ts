/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view,auth  }) => {
if(auth.isLoggedIn) return view.render('home')
  return view.render('welcome')
})
Route.get('/home', async ({ view }) => {
  return view.render('home')
})
// auth shows
Route.get('/signup', 'AuthController.signupShow').as('auth.signup.show')
Route.get('/signin', 'AuthController.signinShow').as('auth.signin.show')

//auth actions
Route.post('/signup', 'AuthController.signup').as('auth.signup')
Route.post('/signin', 'AuthController.signin').as('auth.signin')
Route.get('/signout', 'AuthController.signout').as('auth.signout')
