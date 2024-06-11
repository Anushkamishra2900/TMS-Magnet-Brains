import mongoose from "mongoose";
// mongoose library of MongoDB

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MAGNET_BRAINS_TASK_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database! " + process.env.MONGO_URI);
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! : ${err}`);
    });
};
