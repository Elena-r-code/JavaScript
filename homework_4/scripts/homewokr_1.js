//   let fName = ["Elena", "Maria", "Ana"];
//   let mood = ["good", "happy", "sad"];
//   let activity = ["running", "reading", "playing football"];

// let array =[fName, mood, activity];

//  function tellStory(array){
//     let story = [];
//     let wholeStory = "";


//      for(let i=0; i<array.length; i++){
//          story.push(`This is ${fName[i]}. ${fName[i]} is a nice person. Today she is ${mood[i]}. She is ${activity[i]} all day. The end. n`);

//          wholeStory += story;
//          story = [];


//      }
//      console.log(wholeStory);
//      return wholeStory;

//  }

//  tellStory(array);





function tellStory(array) {
    let story = `This is ${array[0]}. ${array[0]} is a nice person. Today he/she is ${array[1]}. He/She is ${array[2]} all day. The end. \n`;

    console.log(story);

    return story;

}

tellStory(["Ana", "good", "running"]);
tellStory(["Elena", "sad", "reading"]);
tellStory(["Kire", "happy", "teaching"]);













