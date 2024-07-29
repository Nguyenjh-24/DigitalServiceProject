import mongoose, { Schema } from "mongoose";

function generateIssueID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const contactSchema = new Schema({
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
  title: {
    type: String, 
    required: false
  },
  message: {
    type: String,
    required: true
  },
  issueID: {
    type: String,
    default: 'notcoded',
    required: true,
    unique: true
  },
  resolved: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

contactSchema.pre('save', async function(next) {
  if (this.isNew && this.issueID === 'notcoded') {
    let unique = false;
    while (!unique) {
      const newIssueID = generateIssueID();
      const existingContact = await mongoose.models.Contact.findOne({ issueID: newIssueID });
      if (!existingContact) {
        this.issueID = newIssueID;
        unique = true;
      }
    }
  }
  next();
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
