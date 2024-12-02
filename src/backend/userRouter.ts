import * as express from 'express';
import {Request, Response} from 'express';
import User from './userModel';
import Pet from './petModel';
const userRouter = express.Router();

userRouter.post('/createUser', async (req: Request, res: Response) => {
  try {
    const {
      username,
      password,
      aboutme,
      email,
      phonenumber,
      adress,
    }: {
      username: string;
      password: string;
      aboutme: string;
      email: string;
      phonenumber: string;
      adress: string;
    } = req.body;
    console.log('Received data:', req.body);

    const existingUser = await User.findOne({username});
    if (!existingUser) {
      const user = new User({
        username,
        password,
        aboutme,
        email,
        phonenumber,
        adress,
      });
      await user.save();
      res.status(201).json({message: 'New user created successfully'});
    } else {
      res.status(409).json({message: 'User already exists'});
    }
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({message: 'Failed to create a new user', error: error.message});
  }
});

userRouter.post('/login', async (req: Request, res: Response): Promise<any> => {
  const {username, password}: {username: string; password: string} = req.body;
  try {
    const user = await User.findOne({username});
    if (!user) {
      return res
        .status(401)
        .json({message: 'Username not found. Invalid credentials'});
    }

    if (user.password !== password) {
      return res.status(401).json({message: 'Incorrect password'});
    }

    res.json({message: 'Login successful', user: {username: user.username}});
  } catch (error: any) {
    console.log('Error retrieving the user:', error.message);
    res.status(500).json({message: 'Failed to login', error: error.message});
  }
});
userRouter.post(
  '/addPet',
  async (req: Request, res: Response): Promise<any> => {
    try {
      const {
        name,
        breed,
        age,
        image,
        gender,
        weight,
        height,
        color,
        remarks,
      }: {
        name: string;
        age: number;
        breed: string;
        image?: string;
        gender: string;
        height: number;
        weight: number;
        color: string;
        remarks: string;
      } = req.body;
      console.log('body', req.body);
      const existingPet = await Pet.findOne({name});
      if (!existingPet) {
        console.log('no pet');

        const pet = new Pet({
          name,
          age,
          breed,
          image,
          gender,
          weight,
          height,
          color,
          remarks,
        });

        await pet.save();
        res.status(201).json({message: 'New pet added successfully'});
      } else {
        console.log('pet already exists');
        res.status(409).json({message: 'Pet already exists'});
      }
    } catch (error: any) {
      console.error(error);
      res
        .status(500)
        .json({message: 'Failed to add a new pet', error: error.message});
    }
  },
);
userRouter.get('/getPets', async (req: Request, res: Response) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({message: 'Failed to fetch pets'});
  }
});
userRouter.get('/getUser',async (req: Request, res: Response): Promise<any> => {
    const {username}: {username: string} = req.body;
    if (!username) {
      return res.status(400).json({message: 'Username is required'});
    }
    try {
      const user = await User.findOne({username});
      if (!user) {
        return res.status(404).json({message: 'User not found'});
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({message: 'Failed to fetch user details'});
    }
  },
);
userRouter.post('/addImageToGallery', async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, imageUri }: { name: string; imageUri: string } = req.body;

    const pet = await Pet.findOne({ name });

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

      
    pet.gallery.push(imageUri);

  
    await pet.save();

    res.status(200).json({ message: 'Image added to gallery successfully', gallery: pet.gallery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add image to gallery'});
  }
});
userRouter.get('/getPetsGallery', async (req: Request, res: Response):Promise<any> => {
  try {
    const { name }: { name: string } = req.query as { name: string };

    if (!name) {
      return res.status(400).json({ message: 'Pet name is required' });
    }

    const pet = await Pet.findOne({ name });

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    res.status(200).json({ gallery: pet.gallery });
  } catch (error) {
    console.error('Error fetching pet gallery:', error);
    res.status(500).json({ message: 'Failed to fetch pet gallery' });
  }
});

export default userRouter;
