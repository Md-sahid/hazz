
       
       let openHam = document.querySelector('#t_btm');
       let closeHam = document.querySelector('#t_btm1');
       let navigationItems = document.querySelector('#navigationItems');
       







         let i=0
       openHam.addEventListener("click",function(){
           if(i==0){
            openHam.innerHTML="&#10005;"
            navigationItems.style.display="flex"
               i=1
           }
           else{
            openHam.innerHTML="&#9776;"
            navigationItems.style.display="none"
                i=0
           }
       })
















document.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".faq-question");
    
    questions.forEach(question => {
      question.addEventListener("click", ()=> {
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");
        
        if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.textContent = "+";
        } else {
          answer.style.display = "block";
          icon.textContent ="-";
        }
      });
    });
    
    
  });