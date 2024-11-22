import mongoose, { Document, Schema } from 'mongoose';
 export interface TUser extends Document{
    name: string,
    password: string,
 }

 const userSchema: Schema<TUser> = new Schema({
    name:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
 });
 const user= mongoose.model<TUser>('User', userSchema  );
 console.log("user model created");

export default user;


