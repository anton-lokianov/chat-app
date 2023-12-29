import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  friends: string[];
  lastOnline: Date;
  createdAt: Date;
  updatedAt: Date;
  isOnline: boolean;
  lastActivity: Date;
  statusMessage: string;
}

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    isOnline: { type: Boolean, default: false },
    lastActivity: Date,
    statusMessage: String,
  },
  { timestamps: true },
);

export const User = mongoose.model<User & mongoose.Document>(
  'User',
  userSchema,
);
