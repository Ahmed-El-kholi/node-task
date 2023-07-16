const fs =require("fs")


const Person={
    fname:"ahmed",
    lname:"hosam",
    age:"20",
    city:"alex",
}


const personjson =()=>{
    const persondata=JSON.stringify(Person)
    fs.writeFileSync("person.json",persondata)
}

    const loedData =()=>{
        const datajson = fs.readFileSync("person.json").toString()
        const opjectdata = JSON.parse(datajson)

        opjectdata.fname="adel"
        opjectdata.lname="ahmed"
        opjectdata.age="40"
        opjectdata.city="cairo"


        const upjson= JSON.stringify(opjectdata)

        fs.writeFileSync("person.json",upjson)
    }






module.exports={
    personjson,
    loedData
}