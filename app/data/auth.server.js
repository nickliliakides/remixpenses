import { hash, compare } from 'bcryptjs';
import { createCookieSessionStorage, redirect } from '@remix-run/node';
import { prisma } from './database.server';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.SESSION_SECRET],
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});

const createUserSession = async (userId, redirectPath) => {
  const session = await sessionStorage.getSession();
  session.set('userId', userId);
  return redirect(redirectPath, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  });
};

export const signUp = async ({ email, password }) => {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error('Email address already in use.');
    error.statusCode = 422;
    throw error;
  }

  const passwordHash = await hash(password, 12);
  const user = await prisma.user.create({ data: { email: email, password: passwordHash } });
  return createUserSession(user.id, '/expenses');
};

export const login = async ({ email, password }) => {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (!existingUser) {
    const error = new Error('Invalid credentials.');
    error.statusCode = 401;
    throw error;
  }

  const passwordMatch = await compare(password, existingUser.password);

  if (!passwordMatch) {
    const error = new Error('Invalid credentials.');
    error.statusCode = 401;
    throw error;
  }

  return createUserSession(existingUser.id, '/expenses');
};

export const getUserFromSession = async (request) => {
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));
  const userId = session.get('userId');

  if (!userId) {
    return null;
  }

  return userId;
};

export const destroyUserSession = async (request) => {
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
};

export const requireUserSession = async (request) => {
  const userId = await getUserFromSession(request);

  if (!userId) {
    throw redirect('/auth?mode=login');
  }

  return userId;
};
