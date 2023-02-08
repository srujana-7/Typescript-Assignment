
import * as mongoose from "mongoose";
import { Model } from "mongoose";

type UserType = UserModel & mongoose.Document;
export interface UserModel {
  name: {
    type: String,
    required: true,
  };
  email: {
    type: String,
    required: true,
  };

  dob: {
    type: Date,
   
  };
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob:{
    type: Date,
  
  }
},
{timestamps:true}
);
const User: Model<UserType> = mongoose.model < UserType > ("User", UserSchema);
export default User;