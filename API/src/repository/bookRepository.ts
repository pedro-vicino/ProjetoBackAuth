import { Pool } from "pg";
import pool from "../database/database";
import IBook from "../models/bookModel";

export class BookRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getAllBooks(): Promise<IBook[]> {
    const { rows } = await this.pool.query(
      "SELECT id,title,subtitle,image,price FROM books",
    );
    return rows;
  }

  async getBookById(id:number): Promise<IBook[]> {
    const { rows } = await this.pool.query(
      "SELECT id,title,subtitle,image,price FROM books WHERE id = $1", [id]
    );

    return rows;
  }

  async addProduct(book: IBook): Promise<IBook> {
    const queryText =
      "INSERT INTO books(title, subtitle, image, price) VALUES($1, $2, $3, $4) RETURNING *";
    const { rows } = await this.pool.query(queryText, [book.title, book.subtitle, book.image ,book.price,]);
    return rows[0];
  }


  async updateBook(book: IBook): Promise<IBook> {
    const queryText =
      "UPDATE books SET title = $1, subtitle = $2, image = $3, price = $4 WHERE id = $5 RETURNING *";
    const { rows } = await this.pool.query(queryText, [book.title, book.subtitle, book.image ,book.price,book.id]);
    return rows[0];
  }

  async deleteById(id: Number): Promise<IBook> {
    const queryText =
      "DELETE FROM books WHERE id = $1 RETURNING *";
    const { rows } = await this.pool.query(queryText, [id]);
    return rows[0];
  }
}
