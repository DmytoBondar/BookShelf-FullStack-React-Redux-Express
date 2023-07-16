import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IAuth } from "./auth.interface";
import { AuthService } from "./auth.service";

const getAllAuth = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.getAllAuth();

    sendResponse<IAuth[]>(res, {
        statusCode: 200,
        success: true,
        message: 'Auth retrieved successfully !',
        data: result
    });
});

export const AuthController = {
    getAllAuth
}