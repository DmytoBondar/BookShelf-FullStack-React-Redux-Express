import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../../config';
import { IAuth, IAuthModel } from './auth.interface';

const AuthSchema = new Schema<IAuth, IAuthModel>(
    {
        role: {
            type: String,
            enum: ['admin', 'user'],
        },
        contactNo: {
            type: String,
            required: true,
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

AuthSchema.statics.isUserExist = async function(contactNo:string): Promise<IAuth | null>{
    return await AuthModel.findOne({contactNo})
}

AuthSchema.statics.isPasswordMatched = async function(givenPass:string,currentPass:string): Promise<boolean>{
    return await bcrypt.compare(givenPass,currentPass)
}

AuthSchema.pre('save', async function(next){
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bycrypt_salt_rounds))
    next();
})
export const AuthModel = model<IAuth, IAuthModel>('Auth', AuthSchema);