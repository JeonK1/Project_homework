function navbar_function(){
//사용자 이름
    var username = document.getElementById("username");
    username.innerHTML = "Coople";

    // 유저 아이콘 눌렀을 때
    $("#ID_Menu").hide();
    $("#user_icon_event").hide();
    var x = true;
    $("#user_icon").click(function() {
        if (x) {
            $("#ID_Menu").show();
            $("#user_icon_event").show();
            x = false
        } else {
            $("#ID_Menu").hide();
            $("#user_icon_event").hide();
            x = true
        }
    });

    $('#menu_2').mouseenter(function(){
        $('#menu_2').css({background:"#C5DCFA"});
    });

    $('#menu_2').mouseleave(function(){
        $('#menu_2').css({background:"#FFFFFF"});
    });

    $('#menu_3').mouseenter(function(){
        $('#menu_3').css({background:"#C5DCFA"});
    });

    $('#menu_3').mouseleave(function(){
        $('#menu_3').css({background:"#FFFFFF"});
    });


}