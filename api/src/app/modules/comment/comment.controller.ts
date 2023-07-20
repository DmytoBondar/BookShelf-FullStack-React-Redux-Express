import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IComment } from './comment.interface';
import { CommentService } from './comment.service';

const createComment = catchAsync(async (req: Request, res: Response) => {
    const { ...commentData } = req.body;
    const user = req.user;
    const result = await CommentService.createComment(user, commentData);
    sendResponse<IComment>(res, {
        statusCode: 200,
        success: true,
        message: 'Comment created successfully!',
        data: result,
    });
});

const getAllComments = catchAsync(async (req: Request, res: Response) => {
    const result = await CommentService.getAllComments();
    sendResponse<IComment[]>(res, {
        statusCode: 200,
        success: true,
        message: 'Comments retrieved successfully !',
        data: result
    });
});
export const CommentController = {
    createComment,
    getAllComments
};