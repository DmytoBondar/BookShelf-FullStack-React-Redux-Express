import { IBooks } from '../books/books.interface';
import { IUser } from './../users/users.interface';

import { Model, Types } from "mongoose";

export interface IWish {
    book: Types.ObjectId | IBooks;
    user?: Types.ObjectId | IUser;
}
export type IWishModel = Model<IWish, {}>;