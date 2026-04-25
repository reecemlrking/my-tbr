export type Book = {
  isbn_13: string,
  isbn_10: string,
  pageCount: number,
  dimensions: { height: string, width: string, thickness: string }
  title: string,
  description: string,
  author: string,
  publishedDate: string,
  publisher: string,
  imageLinks: { coverURL: string },
}
