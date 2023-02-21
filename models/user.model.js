const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email!'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    // use for the password validation
    type: String,
    required: [true, 'Please confirm a password!'],
    validate: {
      validator: function (pw) {
        return this.password === pw;
      },
      message: 'Incorrect password confirm!',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre('save', async function (next) {
  // Only run if password was actually modified
  if (!this.isModified('password')) return next();

  // hash password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined; // delete password confirm

  next();
});

// # Will be executed after reset password
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000; // update timestamp

  next();
});

// only return active user
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });

  next();
});

/**
 * - Instance methods, use to check user password
 * - available on the user document
 * @param {string} inputPassword Password from input data
 * @param {string} userPassword Password from DB
 * @returns booleans
 */
userSchema.methods.checkPassword = async function (
  inputPassword,
  userPassword
) {
  return bcrypt.compare(inputPassword, userPassword);
};

/**
 * Use to check Pw changed timestamp
 * @param {number} jwtTimestamp JWT Timestamp (iat)
 * @returns Boolean, true(Pw changed), false(Pw not changed)
 */
userSchema.methods.changePasswordAfter = function (jwtTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return changedTimestamp > jwtTimestamp;
  }

  return false;
};

/**
 * Use to generate random token in order to, user can reset his own password
 */
userSchema.methods.createResetPasswordToken = function () {
  // generate random token (plain text token)
  const resetToken = crypto.randomBytes(32).toString('hex');

  // encryption
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 mins

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
