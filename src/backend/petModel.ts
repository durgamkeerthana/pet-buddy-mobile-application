import mongoose, {Document, Schema} from 'mongoose';
//type Gender= 'Male'|'Female';
export interface TPet extends Document {
  // owner: mongoose.Schema.Types.ObjectId;
  image: string,
  name: string,
  breed: string,
  gender:string,
  age: number,
  weight: number,
  height: number,
  color: string,
  remarks: string,
}
const petSchema: Schema<TPet> = new Schema({
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  image:{
type: String,
  },
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
    
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type:Number,
    required: true,
  },
  height: {
    type: Number,
  },
  color: {
    type: String,
  },
  remarks: {
    type: String,
  },
  gender:{
    type: String,
    required: true, 
  },
});
const Pet = mongoose.model<TPet>('Pet', petSchema);
console.log('Pet model created');

export default Pet;
