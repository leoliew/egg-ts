'use strict';

module.exports = (app) => {

  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB;

  const permissionSchema = new Schema({
    name: {type: String},
    alias: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

  return conn.model('Permission', permissionSchema);
};
