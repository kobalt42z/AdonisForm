import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

    public async signupShow({view}: HttpContextContract) {
        return view.render("auth/register");
    }
    public async signinShow({view}: HttpContextContract) {
        return view.render("auth/login");
    }
}
