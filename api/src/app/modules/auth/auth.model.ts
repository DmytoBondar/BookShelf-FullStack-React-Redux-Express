import { Schema, model } from 'mongoose';
import { IAuth, IAuthModel } from './auth.interface';

const AuthSchema = new Schema<IAuth, IAuthModel>(
    {
        name: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            middleName: {
                type: String
            }
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'shemale'],
        },
        address: {
            type: String,
        },
        contactNo: {
            type: Number,
        },
        email: {
            type: String,
            required: true
        },
        profileImage: {
            type: String
        },
        designation: {
            type: String
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);
export const AuthModel = model<IAuth, IAuthModel>('Users', AuthSchema);