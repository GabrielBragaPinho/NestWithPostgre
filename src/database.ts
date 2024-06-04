import { Client } from 'pg';

export const client = new Client({
  user: 'gabri',
  host: 'localhost',
  database: 'm4-s2-movies',
  password: 'Guitar0147',
  port: 5432,
});

client.connect();