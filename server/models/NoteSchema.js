'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    CreationDate: {
        type: Date,
        required: true
    },
    AssignedDate: {
        type: Date,
        required: true
    }
})

module.exports  = mongoose.model('notes', NoteSchema)