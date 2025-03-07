import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: [true, 'User ID is required'],
      unique: true,
    },
    password: { type: String, required: [true, 'Password is required'] },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['admin', 'student', 'faculty'] },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);


userSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
    next();
  });
  userSchema.post('save', async function (doc, next) {
    (doc.password = ''), next();
  });

export const User = model<TUser>('User', userSchema);
