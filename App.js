
const data = require('./data')
const yargs = require('yargs')
const task1=  require('./task1')
task1.personjson()
task1.loedData()

//  Add Person

yargs.command({
    command: 'add',
    describe: 'Add items.',
    builder: {
        id: {
            describe: 'this is id',
            demandOption: true,
            type: "string"
        },
        fname: {
            describe: 'this is fname',
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: 'this is lname',
            demandOption: true,
            type: "string"
        },
        city: {
            describe: 'this is city',
            demandOption: true,
            type: "string"
        },
        age: {
            describe: 'this is age',
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.addPerson(x.id, x.fname, x.lname, x.city, x.age)
    }

})
// Delete person

yargs.command({
    command: 'delete',
    describe: 'Delete items.',
    builder:{
        id:{
            describe:'this is an id',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        data.deletePerson(x.id)
    }
})

// Data list
yargs.command({
    command:"list",
    description:"List all persons.",
handler:()=>{
    data.dataList()
}
})

// Read only 5th person
yargs.command({
    command:"read",
    description:"Read only 5th person",
    builder:{
        id:"id",
        demandOption: true,
        type: 'string'
    },

    handler:(x)=>{
        data.read(x.id)
    }
})   
yargs.parse()