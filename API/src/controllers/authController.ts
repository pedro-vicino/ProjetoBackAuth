import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/authService';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { emit } from 'process';

const authService = new AuthService();

export const SECRET_KEY: Secret = 'your-secret-key-here';


export interface CustomRequest extends Request {
  token: string | JwtPayload;
}


// Registro de usuário
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await authService.registerUser(name, email, password);


    res.status(201).json({ name: user.name, email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login de usuário
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console.log(email, password);
  

  try {
    const user = await authService.loginUser(email, password);

    const token = jwt.sign({ _id: user.id?.toString(), name: user.name }, SECRET_KEY, {
      expiresIn: '2 days',
    });

    res.status(200).json({ message: 'Login bem-sucedido', name: user.name, email: user.email, token });

  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, SECRET_KEY);

    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).json({"error": 'Please authenticate'});
  }
};