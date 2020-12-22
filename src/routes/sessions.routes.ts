import { Router } from 'express';
import { classToClass } from 'class-transformer';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  return response.json({
    user: classToClass(user),
    token,
  });
});

export default sessionsRouter;
