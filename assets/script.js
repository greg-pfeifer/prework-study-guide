var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length; x++) 
    console.log(topics[x]);
    }

function selectTopic() {
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();


for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
    }

/*

This is an example of an array (multiple items contained within a single variable, in this case "shapes".
The goal is to get the Chrome console to output the names of all shapes (instead of using "console.log" command
for each shape individually). To do this, we use a "loop" - start at "x = 0" (the first shape in the list)
then as long as is x is less than the length of the array (condition), keep running the loop and iterate over
over each item (x++ = x+1) aka keep adding 1 to x var until all iterations are complete

var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
   }

*/

/*

if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}

*/
