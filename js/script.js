let banda1audio=document.getElementById("audio1");
let banda2audio=document.getElementById("audio2");
let banda3audio=document.getElementById("audio3");
let banda4audio=document.getElementById("audio4");
let banda5audio=document.getElementById("audio5");
let banda6audio=document.getElementById("audio6");



function escalar(){
    $(this).css({
    "scale":"1.5",
    }
    )
}

function normal(){
    $(".groupIcon").css({
    "scale":"1",
    }
    )
}

$(".groupIcon").mouseover(escalar)
$(".groupIcon").mouseleave(normal)


$("#banda1").mouseover(function(){
    $("#nombres").html("TALLY HALL");
    $("#nombres").css({
        "font-size":"2vw",
        "margin-left":"19%",
        "margin-top":"26%",
    }
    )

    banda1audio.play();
    
  });
  

$("#banda2").mouseover(function(){
    $("#nombres").html("AUTOHEART");
    $("#nombres").css({
        "font-size":"1.5vw",
        "margin-left":"5%",
        "margin-top":"39%",
    }
    )

    banda2audio.play();

  });

  $("#banda3").mouseover(function(){
    $("#nombres").html("ROJUU");
    $("#nombres").css({
        "font-size":"2vw",
        "margin-left":"19%",
        "margin-top":"38%",
    }
    )

    banda3audio.play();

  });

  $("#banda4").mouseover(function(){
    $("#nombres").html("HALF ALIVE");
    $("#nombres").css({
        "font-size":"2vw",
        "margin-left":"22%",
        "margin-top":"26%",
    }
    )

    banda4audio.play();

  });

  $("#banda5").mouseover(function(){
    $("#nombres").html("BOARDS OF CANADA");
    $("#nombres").css({
        "font-size":"1.5vw",
        "margin-left":"19%",
        "margin-top":"26%",
    }
    )

    banda5audio.play();

  });

  $("#banda6").mouseover(function(){
    $("#nombres").html("YUNG LEAN");
    $("#nombres").css({
        "font-size":"2vw",
        "margin-left":"21.5%",
        "margin-top":"26%",
    }
    )

    banda6audio.play();

  });

$(".groupIcon").mouseleave(function(){
    $("#nombres").html(" ");
    banda1audio.pause();
    banda1audio.currentTime=0;

    banda2audio.pause();
    banda2audio.currentTime=0;

    banda3audio.pause();
    banda3audio.currentTime=0;

    banda4audio.pause();
    banda4audio.currentTime=0;

    banda5audio.pause();
    banda5audio.currentTime=0;

    banda6audio.pause();
    banda6audio.currentTime=0;
});


