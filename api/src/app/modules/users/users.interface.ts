import { Model, Types } from "mongoose";
import { IAuth } from "../auth/auth.interface";

export interface IUser{
    role: "admin" | "user";
    password: string;
    contactNo?: number;
    user?: Types.ObjectId | IAuth
}
export type IUserModel = Model<IUser, {}>