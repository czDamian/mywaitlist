import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const emailSchema = new Schema(
  {
    email: String,
    address: String,
    points: Number,
  },
  {
    timestamps: true,
  }
);

const Emails =
  mongoose.models.Data || mongoose.model("Data", emailSchema);

export default Emails;
