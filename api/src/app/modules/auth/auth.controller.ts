import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IAuth, IAuthResponse } from "./auth.interface";
import { AuthService } from "./auth.service";
import config from "../../../config";

const getAllAuth = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.getAllAuth();

    sendResponse<IAuth[]>(res, {
        statusCode: 200,
        success: true,
        message: 'Auth retrieved successfully !',
        data: result
    });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const {...loginInfo} = req.body;
    const {refreshToken, ...others} = await AuthService.authLogin(loginInfo);

    const cookieOptions = {
        secure: config.env === 'production',
        httpOnly: true
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse<IAuthResponse>(res, {
        statusCode: 200,
        success: true,
        message: 'Successfully User Loggin !',
        data: others
    });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
    const {refreshToken} = req.body;
    const result = await AuthService.refreshToken(refreshToken);

    const cookieOptions = {
        secure: config.env === 'production',
        httpOnly: true
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse<IAuthResponse>(res, {
        statusCode: 200,
        success: true,
        message: 'Successfully User Loggin !',
        data: result
    });
});

export const AuthController = {
    getAllAuth,
    loginUser
}