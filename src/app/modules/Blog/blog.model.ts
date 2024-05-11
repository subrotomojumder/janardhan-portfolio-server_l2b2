import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
    },
    subTitle: {
      type: String,
    },
    desBullet: {
      type: [String],
    },
    des: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Blog = model<TBlog>('Blog', blogSchema);
