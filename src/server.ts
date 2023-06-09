import express from 'express';;
import { Application, Request, Response } from 'express';

const app: Application = express();

const PORT: number = 3001;

app.use('/', (req: Request, res: Response): void => {
    res.send('Hello world!');
});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
