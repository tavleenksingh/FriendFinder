//this variable links our routes to data source
var friendsData = require("../data/friends.js");

// API routing
module.exports = function(app) {
  // API GET Requests when user clicks the link, the event listener will route to the friends file which displays friends data objects in json format

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests. When a user submits a form the below function is exexuted and the user's best match is evaluated

  app.post("/api/friends", function(req, res) {
  
      var userScore = req.body.scores;
      var scoreArray = [];
      var lowestScore = 0;
      // loop throught the friendsData array, and for every score in friends data array at particluar index, store the values of score in anaother variable called tempScore
      //calculate the difference of scores and save it in scoreArray
      for (var i = 0; i < friendsData.length; i++){
            var tempScore = friendsData[i].scores;
            var totalDifference = 0;
          // for every value of score in user's array calculate the difference between the original score (data) in friends array and add it up in a variable called totalDiff
          for (var j = 0; j < userScore.length; j++){
             var sum = Math.abs(parseInt(userScore[j]) - parseInt(tempScore[j]));
             totalDifference += sum;
          }
          // push the value of totalDifference in score array
          scoreArray.push(totalDifference);
      }
      // for every value in score Array, calculate the least amount of difference between the two values
      for (var i = 0; i < scoreArray.length; i++){
          if (scoreArray[i] < scoreArray[lowestScore]){
            lowestScore = i;
          }   
      }
      res.json(friendsData[lowestScore]);
    });
};