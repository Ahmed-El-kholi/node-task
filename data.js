const fs = require('fs')

// Add person

const addPerson = (id, fname, lname, city, age) => {
    const AllData = loadData()
    const duplicatedData = AllData.filter((obj) => {
        return obj.id === id
    })
    if (duplicatedData.length == 0) {
        AllData.push({
            id: id,
            fname: fname,
            lname: lname,
            city: city,
            age: age
        })

        saveData(AllData)
    }
}

// load data

const loadData = () => {
    try {
        const dataJson = fs.readFileSync('data.json').toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}

// save data

const saveData = (AllData) => {
    const saveAllData = JSON.stringify(AllData)
    fs.writeFileSync('data.json', saveAllData)
}

// Delete data

const deletePerson = (id) => {
    const AllData = loadData()

    const dataTOKeep = AllData.filter((obj) => {
        return obj.id !== id
    })
    saveData(dataTOKeep)


}

// List of { id, fname, lname,city }

const dataList = () => {
    let allData = loadData();
    allData.forEach((obj) => {
        console.log(obj.id, obj.fname, obj.lname, obj.city)
    })
}



// Read only 5th person
const read = (id) => {

    let allData = loadData()

    const itemNeded = allData.find((obj) => {

        return obj.id == id
    })
    console.log(itemNeded)
}
module.exports = {
    addPerson,
    deletePerson,
    dataList,
    read
}