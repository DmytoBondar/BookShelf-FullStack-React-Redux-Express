import { Model } from "mongoose";

export interface IAuth{
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
export type IAuthModel = Model<IAuth, {}>