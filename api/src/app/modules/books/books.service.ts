import { IBooks } from "./books.interface";
import { BooksModel } from "./books.model";

const createBook = async (payload: IBooks): Promise<IBooks> => {
  const result = await BooksModel.create(payload);
  return result;
};

const getAllBooks = async (): Promise<IBooks[]> => {
    const result = await BooksModel.find();
    return result
};

const getSingleBook = async (id: string): Promise<IBooks | null> => {
  const result = await BooksModel.findById(id);
  return result;
};

const updateBook = async (id: string,payload: Partial<IBooks>): Promise<IBooks | null> => {
  const result = await BooksModel.findOneAndUpdate({ _id: id }, payload, {new: true});
  return result;
};

const deleteBook = async ( id: string): Promise<IBooks | null> => {
  const result = await BooksModel.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  deleteBook,
  updateBook, 
  getAllBooks, 
  getSingleBook
}
