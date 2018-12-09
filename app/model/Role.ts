'use strict';

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB;

  const roleSchema = new Schema({
    name: {type: String},
    alias: {type: String},
    grants: [{type: Schema.Types.ObjectId, ref: 'Permission'}],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

  return conn.model('Role', roleSchema);
};
