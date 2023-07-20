import { Model, Types } from "mongoose";
import { IComment } from "../comment/comment.interface";

export interface IBooks {
    _id: Types.ObjectId
    title: string;
    author: string;
    genre: string;
    publicationDate:string;
    image?:string;
    reviews?: (Types.ObjectId)[];
}

export interface IBooksFilter {
    title?: string;
    author?: string;
    searchTerm?: string;
    publicationDate?: string;
}
export type IBooksModel = Model<IBooks, {}>