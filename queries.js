// examples queries using mongo shell

conn = new Mongo()
db = conn.getDB('stabilityDB')
// authorize 
db.auth("stabilityUser", "example")
// get collections names in stability db
db.getCollectionNames()

// add sample data to the collection
db.experiments.insertMany([
    {id: "PT013725", protein: {name: "Endolysin", uniprotId: "P00720"}, originalAA: "R", mutatedAA: "A", position: 119},
    {id: "PT025044", protein: {name: "Endolysin", uniprotId: "P00720"}, originalAA: "R", mutatedAA: "L", position: 96},
    {id: "PT025043", protein: {name: "Endolysin", uniprotId: "P00720"}, originalAA: "R", mutatedAA: "H", position: 96},
    {id: "PT025042", protein: {name: "Endolysin", uniprotId: "P00720"}, originalAA: "R", mutatedAA: "N", position: 96},
    {id: "PT025041", protein: {name: "Endolysin", uniprotId: "P00720"}, originalAA: "R", mutatedAA: "I", position: 96},
    
])
// get all experiments
experiments = db.experiments.find({})

