import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IUser {
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
  image: string;
}

export const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    image: String,
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

export const User = mongoose.model<IUser & mongoose.Document>(
  'User',
  userSchema,
);
