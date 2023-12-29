import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface Friend {
  requester: string;
  recipient: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const friendSchema = new Schema(
  {
    requester: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['requested', 'accepted'],
      required: true,
    },
  },
  { timestamps: true },
);

export const Friend = mongoose.model<Friend & mongoose.Document>(
  'Friend',
  friendSchema,
);
