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





