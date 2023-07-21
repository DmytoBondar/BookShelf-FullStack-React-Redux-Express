import { Secret } from "jsonwebtoken";
import config from "../../../config";
import ApiError from "../../../error/apiError";
import { jwtHelpers } from "../../../interfaces/jwtHelpers";
import { IAuth, IAuthResponse, ILoginUser } from "./auth.interface";
import { AuthModel } from "./auth.model";

const getAllAuth = async (): Promise<IAuth[]> => {
    const result = await AuthModel.find().populate('user');
    return result
};


const authLogin = async (user: ILoginUser): Promise<IAuthResponse> => {
    const { password, contactNo: number } = user;

    const isUserExist = await AuthModel.isUserExist(number);

    if (!isUserExist) {
        throw new ApiError(404, 'User is not exists !!');
    }

    if (isUserExist.password && !(await AuthModel.isPasswordMatched(password,isUserExist.password,))) {
        throw new ApiError(404, 'Password is not Matched !!');
    };
    const { role, contactNo } = isUserExist;
    const accessToken = jwtHelpers.createToken(
        { role, contactNo },
        config.jwt.secret as Secret,
        config.jwt.expires_in as string
    )

    const refreshToken = jwtHelpers.createToken(
        { role, contactNo },
        config.jwt.refresh_secret as Secret,
        config.jwt.refresh_expires_in as string
    )
    return {
        accessToken, refreshToken
    }
}

const refreshToken = async (token: string): Promise<IAuthResponse> => {

    let verfiedUser = null;
    try {
        verfiedUser = jwtHelpers.verifyToken(token, config.jwt.refresh_secret as Secret);
    } catch (error) {
        throw new ApiError(404, 'User is not Exist !!');

    }
    const { contactNo:number } = verfiedUser;

    const isUserExist = await AuthModel.isUserExist(number);

    if (!isUserExist) {
        throw new ApiError(404, 'User is not exists !!');
    }

    const { role, contactNo } = isUserExist;
    const newAccessToken = jwtHelpers.createToken(
        { role, contactNo },
        config.jwt.secret as Secret,
        config.jwt.expires_in as string
    )

    return {
        accessToken: newAccessToken
    }
}

export const AuthService = {
    getAllAuth,
    authLogin,
    refreshToken
}