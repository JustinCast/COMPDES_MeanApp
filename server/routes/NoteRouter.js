const Note = require('../models/Note')

function getNotes(req, res) {
    Note.find()
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        res.json({err: `La petición no ha sido ejecutada: ${err}`})
    })
}

function saveNote(req, res) {
    let note = req.body
    note.save((err, noteStored) => {
        if(err){
            res.status(500).send({message: "error interno del servidor"})
        }
        else {
            res.stastus(201).send({message: "Nota guardada con éxito"})
        }
    })
}

module.exports = {
    getNotes,
    saveNote
}