import { log } from "console";
import IBook from "../models/bookModel";
import { BookRepository } from "../repository/bookRepository";
import { Request, Response } from 'express';


const booksRepository = new BookRepository();

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await booksRepository.getAllBooks();
    res.status(200).json({books: books});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { title, subtitle, image, price } = req.body;

  const newBook: IBook = { id: null, title, subtitle, image, price }
  
  try {
    const book = await booksRepository.addProduct(newBook);
    res.status(201).json({books: book});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar book' });
  }
};




export const updateBookById = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)
  const { title, subtitle, image, price } = req.body;

  const newBook: IBook = { id, title, subtitle, image, price }

  try {
    const book = await booksRepository.updateBook(newBook);
    res.status(200).json({books: book});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};

export const deleteBookById = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)

  try {
    const book = await booksRepository.deleteById(id);
    res.status(200).json({books: book});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id)

  try {
    const book = await booksRepository.getBookById(id);
    res.status(200).json({books: book});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};