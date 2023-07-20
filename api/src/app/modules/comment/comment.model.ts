import { Schema, model } from 'mongoose';
import { IComment, ICommentModel } from './comment.interface';

const CommentSchema = new Schema<IComment, ICommentModel>(
  {
    comment: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: 'Books'
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const CommentModel = model<IComment, ICommentModel>('Comments',CommentSchema);