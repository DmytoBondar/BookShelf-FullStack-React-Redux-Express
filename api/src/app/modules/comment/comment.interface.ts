import mongoose, { Model, Types } from "mongoose";
import { IBooks } from "../books/books.interface";
import { IUser } from "../users/users.interface";

export interface IComment {
    _id: Types.ObjectId
    comment: string;
    userId?: Types.ObjectId | IUser;
    bookId: Types.ObjectId | IBooks;
}
export type ICommentModel = Model<IComment, {}>