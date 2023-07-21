import { Model, Types } from "mongoose";
import { IUser } from "../users/users.interface";

export interface IBooks {
    _id: Types.ObjectId
    title: string;
    author: string;
    genre: string;
    publicationDate:string;
    image?:string;
    reviews?: (Types.ObjectId)[];
    createdBy?:Types.ObjectId | IUser;
}

export interface IBooksFilter {
    title?: string;
    author?: string;
    searchTerm?: string;
    publicationDate?: string;
}
export type IBooksModel = Model<IBooks, {}>