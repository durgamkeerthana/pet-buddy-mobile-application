import express, { Request, Response } from 'express';
import servicesModel from './ServicesModel'; 


const router = express.Router();


router.post('/addServices', async (req: Request, res: Response):Promise<any> => {
  const { veterinary, grooming } = req.body; 
  
  if (!veterinary || !grooming) {
    return res.status(400).json({ message: 'Veterinary and Grooming data are required' });
  }

  try {
    
    const newServiceData = new servicesModel({
      veterinary,
      grooming,
    });

    
    const result = await newServiceData.save();

    
    res.status(201).json({ message: 'Service data added successfully', data: result });
  } catch (error) {
    console.error('Error saving service data:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

export default router;