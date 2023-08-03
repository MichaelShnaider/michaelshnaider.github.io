const containers = [
    "todoList", 
    "uniRanker", 
    "neuroPsych", 
    "tap", 
    "colorGuess", 
    "yelpCamp", 
    "memorize", 
    "devcertified", 
    "cruizor", 
    "aboutMe"
  ];
  
  let mainCircle = document.querySelector(".mainCircle");
  let currentlyActive = "aboutMe";
  
  function hideContainers() {
    containers.forEach(container => {
      if (container !== currentlyActive) {
        document.querySelector(`.${container}Container`).style.display = "none";
      } else {
        document.querySelector(`.${container}Container`).style.display = "block";
      }
    });
  }
  
  function changeActive(newActive) {
    if (currentlyActive !== newActive) {
      mainCircle.classList.add(`${newActive}Circle`);
      mainCircle.classList.remove(`${currentlyActive}Circle`);
      document.querySelector(`.${currentlyActive}Container`).style.display = "none";
      document.querySelector(`.${newActive}Container`).style.display = "block";
      currentlyActive = newActive;
    }
  }
  
  hideContainers();
  
  containers.forEach(container => {
    document.getElementById(`${container}Small`).addEventListener("click", function() {
      changeActive(container);
    });
  });
  
  const info = document.getElementById("helpfulInfo");
  
  function fade(element) {
    let op = 1;
    const timer = setInterval(function () {
      if (op <= 0.1){
        clearInterval(timer);
        element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = `alpha(opacity=${op * 100})`;
      op -= op * 0.1;
    }, 15);
  }
  
  setTimeout(function(){
    fade(info);
  }, 10000);
  