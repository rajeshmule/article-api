const { Schema, model } = require("mongoose");
const { hash, compare } = require("bcryptjs");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.password && this.isModified("password")) {
      this.password = await hash(this.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.verifyPassword = async function (password, next) {
  try {
    return await compare(password, this.password);
  } catch (error) {
    next(error);
  }
};

userSchema.methods.format = function () {
  return {
    id: this._id,
    email: this.email,
    name: this.name,
  };
};

const User = model("User", userSchema);

module.exports = User;
