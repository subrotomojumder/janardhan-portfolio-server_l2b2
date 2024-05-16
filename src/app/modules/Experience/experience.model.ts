import { Schema, model } from 'mongoose';
import { TExperience } from './experience.interface';
import { JobType, Office } from './experience.constant';

const experienceSchema = new Schema<TExperience>(
  {
    designation: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    dateOfEntry: {
      type: Date,
      required: true,
    },
    dateOfDeparture: {
      type: Date,
      required: true,
    },
    office: {
      type: String,
      enum: {
        values: Office,
        message: '{VALUE} is not a valid type!',
      },
      required: [true, 'Office type is required'],
    },
    jobType: {
      type: String,
      enum: {
        values: JobType,
        message: '{VALUE} is not a valid type!',
      },
      required: [true, 'Job type is required'],
    },
    logo: {
      type: String,
    },
    certificate: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Experience = model<TExperience>('Experience', experienceSchema);
