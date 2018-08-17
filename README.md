# Technical screening for Bread Finance

## Objective
Using the documentation found on https://platform.seatgeek.com/, I was asked to complete the following assignments.

1. Build a function that takes in a search query and prints the name of the first 10 events related to that  query along with their score.
2. Find the event with the highest score.
3. Print the name of 10 events that are recommended based on the event that we found in step 2.


### Breakdown
* Tested me on API request and the use of query strings. (question 1)
The base events(events on the documentation) request of:
```
https://api.seatgeek.com/2/events/
```
* parameters for our query string. **client SECRET KEY** & **boston + celtics**
```
?client_id=<SECRET_KEY> + &q=boston+celtics
```


* A lesson on linear search (question 2)
```
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
```

* A lesson on scoping (question 3)



### Breakdown

To start up the project
In our terminal cd into the directory and type in the following commands
1. npm install
2. node
