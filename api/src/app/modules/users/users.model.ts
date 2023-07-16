import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './users.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const UserSchema = new Schema<IUser, IUserModel>(
    {
        role: {
            type: String,
            enum: ['admin', 'user'],
        },
        contactNo: {
            type: Number
        },
        user: {
            type: Schema.Types.ObjectId, 
            ref: 'Users'
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);

// UserSchema.statics.isUserExist = async function ()
UserSchema.pre('save', async function(next){
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bycrypt_salt_rounds))
    next();
})


export const UserModel = model<IUser, IUserModel>('Auth', UserSchema);