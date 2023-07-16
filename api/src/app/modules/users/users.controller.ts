import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './users.service';
import { IUser } from './users.interface';
import { IAuth } from '../auth/auth.interface';

const createUser = catchAsync(async (req: Request, res: Response) => {
    const { user,...authData } = req.body;
    const result = await UserService.createUser(user,authData);

    sendResponse<IAuth>(res, {
        statusCode: 200,
        success: true,
        message: 'User created successfully!',
        data: result,
    });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getAllUsers();

    sendResponse<IUser[]>(res, {
        statusCode: 200,
        success: true,
        message: 'Users retrieved successfully !',
        data: result
    });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await UserService.getSingleUser(id);

    sendResponse<IUser>(res, {
        statusCode: 200,
        success: true,
        message: 'User retrieved successfully !',
        data: result,
    });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await UserService.updateUser(id, updatedData);
    sendResponse<IUser>(res, {
        statusCode: 200,
        success: true,
        message: 'User updated successfully !',
        data: result,
    });
});
const deleteUser = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await UserService.deleteUser(id);

    sendResponse<IUser>(res, {
        statusCode: 200,
        success: true,
        message: 'User deleted successfully !',
        data: result,
    });
});

export const UserController = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getSingleUser
};
