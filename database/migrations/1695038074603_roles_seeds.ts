import Database from '@ioc:Adonis/Lucid/Database'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Roles } from '../../app/enums/RoleEnums'

export default class extends BaseSchema {
    public async up() {
        await Database.table("roles").insert([
            {
                id: Roles.MEMBER,
                name: "Member",
                description: "role for basic users "
            },
            {
                id: Roles.MODERATOR,
                name: "Moderator",
                description: "role for moderator with the privilage to ban and delete message "
            },
            {
                id: Roles.ADMIN,
                name: "Admin",
                description: "admin users  "
            }
        ])
    }

    public async down() {
        await Database.from('roles').whereIn("id",[Roles.MEMBER, Roles.ADMIN, Roles.ADMIN]).delete()
    }
}
