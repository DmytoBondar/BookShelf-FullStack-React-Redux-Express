import { NextFunction, Request, Response } from "express";
import ApiError from "../../error/apiError";
import { jwtHelpers } from "../../interfaces/jwtHelpers";
import config from "../../config";

const auth = (...requiredRules: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            throw new ApiError(404, "You are not Authorized !!");
        }
        let verfiedUser = null;
        verfiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as string);
        
        req.user = verfiedUser;

        if(requiredRules.length && !requiredRules.includes(verfiedUser.role)){
            throw new ApiError(404, "Forbidden !!");
        }
        next();
    } catch (error) {
        next(error)
    }
}
export default auth;