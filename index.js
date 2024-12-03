import express from 'express';
import userRouter from './src/modules/users/users.router.js';

const app = express();
app.use(express.json());
app.use('/products',userRouter);

app.listen(7000, () => {
    console.log("Server running on port 7000");
});
