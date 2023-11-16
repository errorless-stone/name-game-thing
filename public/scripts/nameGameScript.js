

$(function() {
    console.log( "ready!" );

    var rightProf = clientData[Math.floor(Math.random()*clientData.length)];
    var wrongProf = clientData[Math.floor(Math.random()*clientData.length)];
    var wrongProf2 = clientData[Math.floor(Math.random()*clientData.length)];
    var rightProfName = rightProf.name;
    var wrongProfName = wrongProf.name;
    var wrongProfName2 = wrongProf2.name;
    var randArray = [rightProfName, wrongProfName, wrongProfName2];

    //load three buttons. id=but1 but2 but3 
     for(i=0; i < 3; i++){
        $('#button-box').append(
            $(document.createElement('button')).prop({
                type: 'button',
                innerHTML: randArray[i],
                class: 'btn btn-primary guessButton',
                id: "button"+(i+1),
                style: "margin-right: 20px"
            })
        ); 
     }

    console.log("rightProfName",rightProfName)

    $("#pic").attr("src", rightProf.image); 

    $(".guessButton").on("click", (e)=>{
        console.log("clicky");
        $("#pic").fadeOut(1000,function(){
            $("#pic").attr("src", rightProf.image); 
        });
        
        rightProfName = rightProf.name;

        console.log("correct person", rightProfName); 
        console.log("name of button we clicked", $("#aBUTTON").text()); 


        //if(randProfName === $(this).valattr("innnerHTML") {}

        $("#pic").fadeIn();
        rightProf = clientData[Math.floor(Math.random()*clientData.length)];
    }); 

    $.each(clientData, (key, value) => {
      console.log(key, value);
      console.log(value.image); 
    })
});


