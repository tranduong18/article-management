import { generateRandomString } from "../helpers/generate.helper";
import User from "../models/user.model";
import md5 from "md5";

export const resolversUser = {
    Mutation: {
        register: async (_, args) => {
            const { user } = args;

            const existUser = await User.findOne({
                email: user.email,
                deleted: false
            });

            if(existUser){
                return {
                    code: 400,
                    message: "Email đã tồn tại!"
                }
            }

            const token = generateRandomString(30);

            const dataUser = {
                fullName: user.fullName,
                email: user.email,
                password: md5(user.password),
                token: token
            };

            const newUser = new User(dataUser);
            await newUser.save();

            return {
                id: newUser.id,
                fullName: newUser.fullName,
                email: newUser.email,
                token: newUser.token,
                code: 200,
                message: "Đăng ký thành công!"
            };
        }
    }
}