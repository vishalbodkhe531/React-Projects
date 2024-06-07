import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    color: {
      type: String,
    },

    size: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
