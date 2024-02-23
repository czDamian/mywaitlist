import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const emailSchema = new Schema(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

const Emails = mongoose.models.emails || mongoose.model("emails", emailSchema);

export default Emails;
