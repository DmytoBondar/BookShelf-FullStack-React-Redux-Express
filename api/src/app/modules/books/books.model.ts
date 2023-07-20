import { Schema, Types, model } from 'mongoose';
import { IBooks, IBooksModel } from './books.interface';

const BooksSchema = new Schema<IBooks, IBooksModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true
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
    image: {
      type: String,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comments',
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const BooksModel = model<IBooks, IBooksModel>('Books', BooksSchema);