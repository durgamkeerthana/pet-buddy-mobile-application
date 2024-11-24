import mongoose, { Document, Schema } from 'mongoose';
 export interface TUser extends Document{
    username: string,
    password: string,
 }
 const userSchema: Schema<TUser> = new Schema({
    username:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
 });
 const User= mongoose.model<TUser>('User', userSchema  );
 console.log("user model created");

export default User;


