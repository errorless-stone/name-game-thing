

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

      const winPopup = new Popup({
        id: "my-popup",
        title: "YOU BEAT LEVEL 2!!!",
        content: `
        Share your win on {a-https://twitter.com/intent/tweet?text=I%20just%20beat%20level%20two%20of%20JACs%20Name%20Game!!!}[Twitter]
        Move on to the next {a-https://name-game-gang.onrender.com/levelthree}[Level]
        `,
    });

      function showCongratsPopup() {
        document.getElementById('congratsOverlay').style.display = 'flex';
      }
      
      //function goToNextLevel() {
       // response.sendRedirect("index3.ejs");;
       // alert('Going to the next level!');
      //}
      
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
      btnChoices = [correctProf.teach];
      while(btnChoices.includes(wrongProf.teach)){
        wrongProf = clientData[Math.floor(Math.random()*clientData.length)];
      }
      btnChoices.push(wrongProf.teach);
  
      while(btnChoices.includes(wrongProf2.teach)){
        wrongProf2 = clientData[Math.floor(Math.random()*clientData.length)];
      }
      btnChoices.push(wrongProf2.teach);
  
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
       var pickedProfTeach = e.target.getAttribute('value'); 
       // alert(e.target.getAttribute('value')); 
       
       if(correctProf.teach === pickedProfTeach && clientData.length > 3)
         {
           //add one to score
           score++ 
         
           //update score on page  
           $("#score").text(score); 

           var filtered = clientData.filter((item)=> {
            return item.teach != pickedProfTeach;
          })
  
          clientData = filtered;
  
           console.log(clientData);
           
           //load new variables, pic, & buttons
           $("#pic").fadeOut(200,function(){
            play();
            $("#pic").fadeIn();
           });
           
           //turn on all buttons
           $('.guessButton').attr('disabled', false);

           if (score === 9 && clientData.length > 3) {
            winPopup.show();
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