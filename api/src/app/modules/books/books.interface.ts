import { Model } from "mongoose";

export interface IBooks {
    title: string;
    author: string;
    genre: string;
    publicationDate:string;
    reviews?: string;
}

export interface IBooksFilter {
    title?: string;
    author?: string;
    searchTerm?: string;
    publicationDate?: string;
}
export type IBooksModel = Model<IBooks, {}>