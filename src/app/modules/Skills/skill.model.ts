import { Schema, model } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    logo: {
      type: String,
    },
    dateOfEntry: {
      type: Date,
    },
    level: {
      type: Number
    }
  },
  { timestamps: true },
);

export const Skill = model<TSkill>('Skill', skillSchema);
