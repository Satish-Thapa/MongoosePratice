const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is not sepcfified"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 9,
  review: "babl guleyo",
});
fruit.save();

// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 10,
//   review: "babl guleyo"
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "babl guleyo"
// });

// Fruit.insertMany([kiwi,orange],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Sucesfully added");
//   }

// });

Fruit.find(function (err, fruits) {
  for (let i = 0; i < 3; i++) {
    if (err) {
      console.log(err);
    } else {
      console.log(fruits[i].name);
    }
  }
  console.log("Sakio");
  //mongoose.connection.close();
});

Fruit.updateOne(
  { _id: "62be62ca6f429046abc3a50e" },
  { name: "Lauda" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sucesfully added");
    }
  }
);

Fruit.deleteOne({
  _id: "62be62ca6f429046abc3a50e"
},function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Sucesfully added");
  }
});




//mongoose.connection.close();

// const peopleSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const People = mongoose.model("People",peopleSchema);

// const people = new People({
//   name: "jane",
//   age: 30,
// });

// people.save();
