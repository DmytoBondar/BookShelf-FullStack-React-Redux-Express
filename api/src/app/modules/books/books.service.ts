import { JwtPayload } from "jsonwebtoken";
import { booksFilterOptions, booksSearchableFields } from "../../../constants";
import { IBooks, IBooksFilter } from "./books.interface";
import { BooksModel } from "./books.model";
import { AuthModel } from "../auth/auth.model";
import ApiError from "../../../error/apiError";

const createBook = async (user: JwtPayload | null, payload: IBooks): Promise<IBooks> => {
  const contactNo = user?.contactNo;
  const isUserExist = await AuthModel.isUserExist(contactNo);
  if(!isUserExist){
    throw new ApiError(404, "User is Not Authenticated !!")
  }
  payload.createdBy = isUserExist._id
  const result = await BooksModel.create(payload);
  return result;
};

const getAllBooks = async (filterOptions: IBooksFilter): Promise<IBooks[]> => {
    const {searchTerm, ...othersFilterOptions} = filterOptions;

    let andCondition = [];

    if(searchTerm){
      andCondition.push({
        $or: booksSearchableFields.map((data) => ({
          [data]: {
            $regex: searchTerm,
            $options: 'i'
          }
        }))
      })
    }

    if(Object.keys(othersFilterOptions).length){
      andCondition.push({
        $and: Object.entries(filterOptions).map(([field, value]) => ({
          [field]: value
        }))
      })
    }

    const whereCondition = andCondition.length > 0 ? {$and: andCondition}: {}
    const result = await BooksModel.find(whereCondition);
    return result
};

const getSingleBook = async (id: string): Promise<IBooks | null> => {
  const result = await BooksModel.findById(id).populate('reviews').lean();
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
