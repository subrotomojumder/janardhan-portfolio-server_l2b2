import { Schema, model } from 'mongoose';
import { TLink, TProject } from './project.interface';
import { ProjectType } from './project.constant';

const linkSchema = new Schema<TLink>({
  frontendLive: {
    type: String,
  },
  frontCode: {
    type: String,
  },
  frontExplain: {
    type: String,
  },
  backendLive: {
    type: String,
  },
  backendCode: {
    type: String,
  },
  backendExplain: {
    type: String,
  },
  others: {
    type: String,
  },
});

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: [true, 'Project title is required!'],
      unique: true,
      trim: true,
    },
    des: {
      type: String,
    },
    desBullet: {
      type: [String],
    },
    projectType: {
      type: String,
      enum: {
        values: ProjectType,
        message: '{VALUE} is not a valid type!',
      },
      required: [true, 'Project type is required'],
    },
    images: {
      type: [String],
    },
    technologies: {
      type: [String],
      required: [true, 'Uses technology is required!'],
    },
    links: {
      type: linkSchema,
    },
  },
  { timestamps: true },
);

export const Project = model<TProject>('Project', projectSchema);
