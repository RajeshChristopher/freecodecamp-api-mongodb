require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person",personSchema);

//let Person;

//const createAndSavePerson = (done) => {
  //done(null /*, data*/);
//};

const createAndSavePerson = (done) => {
  const jake = new Person({name:"Jake",age:32,favoriteFoods:["Pizza","Burger"]});
  jake.save(function(err,data){
    if(err){
      return console.log(err);
    }
    else{
      done(null,data)
    }
  });
  //done(null /*, data*/);
};

const arrayOfPeople = [{name:"Peter",age:16,favoriteFoods:["Hamburger","Sandwich"]},{name:"Scott",age:35,favoriteFoods:["Beef","Pepperoni"]},{name: "Robert", age: 78, favoriteFoods: ["wine"]}];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,function(err,people){
    if(err){
      return console.log(err);
    }else{
      done(null,people);
    }
  });
  //done(null /*, data*/);
};

//const createManyPeople = (arrayOfPeople, done) => {
  //done(null /*, data*/);
//};

//const findPeopleByName = (personName, done) => {
  //done(null /*, data*/);
//};

const findPeopleByName = (peopleName, done) => {
  Person.find({name:peopleName},function(err,peopleFound){
    if(err){
      return console.log(err);
    }else{
      done(null,peopleFound);
    }
  });
  //done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},function(err,foodFound){
    if(err){
      return console.log(err);
    }else{
      done(null,foodFound);
    }
  });
  //done(null /*, data*/);
};


//const findOneByFood = (food, done) => {
//  done(null /*, data*/);
//};

const findPersonById = (personId, done) => {
  Person.findById(personId,function(err,idFound){
    if(err){
      return console.log(err);
    }else{
      done(null,idFound);
    }
  });
  //done(null /*, data*/);
};

//const findPersonById = (personId, done) => {
  //done(null /*, data*/);
//};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId,function(err,person){
    if(err){
      return console.log(err);
    }else{
      //console.log(person)
      person.favoriteFoods.push(foodToAdd);
      //console.log(person);
      person.save((err,updatedPerson) => {
        if(err){
          return console.log(err);
        }else{
          done(null,updatedPerson);
        }
      });
    }
  });

 // done(null /*, data*/);
};

//const findEditThenSave = (personId, done) => {
  //const foodToAdd = "hamburger";

  //done(null /*, data*/);
//};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name:personName},{age:ageToSet},{new:true},function(err,updatedPersonAge){
    if(err){
      return console.log(err);
    }else{
      done(null,updatedPersonAge);
    }
  });

  //done(null /*, data*/);
};

//const findAndUpdate = (personName, done) => {
  //const ageToSet = 20;

  //done(null /*, data*/);
//};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId,function(err,idRemoved){
    if(err){
      return console.log(err);
    }else{
      done(null,idRemoved);
    }
  });
  //done(null /*, data*/);
};

//const removeById = (personId, done) => {
  //done(null /*, data*/);
//};

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
