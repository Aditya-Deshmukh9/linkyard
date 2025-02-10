import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );

    console.log(`\n Mongodb connection: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`\n Monogodb connected to Failed `, error);
    process.exit(1);
  }
};
