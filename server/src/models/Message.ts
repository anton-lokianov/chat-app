import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface IMessage {
  chat: string;
  sender: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deliveredAt: Date;
  readAt: Date;
  attachments: string;
}

const messageSchema = new Schema(
  {
    chat: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    deliveredAt: Date,
    readAt: Date,
    attachments: String,
  },
  { timestamps: true },
);

export const Message = mongoose.model<IMessage & mongoose.Document>(
  'Message',
  messageSchema,
);
