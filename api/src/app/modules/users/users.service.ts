import mongoose from "mongoose";
import { IUser } from "./users.interface";
import { UserModel } from "./users.model";
import { AuthModel } from "../auth/auth.model";
import { IAuth } from "../auth/auth.interface";
import ApiError from "../../../error/apiError";

const createUser = async (auth: IAuth, user: IUser): Promise<IUser | null> => {
    let newUserAllData = null;
    const session = await mongoose.startSession();
  
    try {
      session.startTransaction();
  
      const newUser = await AuthModel.create([auth], { session });
  
      if (!newUser) {
        throw new ApiError(403, "Unable to create User !!");
      }
  
      user.user = newUser[0]._id;
      user.contactNo = newUser[0].contactNo;
  
      const authUser = await UserModel.create([user], { session });
      if (!authUser) {
        throw new ApiError(403, "Unable to create Auth !!");
      }
  
      newUserAllData = authUser[0];
  
      await session.commitTransaction();
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  
    if (newUserAllData) {
      newUserAllData = await UserModel.findOne({ _id: newUserAllData._id }).populate('user')
    }
  
    return newUserAllData;
  };
  

const getAllUsers = async (): Promise<IUser[]> => {
    const result = await UserModel.find();
    return result
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
    const result = await UserModel.findById(id);
    return result;
};

const updateUser = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
    const result = await UserModel.findOneAndUpdate({ _id: id }, payload, { new: true });
    return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
    const result = await UserModel.findByIdAndDelete(id);
    return result;
};

export const UserService = {
    createUser,
    deleteUser,
    updateUser,
    getAllUsers,
    getSingleUser
}
