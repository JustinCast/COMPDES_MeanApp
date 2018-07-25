'use strict'
const express = require('express')
const api = express.Router()
const NoteCTRL = require('./NoteRouter')

module.exports = api

api.get('getNotes', NoteCTRL.getNotes)