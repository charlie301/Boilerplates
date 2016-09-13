/*jslint node: true */
"use strict";

/* DEFINE MONGO SCHEMA =======================================================*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/* SCHEMA DEFINITION
=========*/
let BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    pages: { type: Number, required: true, min: 1 },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false
  }
);

/* PRE SAVE HOOK
=========*/
BookSchema.pre('save', next => {
 var now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

//Exports the BookSchema for use elsewhere.
module.exports = mongoose.model('book', BookSchema);
