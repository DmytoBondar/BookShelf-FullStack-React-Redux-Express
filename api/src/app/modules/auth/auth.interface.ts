import { Model, Types } from "mongoose";
import { IUser } from "../users/users.interface";

export interface IAuth {
    _id?: Types.ObjectId;
    role: "admin" | "user";
    password: string;
    contactNo?: string;
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
    isUserExist(contactNo: string): Promise<IAuth | null>;
    isPasswordMatched(currentPass: string, givenPass:string): Promise<boolean>;
} & Model<IAuth>
