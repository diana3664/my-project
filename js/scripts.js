// $(selector).action()

$(document).ready(function() {

    $(".wrong-password").hide();

    // Change colors after click of a button
    $("#colorButton").click(function() {
        $("#warningMessage").removeClass("text-warning");
        $("#warningMessage").addClass("text-primary");
    });

    // Hide element after Hover
    $("#errorMessage").hover(function() {
        $(this).hide();
    });


    // Password length error message
    $("#passwordInput").on('keyup', function(){
        if($(this).val().length < 6) {
            $(".wrong-password").show();
        }
        else if(($(this).val().length > 6)) {
            $(".wrong-password").hide();
        }
    });

    $("#changeToAlert").on('click', function(){
        $("p.footer").addClass("alert alert-success");
    });
})


