require('dotenv').config();

const key = process.env.SECRET_KEY;

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

let eventId = 0;
axios.get(`https://api.seatgeek.com/2/events/?client_id=${key}&q=boston+celtics`)
    .then(res => {
          let largestNum = 0;
          let largestKey = 0;
          // in a search query and print the name of the first 10
          //events related to that  query along with their score.
            for (let i = 0; i <= 9; i++) {
                console.log(res.data.events[i].score, res.data.events[i].title);
                if (res.data.events[i].score > largestNum) {
                    largestNum = res.data.events[i].score;
                    largestKey = i;
                    eventId = res.data.events[i].id;
                }
            }
            // Find the event with the highest score.
            console.log('this is the event and largest score', res.data.events[largestKey].title, 'with a score of', res.data.events[largestKey].score, )
        })
    // Print the name of 10 events that are recommended based on the event that we found in step 2.
    .then(res => {
        axios.get(`https://api.seatgeek.com/2/recommendations/?events.id=${eventId}&client_id=${key}`)
            .then(response => {
              for (let i = 0; i <= 9; i++) {
                console.log(response.data.recommendations[i].event.title);
              }
        });
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
