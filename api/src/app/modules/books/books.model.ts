import { Schema, model } from 'mongoose';
import { IBooks, IBooksModel } from './books.interface';

const BooksSchema = new Schema<IBooks, IBooksModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    reviews: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const BooksModel = model<IBooks, IBooksModel>('Books',BooksSchema);