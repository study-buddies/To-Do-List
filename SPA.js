
// holds user's course progress
let userProgress = [
  {"category": "overall", "completed": 127, "total": 153},
  {"category": "html", "completed": 50, "total": 50},
  {"category": "css", "completed": 50, "total": 50},
  {"category": "javascript", "completed": 25, "total": 50},
  {"category": "projects", "completed": 2, "total": 3}
];

function updateBars() {
  
  for (let i=0; i<userProgress.length; i++){ 
    let bar = document.getElementById(userProgress[i].category); // get div id
    let completed = userProgress[i].completed;
    let total = userProgress[i].total;
    let width = 0; // bar progress
    let percentComplete = (completed / total) * 100; // return percent
    let time = setInterval(fillBar, 10); // set animation speed
    
    function fillBar() {
      if (width >= percentComplete) {
        clearInterval(time); // stop interval
      } else {
        width++; 
        bar.style.width = width + '%'; // increase bar
      }
    }
  }
}
updateBars();                      