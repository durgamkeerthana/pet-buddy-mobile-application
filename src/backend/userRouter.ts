import * as express from 'express';
import{Request, Response} from 'express';
import User from './userModel'; 

const userRouter = express.Router();

userRouter.post('/createUser', async (req: Request, res: Response)=>{
    try{
   const { username, password }: { username: string; password: string } = req.body;
        console.log("body", req.body);
        
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            const user = new User({
                username,
                password,
            });
            await user.save();
            res.status(201).json({ message: 'New user created successfully' });
        } else {
            res.status(409).json({ message: 'User already exists' });
        }
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a new user', error: error.message });
    }
});
userRouter.post('/login', async (req: Request, res: Response):Promise<any> => {
    const { username, password }: { username: string; password: string } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Username not found. Invalid credentials" });
        }
        
        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        
        res.json({ message: "Login successful", user: { username: user.username } });
    } catch (error: any) {
        console.log("Error retrieving the user:", error.message);
        res.status(500).json({ message: 'Failed to login', error: error.message });
    }
});
// userRouter.post(':username/addPet', async(req:Request, res: Response):Promise<any>=>{
//     const()
// })

export default userRouter;
