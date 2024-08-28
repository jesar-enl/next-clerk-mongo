import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL || '';

interface MongooseConnector {
  connect: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnector = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { connect: null, promise: null };
}

/**
 * Connects to the database.
 * 
 * @returns A promise that resolves to the database connection.
 */
export const connectToDatabase = async () => {
  if (cached.connect) {
    return cached.connect;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
      dbName: 'clerkMongoDB',
      bufferCommands: false,
      connectTimeoutMS: 300000,
    });
  }

  cached.connect = await cached.promise;
  return cached.connect;
}
