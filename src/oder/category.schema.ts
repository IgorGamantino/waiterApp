import * as mongoose from 'mongoose';

export const OderSchema = new mongoose.Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    required: true,
  },
});
