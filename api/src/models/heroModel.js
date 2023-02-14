import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const HeroSchema = new Schema({
  heroid: {
    type: Number,
  },
  name: {
    type: String,
    required: "Enter a name",
  },
});
