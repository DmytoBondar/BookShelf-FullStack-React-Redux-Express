import { Model } from "mongoose";

export interface IUser{
    name: {
        firstName: string;
        lastName: string;
        middleName?: string;
    },
    dateOfBirth: string;
    gender?:"male" | "female" | "shemale" ;
    address?:string;
    contactNo: number;
    profileImage?:string;
    email: string;
    designation?: string; 
}
export type IUserModel = Model<IUser, {}>