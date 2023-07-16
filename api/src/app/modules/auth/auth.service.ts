import { IAuth } from "./auth.interface";
import { AuthModel } from "./auth.model";

const getAllAuth = async (): Promise<IAuth[]> => {
    const result = await AuthModel.find().populate('user');
    return result
};
export const AuthService = {
    getAllAuth
}