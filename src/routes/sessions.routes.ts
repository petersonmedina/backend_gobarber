import { Router } from 'express';
import { classToClass } from 'class-transformer';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const authenticateUser = new AuthenticateUserService();

    const { user } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user) });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
