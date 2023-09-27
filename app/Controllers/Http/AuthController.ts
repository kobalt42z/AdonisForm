import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SignupValidator from '../../validators/SignupValidator'
import User from '../../Models/User'
import SigninValidator from '../../validators/SigninValidator'

export default class AuthController {

    // views controllers
  public async signupShow({ view }: HttpContextContract) {
    return view.render('auth/register')
  }
  public async signinShow({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  // logic controllers
  public async signup({ request, response, session, auth }: HttpContextContract) {
    const { rememberMe, ...data } = await request.validate(SignupValidator)
    const user = await User.create(data)
    await auth.attempt(user.email, user.password, rememberMe)
    session.flash('success', 'welcome to forum')
    return response.redirect('/')
  }
  public async signin({ request, response, session, auth }: HttpContextContract) {
      const {email,password,rememberMe} =  await request.validate(SigninValidator)
 try {

    //  must addd attempt login 
    await auth.attempt(email, password,rememberMe)
    session.flash('success', 'welcome to forum')
    response.redirect("/")
 } catch (error) {
    session.flash('errors', { form: 'The provided username/email or password is incorrect' })
    return response.redirect().back()
 }
  }
  public async signout({ auth, response ,session}: HttpContextContract) {
    await auth.logout()
    session.flash('success', 'logged out !')
    response.redirect("/")
  }

}
