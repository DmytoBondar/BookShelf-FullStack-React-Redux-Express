import { Model, Types } from "mongoose";
import { IUser } from "../users/users.interface";

export interface IAuth {
    role: "admin" | "user";
    password: string;
    contactNo?: number;
    user?: Types.ObjectId | IUser
}

export interface ILoginUser {
    password: string;
    contactNo: string;
}
export interface IAuthResponse {
    accessToken: string;
    refreshToken?: string;
}
export type IAuthModel = {
    isUserExist(id: string): Promise<IAuth>;
    isPasswordMatched(currentPass: string, givenPass:string): Promise<boolean>;
} & Model<IAuth>
