import { Schema, model } from 'mongoose';
import { IWish, IWishModel } from './wish.interface';

const WishSchema = new Schema<IWish, IWishModel>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Books',
            unique: true,
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const WishModel = model<IWish, IWishModel>('Wish', WishSchema);