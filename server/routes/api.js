'use strict'
const express = require('express')
const api = express.Router()
const NoteCTRL = require('./NoteRouter')

api.get('/getNotes', NoteCTRL.getNotes)
api.post('/saveNote', NoteCTRL.saveNote)

module.exports = api