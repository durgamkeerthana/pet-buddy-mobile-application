import mongoose, { Document, Schema } from 'mongoose';

export interface TVeterinary {
  name: string;
  experienceYears: number;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface TGrooming {
  name: string;
  yearsOfExperience: number;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface Tservices extends Document {
  veterinary: TVeterinary[];
  grooming: TGrooming[];
}

const VeterinarySchema = new Schema<TVeterinary>({
  name: { type: String, required: true },
  experienceYears: { type: Number, required: true },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
  }
});

const GroomingSchema = new Schema<TGrooming>({
  name: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
  }
});

const servicesSchema = new Schema<Tservices>({
  veterinary: [VeterinarySchema],
  grooming: [GroomingSchema],
});

const servicesModel = mongoose.model<Tservices>('services', servicesSchema);

export default servicesModel;
