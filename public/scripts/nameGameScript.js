

$(function() {
    console.log( "ready!" );

    var randProf = clientData[Math.floor(Math.random()*clientData.length)];


    //load three buttons. id=but1 but2 but3 

    $("#pic").attr("src", randProf.image); 
    var randProfName = randProf.name; 

    $("button").on("click", (e)=>{
        console.log("clicky");
        $("#pic").fadeOut(1000,function(){
            $("#pic").attr("src", randProf.image); 
        });
        
        randProfName = randProf.name;

        console.log("correct person", randProfName); 
        console.log("name of button we clicked", $("#aBUTTON").text()); 


        //if(randProfName === $(this).valattr("innnerHTML") {}

        $("#pic").fadeIn();
        randProf = clientData[Math.floor(Math.random()*clientData.length)];
    }); 

    $.each(clientData, (key, value) => {
    //   console.log(key, value);
    //   console.log(value.image); 
    })
});


