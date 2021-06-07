const fs = require('fs')
const chalk = require('chalk')
const note = "Your notes..."


const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    
    //console.log(duplicateNote)
    debugger
    
    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    }
    else
    {
        console.log(chalk.red.inverse("Note title already taken!"))
    }
}

// const addNote = (title, body) =>{
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter((note) => note.title === title)
//     if(duplicateNotes.length === 0)
//     {
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log(chalk.green.inverse("New note added!"))
//     }
//     else
//     {
//         console.log(chalk.red.inverse("Note title already taken!"))
//     }
// }

const remNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    }
    else
    {
        console.log(chalk.red.inverse("No Note found!"))
    }
}

const listNotes = () => {
    console.log(chalk.green.inverse("Your notes"))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else
    {
        console.log(chalk.red.inverse("Note not found!"))
    }
}


// const readNote = (title) => {
//     const notes = loadNotes()
//     const haveNote = notes.filter((note) => note.title === title)
//     if(haveNote.length === 1)
//     {
//         haveNote.forEach((note) => {
//         console.log(chalk.green.inverse(note.title))
//         console.log(note.body)
//         })
//     }
//     else
//     {
//         console.log(chalk.red.inverse("Error"))
//     }
// }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
    try
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return[]
    }    
}

module.exports = {
    addNote: addNote,
    remNote: remNote,
    listNotes: listNotes,
    readNote: readNote
}