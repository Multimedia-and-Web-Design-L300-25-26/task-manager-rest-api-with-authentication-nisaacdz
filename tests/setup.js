import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

beforeAll(async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/taskmanager_test";
  await mongoose.connect(uri);
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});