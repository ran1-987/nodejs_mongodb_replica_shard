import { mongoose } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const options = {
    readPreference: 'secondaryPreferred',  // Read from secondary when possible
    replicaSet: 'shard_repl',              // Replica set name, optional if applicable
  };
const connectDB = async () => {
  try {
    await mongoose.connect(uri,{
        serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
      });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
   