const clickCount = {
    smile: 0,
    sad: 0,
    laugh: 0,
    heart: 0,
    thumbsUp: 0
  };
  
    const counterContainer = document.querySelector("#counter-container");
    let counters = {};
    
    counterContainer.addEventListener("click", (e) => {
      let target = e.target;
      
      if (target.classList.contains("button")) {
        let option = target.id;
        clickCount[option]++;
        console.log(clickCount);
        
        if (!counters[option]) {
          counters[option] = document.createElement("span");
          counters[option].id = option + "-counter";
          counters[option].textContent = "0";
          counterContainer.append(counters[option]);
        }
        
        counters[option].textContent = clickCount[option];
      }
    });
 