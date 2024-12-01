import express from 'express';
import mongoose from 'mongoose';
import userRouter from './userRouter';
import { Request, Response } from 'express';


const app = express();


app.use(express.json()); 



const url = "mongodb://0.0.0.0:27017/Pet";

async function connectToMongoDB() {
    try {
        await mongoose.connect(url)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connectToMongoDB();

app.use('/users', userRouter);

app.get('/', (req:Request, res:Response) => {
  res.send('Server is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
