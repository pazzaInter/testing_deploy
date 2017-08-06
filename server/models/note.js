const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  body: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
},
  {
    timestamps: true
});

module.exports = mongoose.model('Note', userSchema);
