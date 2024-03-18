import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import express from 'express';
import ViteExpress from 'vite-express';

const app = express();
const env = dotenvExpand.expand(dotenv.config()).parsed;

ViteExpress.config({ mode: env.NODE_ENV });
ViteExpress.listen(app, env.PORT);
