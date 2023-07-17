import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IBooks } from './books.interface';
import { BookService } from './books.service';
import pick from '../../../shared/pick';
import { booksFilterOptions } from '../../../constants';

const createBook = catchAsync(async (req: Request, res: Response) => {
    const { ...booksData } = req.body;
    const result = await BookService.createBook(booksData);

    sendResponse<IBooks>(res, {
        statusCode: 200,
        success: true,
        message: 'Book created successfully!',
        data: result,
    });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
    const filterOptions = pick(req.query, booksFilterOptions)
    const result = await BookService.getAllBooks(filterOptions);
    sendResponse<IBooks[]>(res, {
        statusCode: 200,
        success: true,
        message: 'Books retrieved successfully !',
        data: result
    });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await BookService.getSingleBook(id);

    sendResponse<IBooks>(res, {
        statusCode: 200,
        success: true,
        message: 'Book retrieved successfully !',
        data: result,
    });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await BookService.updateBook(id, updatedData);
    sendResponse<IBooks>(res, {
        statusCode: 200,
        success: true,
        message: 'Book updated successfully !',
        data: result,
    });
});
const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await BookService.deleteBook(id);

    sendResponse<IBooks>(res, {
        statusCode: 200,
        success: true,
        message: 'Book deleted successfully !',
        data: result,
    });
});

export const BookController = {
    createBook,
    updateBook,
    deleteBook,
    getAllBooks, 
    getSingleBook
};
