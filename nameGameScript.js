

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



  //sets choices into vars
  function loadChoices(){
     $("#score").text(score); 
 
    correctProf = clientData[Math.floor(Math.random()*clientData.length)];
    wrongProf = clientData[Math.floor(Math.random()*clientData.length)];
    wrongProf2 = clientData[Math.floor(Math.random()*clientData.length)];
    btnChoices = [correctProf.name];
    while(btnChoices.includes(wrongProf.name)){
      wrongProf = clientData[Math.floor(Math.random()*clientData.length)];
    }
    btnChoices.push(wrongProf.name);

    while(btnChoices.includes(wrongProf2.name)){
      wrongProf2 = clientData[Math.floor(Math.random()*clientData.length)];
    }
    btnChoices.push(wrongProf2.name);

    shuffleArray(btnChoices);
  }
  


  function buildChoiceButtons(){ 
    $("#btnOne").text(btnChoices[0]).val(btnChoices[0]);
    $("#btnTwo").text(btnChoices[1]).val(btnChoices[1]);
    $("#btnThree").text(btnChoices[2]).val(btnChoices[2]);
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
     var pickedProfName = e.target.getAttribute('value'); 
     // alert(e.target.getAttribute('value')); 
     
     if(correctProf.name === pickedProfName)
       {
         //add one to score
         score++ 
       
         //update score on page  
         $("#score").text(score); 
         
         //load new variables, pic, & buttons
         play();
         
         //turn on all buttons
         $('.guessButton').attr('disabled', false);
       
       }
     else{
       $(pickedProfId).attr("disabled", true);
     }
     
   }); 
   
     

  
});



