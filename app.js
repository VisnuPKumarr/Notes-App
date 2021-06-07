
const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')
const Notes = require('./notes.js')

//customize yargs version

yargs.version('1.1.0')

// Create add Command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:
    {
        title:
        {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:
        {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.addNote(argv.title, argv.body)
        // console.log('Title: ' + argv.title),
        // console.log('Body: '+ argv.body)
    }
})

// Create remove Command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:
    {
        title:
        {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.remNote(argv.title)
        //console.log('Removing the note!')
    }
})

// Create list Command

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler()
    {
        console.log('Listing out all notes!')
        notes.listNotes()
    }
})

// Create read Command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:
    {
        title:
        {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        // console.log('Reading the note!')
        notes.readNote(argv.title)
    }
})


// add, remove, read,  list



console.log(yargs.argv)





// const command = process.argv[2]

// if(command === 'add')
// {
//     console.log('Adding note!')
// }
// else if(command === 'remove')
// {
//     console.log('Removing note!')
// }









// const chalk = require('chalk')
// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(chalk.red.bold(msg))
// console.log(chalk.bgRedBright.green.inverse('Success!'))

// const validator = require('validator')
// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)
// console.log(validator.isURL('https//cognizant.com'))

// const validator = require('validator')
// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)
// console.log(validator.isEmail('visnu@example.com'))

// const add = require('./utils.js') 
// const sum = add(425,-232)
// console.log(sum)

// const name = require('./utils.js')
// console.log(name)


// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Andrew.')
// fs.appendFileSync('notes.txt', ' I live in Philadelphia.')