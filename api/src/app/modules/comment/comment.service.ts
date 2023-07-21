import { JwtPayload } from "jsonwebtoken";
import { IComment } from "./comment.interface";
import { CommentModel } from "./comment.model";
import { AuthModel } from "../auth/auth.model";
import ApiError from "../../../error/apiError";
// import mongoose from "mongoose";
// import { BooksModel } from "../books/books.model";

const createComment = async (user: JwtPayload | null, payload: IComment): Promise<IComment> => {
    const contactNo = user?.contactNo;
    const isUserExist = await AuthModel.isUserExist(contactNo);
    if (!isUserExist) {
        throw new ApiError(404, "User is not Found !");
    }
    payload.userId = isUserExist.user;
    const result = await CommentModel.create(payload);

    //Taking Alternative way --> Not saving Comments in Books Model -> rather than getting comments by book id
    // let CommentData ;
    // const session = await mongoose.startSession();
    // try {
    //     session.startTransaction();
    //     const createComment = await CommentModel.create([payload], {session});
    //     // const commetId = createComment[0]._id   

    //     // await BooksModel.updateOne({_id:payload.bookId}, {$push: {reviews: commetId}})

    //     CommentData = createComment[0]

    //     session.commitTransaction();
    //     session.endSession();
    // } catch (error) {
    //     session.abortTransaction();
    //     session.endSession();
    //     throw error;
    // }

    return result;
};

const getBookComments = async (bookId:string): Promise<IComment[] | null> => {
    const result = await CommentModel.find({bookId: bookId})
    .populate(
        [
            {
                path: 'bookId'
            },
            {
                path: 'userId'
            }
        ])
    return result;
};


const getAllComments = async (): Promise<IComment[] | null> => {
    const result = await CommentModel.find().populate(
        [
            {
                path: 'bookId'
            },
            {
                path: 'userId'
            }
        ])
    return result;
};


export const CommentService = {
    createComment,
    getAllComments,
    getBookComments
}
