import { Context, Hono } from 'hono';
import { createYoga, createSchema } from 'graphql-yoga';
import axios from 'axios';
import { decode, jwt, sign, verify } from 'hono/jwt'
import cookie from 'cookie';
import { typeDefs } from './graphql/type';
import { QUERY } from './graphql/resolver';

interface MyContext {
  token: string;
  cookies:string,
  userInfo:{email:string,password:string},
  env:string
}

const app = new Hono();

// Basic Hono route
app.get('/', (c) => {
  return c.text('Hello Hono!');
});


const schema = createSchema<MyContext>({
  typeDefs: `${typeDefs}`,
  resolvers: QUERY,
})

// Create GraphQL Yoga server
const yogaServer = createYoga({
  schema,
  graphiql: true,
  context:async()=>{}
});

// Add the `/graphql` route for Yoga
app.use('/graphql', (c) => yogaServer.handleRequest(c.req.raw, c.res));

export default app;