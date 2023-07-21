import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './users.interface';

const UserSchema = new Schema<IUser, IUserModel>(
    {
        name: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
            },
            middleName: {
                type: String
            }
        },
        gender: {
            type: String,
            enum: ['male', 'female'],
        },
        address: {
            type: String,
        },
        contactNo: {
            type: String,
            required:true
        },
        email: {
            type: String,
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
export const UserModel = model<IUser, IUserModel>('Users', UserSchema);