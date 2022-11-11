const ACCESS_TOKEN_KEY = 'access_token';

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

const saveAccessToken = (accessToken: string) =>
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

export { getAccessToken, saveAccessToken };
