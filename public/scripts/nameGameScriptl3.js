

$(function() {
    console.log( "ready!" );
  
    let score = 0; 
    
    
    //initialize variables, global scope w/in doc.ready f/n
    let correctProf, wrongProf, wrongProf2 = " "; 
    let btnChoices = []; 
    
    
    //shuffling array for buttons
    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }


      function showCongratsPopup() {
        document.getElementById('congratsOverlay').style.display = 'flex';
      }
      
      //function goToNextLevel() {
        // Add your logic to proceed to the next level here
       // alert('Going to the next level!');
     // }
      
      // Call the showCongratsPopup function when the page loads (for demonstration purposes)
      window.onload = function () {
        showCongratsPopup();
      };
  
  
  
  
    //sets choices into vars
    function loadChoices(){
       $("#score").text(score); 
   
      correctProf = clientData[Math.floor(Math.random()*clientData.length)];
      wrongProf = clientData[Math.floor(Math.random()*clientData.length)];
      wrongProf2 = clientData[Math.floor(Math.random()*clientData.length)];
      btnChoices = [correctProf.fact];
      while(btnChoices.includes(wrongProf.fact)){
        wrongProf = clientData[Math.floor(Math.random()*clientData.length)];
      }
      btnChoices.push(wrongProf.fact);
  
      while(btnChoices.includes(wrongProf2.fact)){
        wrongProf2 = clientData[Math.floor(Math.random()*clientData.length)];
      }
      btnChoices.push(wrongProf2.fact);
  
      shuffleArray(btnChoices);
    }
    
  
  
    function buildChoiceButtons(){ 
      $("#btnOne").text(btnChoices[0]).val(btnChoices[0]).css("background-color","#0b5ed7");
      $("#btnTwo").text(btnChoices[1]).val(btnChoices[1]).css("background-color","#0b5ed7");
      $("#btnThree").text(btnChoices[2]).val(btnChoices[2]).css("background-color","#0b5ed7");
    }
    
    function loadPic(){
      $("#pic").attr("src", correctProf.image); 
    }
    
    function play(){ 
      loadChoices(); 
      loadPic(); 
      buildChoiceButtons(); 
    }
   
    //call this function first time to play!
    play(); 
    
     $(".guessButton").on("click", (e)=>{
       
       var pickedProfId = "#" + e.target.getAttribute('id'); 
       var pickedProfFact = e.target.getAttribute('value'); 
       // alert(e.target.getAttribute('value')); 
       
       if(correctProf.fact === pickedProfFact)
         {
           //add one to score
           score++ 
         
           //update score on page  
           $("#score").text(score); 
           
           //load new variables, pic, & buttons
           $("#pic").fadeOut(200,function(){
            play();
            $("#pic").fadeIn();
           });
           
           //turn on all buttons
           $('.guessButton').attr('disabled', false);

           if (score === 15) {
            showCongratsPopup();
         }
         
         }
       else{
      //subract score
      score--

      //update score on page  
      $("#score").text(score);

       $(pickedProfId).attr("disabled", true);
       $(pickedProfId).css("background-color","red");
      }
       
     }); 
     
       
  
    
  });