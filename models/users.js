import mongoose, { Schema, models } from "mongoose";

function generateRefCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  refCode: {
    type: String,
    default: 'NOTREGISTERED',
    required: true,
    unique: true
  },
  plan: {
    type: String,
    enum: ['basic', 'gold', 'platinum', 'diamond', 'admin'], 
    default: 'basic'
  },
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (this.isNew && this.refCode === 'NOTREGISTERED') {
    let unique = false;
    while (!unique) {
      const newRefCode = generateRefCode();
      const existingUser = await mongoose.models.User.findOne({ refCode: newRefCode });
      if (!existingUser) {
        this.refCode = newRefCode;
        unique = true;
      }
    }
  }
  next();
});

const User = models.User || mongoose.model("User", userSchema);

export default User;
