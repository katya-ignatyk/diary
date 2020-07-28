export const config = {
  BE_URL: process.env.NODE_ENV === 'production' ? 'https://newsbe.herokuapp.com' : 'http://localhost:3001'
};