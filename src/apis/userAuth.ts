import API from '@apis/core';

export interface USER {
  id: string;
  email: string;
  password: string;
  secondPassword: string;
  name: string;
}

export const signUp = (user: USER) =>
  API.post('/account', { ...user, status: 'ACTIVE' });

export const logIn = (email: string, password: string) =>
  API.post('/account', { email, password });
