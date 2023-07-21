import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { WishService } from "./wish.service";
import { IWish } from "./wish.interface";

const createWish = catchAsync(async (req: Request, res: Response) => {
    const {...book} = req.body;
    const result = await WishService.createWish(req.user, book);
    sendResponse<IWish>(res, {
        statusCode: 200,
        success: true,
        message: 'Wish Created successfully !',
        data: result
    });
});

const getUserWish = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const result = await WishService.getUserWish(id);

    sendResponse<IWish[]>(res, {
        statusCode: 200,
        success: true,
        message: 'Wish Retrieve successfully !',
        data: result
    });
});

const deleteUserWish = catchAsync(async (req: Request, res: Response) => {
    const {userId} = req.body;
    const result = await WishService.deleteUserWish(userId);

    sendResponse<IWish>(res, {
        statusCode: 200,
        success: true,
        message: 'Wish deleted successfully !',
    });
});

export const WishController = {
    createWish,
    deleteUserWish,
    getUserWish
}