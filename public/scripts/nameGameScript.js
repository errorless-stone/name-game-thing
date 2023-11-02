$(function() {
    console.log( "ready!" );

    $("#pic").on("click", (e)=>{
        console.log("clicky");
        $("#pic").attr("src", clientData[Math.floor(Math.random()*clientData.length)].image)
    }); 


    $.each(clientData, (key, value) => {
    //   console.log(key, value);
    //   console.log(value.image); 
    })
});


