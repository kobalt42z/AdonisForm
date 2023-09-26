import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SignupValidator from '../../validators/SignupValidator';
import User from '../../Models/User';

export default class AuthController {

    public async signupShow({view}: HttpContextContract) {
        return view.render("auth/register");
    }
    public async signinShow({view}: HttpContextContract) {
        return view.render("auth/login");
    }

    public async signin({request,response}:HttpContextContract){
        const data = await request.validate(SignupValidator)
        const user = await User.create(data)
    }
}
