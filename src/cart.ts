import mongoose, { Document, Schema } from "mongoose";

// Define a more accurate Cart item interface
export interface ICartItem {
  productId: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

// Define the main Cart interface extending mongoose's Document
export interface ICart extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  items: ICartItem[];
}

// Define the Cart schema with correct ObjectId types
const cartSchema = new Schema<ICart>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

// Create the Cart model using the schema
const Cart = mongoose.model<ICart>("Cart", cartSchema);

export default Cart;
