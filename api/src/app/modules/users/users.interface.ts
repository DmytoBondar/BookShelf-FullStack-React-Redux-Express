import { Model } from "mongoose";

export interface IUser{
    name: {
        firstName: string;
        lastName: string;
        middleName?: string;
    },
    dateOfBirth: string;
    gender?:"male" | "female";
    address?:string;
    contactNo: string;
    profileImage?:string;
    email: string;
    designation?: string; 
}
export type IUserModel = Model<IUser, {}>