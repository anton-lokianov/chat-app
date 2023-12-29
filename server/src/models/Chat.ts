import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface IChat {
  participants: string[];
  createdAt: Date;
  updatedAt: Date;
  messages: string[];
  chatName: string;
  chatImage: string;
  isGroupChat: boolean;
}

const chatSchema = new Schema(
  {
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    chatName: String,
    chatImage: String,
    isGroupChat: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Chat = mongoose.model<IChat & mongoose.Document>(
  'Chat',
  chatSchema,
);
