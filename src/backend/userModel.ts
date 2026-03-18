import mongoose, { Document, Schema } from 'mongoose';
 export interface TUser extends Document{
    username: string,
    password: string,
    aboutme: string,
    email: string,
    phonenumber: string,
    adress: string,
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
    aboutme:{
        type: String,
    },
    email:{
        type: String,
        required:true,
    },
    phonenumber:{
        type: String,
    },
    adress:{
        type:String,
    },
});
 const User= mongoose.model<TUser>('User', userSchema  );
 console.log("user model created");

export default User;


