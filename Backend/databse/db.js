import mongoose from "mongoose";
const Connection = async () => {
  const URI =
    "mongodb+srv://touqeer:Ansari@cluster0.yimeney.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connect sussessfully...");
  } catch (error) {
    console.log("Error while connecting the database..", error);
  }
};

export default Connection;
