
//holds friends data in an array of objects to compare to new user's profile

var friendsArray = [
{"name":"Jackie",
  "photo":"http://rack.1.mshcdn.com/media/ZgkyMDE2LzAxLzI4LzViL3dvcnJpZWRjYXQuNGUyM2EuanBnCnAJdGh1bWIJMTIwMHg2MjcjCmUJanBn/40fe1d67/42c/worried-cat.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1]},

{"name":"Tom",
  "photo":"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
  "scores":[
     5,
     1,
     2,
     4,
     2,
     1,
     5,
     5,
     2,
     1]},
{"name":"Kim",
   "photo":"http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-17.jpg",
   "scores":[
      1,
      1,
      2,
      1,
      2,
      1,
      5,
      3,
      1,
      1]}
];

//exporting the array makes this file accessible using require
module.exports = friendsArray; 



