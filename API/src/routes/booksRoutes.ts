import { Router } from "express";
import { getBooks, addBook, deleteBookById, getBookById, updateBookById } from "../controllers/booksController";
import { auth } from "../controllers/authController";

const router = Router();

router.get("/v2/livraria/livros", auth, getBooks);
router.get("/v2/livraria/livro/:id", auth, getBookById);

router.post("/v2/livraria/livro", auth, addBook);


router.put("/v2/livraria/atualizar/livro/:id", auth, updateBookById);

router.delete("/v2/livraria/excluir/livro/:id", auth, deleteBookById);


export default router;
