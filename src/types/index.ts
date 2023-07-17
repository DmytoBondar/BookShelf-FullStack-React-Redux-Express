export interface IBooks {
    _id:number;
    title: string;
    author: string;
    genre: string;
    publicationDate:string;
    reviews?: string;
}

// export interface IBooksFilter {
//     title?: string;
//     author?: string;
//     searchTerm?: string;
//     publicationDate?: string;
// }