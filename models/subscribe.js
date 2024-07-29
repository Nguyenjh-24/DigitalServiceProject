import mongoose, { Schema } from "mongoose";

const subscribeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    default: 'notprovided',
    required: false
  },
  pricing: {
    type: String,
    enum: ['Unknown','Gold', 'Platinum', 'Diamond', 'Basic', 'Advanced'], 
    default: 'Unknown',
  },
  renewMonthly: {
    type: Boolean,
    default: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
}, { timestamps: true });


const Subscribe = mongoose.models.Subscribe || mongoose.model("Subscribe", subscribeSchema);

export default Subscribe;
