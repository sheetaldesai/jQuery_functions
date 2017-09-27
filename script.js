$(document).ready(function(){
    $("#addRed > input").click(function () {
        if ($("#addRed > h3").css("background-color") !== "rgb(255, 0, 0)") {
            $("#addRed > h3").css("background-color", "rgb(255, 0, 0)");
            $(this).val("Remove Red");
            $("#addRed > h3").text("Click Button to remove color Red from this paragraph");
        }
        else {
            $("#addRed > h3").css("background-color", "grey");
            $(this).val("Add Red");
            $("#addRed > h3").text("Click Button to add color Red to this paragraph")
        }
    });

    $("#showHide > input").click(function () {
        console.log($(this));
        if ($(this).val() === "Show Image") {
            $("#showHide > img").show("slow");
            // $("#showHide > img").slideDown("slow");
            $(this).val("Hide Image");
        }
        else {
            $("#showHide > img").hide();
            $(this).val("Show Image");
        }
    });

    $("#box1").click(function () {
        $(this).hide();
        $(this).slideDown("slow");
    });

    $("#box2").click(function () {
        $(this).slideUp("slow");
        $(this).show("slow");
    });

    $("#box3").click(function () {
        $(this).hide("slow");
        $(this).fadeIn("slow");
        
    });

    $("#box4").click(function () {
        $(this).fadeOut("slow");
        $(this).show("slow");
    });

    $("#manupulate > input").click(function () {
        console.log($(this));
        if ($(this).val() === "Manupulate") {
            $("#manupulate > h3").prepend("Good Morning!! ");
            $("#manupulate > h3").append(" Enjoy!! ");
            var newdiv1 = $( "<div id='object1'>Object1</div>" ),
            newdiv2 = document.createElement( "div" ),
            existingdiv1 = document.getElementById( "box1" );
           
            $( "#manupulate > h3").first().before( newdiv1, newdiv2, existingdiv1);
          
        }
        else {
            $("#showHide > img").hide();
            $(this).val("Show Image");
        }
    });

});