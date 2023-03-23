var mongoose = require("mongoose");

// module.exports = mongoose.model("Sample",{
//     name: {type: String, require: true},
//     email: {type:String, require: true},
//     password: {type: String, require: true}
// });
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: [isEmail, 'Invalid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long']
  }
});

module.exports = mongoose.model('Sample', UserSchema);
