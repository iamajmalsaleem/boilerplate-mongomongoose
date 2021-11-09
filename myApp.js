require('dotenv').config();
var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ajmal_123:ajmal_123@cluster0.gyspb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const {Schema} = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person',personSchema);

const createAndSavePerson = (done) => {
  let Ajmal = new Person({
    name: "Ajmal Saleem",
    age:22,
    favoriteFoods: ["Meat","Egg","Fruits & Veggies"]
  })

Ajmal.save((err,data)=>{
  if (err) console.log(err);
  done(null , data);
})
};

let arrayOfPeople = [{
    name: "Saleem",
    age:22,
    favoriteFoods: ["Milk","Egg","Fruits & Veggies"]
  },{
    name: "Shameel",
    age:25,
    favoriteFoods: ["Meat","Egg","Veggies"]
  },{
    name: "Najla Saleem",
    age:15,
    favoriteFoods: ["Fruits & Veggies"]
  }];

const createManyPeople = (arrayOfPeople, done) => {
Person.create(arrayOfPeople,(err,data)=>{
  if (err) console.log(err);
  done(null , data);
})
};

const findPeopleByName = (personName, done) => {
  Person.find({name:personName},(err,data)=>{
  if (err) console.log(err);
  done(null , data);
})
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},(err,data)=>{
  if (err) console.log(err);
  done(null , data);
})
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId},(err,data)=>{
  if (err) console.log(err);
  done(null , data);
})
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
