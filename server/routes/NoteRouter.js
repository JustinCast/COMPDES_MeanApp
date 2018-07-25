'use strict'
var Note = require('../models/NoteSchema')
function getNotes(req, res) {
    Note.find({})
        .then(data => {
            res.json(data)
            //console.log(data)
        })
        .catch(err => {
            const status = req.statusCode
            res.json({
                status,
                err
            })
        })
}

function saveNote(req, res) {
    let note = new Note(req.body)
    console.log(req.body)
    note.save((err, noteStored) => {
        if(err) res.status(500).send({message: `Error al guardar la nota: ${err}`})
        else
            res.status(200).send({message: `Nota guardada con éxito`}) 
    }) 
}

function updateNote(req, res) {
    let update = req.body
    Note.findOneAndUpdate({noteId: update.noteId}, update, (err, noteUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar la nota: ${err}`})
        else{
            res.status(201).send({message: 'Nota actualizada con éxito'})
        }
    })
}


function deleteNote(req, res) {
    let note_id  = req.params._id
    Note.findById(note_id, (err, note) => {
        if(err)
            res.status(500).send({message: `Error al encontrar la nota: ${err}`})
        else
            note.remove(err => {
                if(err)
                    res.status(500).send({message: `Error al borrar la nota: ${err}`})
                else
                    res.status(200).send({message: 'Nota eliminada'})
            })
    })
}

module.exports = {
    getNotes,
    saveNote,
    updateNote,
    deleteNote
}