import { Model } from "mongoose";

export interface IBooks {
    title: string;
    author: string;
    genre: string;
    publicationDate:string;
    reviews?: string;
}
export type IBooksModel = Model<IBooks, {}>