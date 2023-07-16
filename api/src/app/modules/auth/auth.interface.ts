import { Model, Types } from "mongoose";
import { IUser } from "../users/users.interface";

export interface IAuth{
    role: "admin" | "user";
    password: string;
    contactNo?: number;
    user?: Types.ObjectId | IUser
}
export type IAuthModel = Model<IAuth, {}>
