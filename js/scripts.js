// $(selector).action();

$(document).ready(function() {

    $("div.alert").hide();


    $(".register-form").submit(function(event) {
        
        // Getting the User Input
        let studentName = $("#fullName").val();  // Get from Input
        let chosenTrack = $('input[name="track"]:checked').val();  // Get from radio Button
        let reason = $("#outcome").val(); // Get from Select
        let selectedLanguages = new Array();
        $('input[name="languages"]:checked').each(function() {
            selectedLanguages.push(this.value);
        });

        // Displaying the Values
        $("#student").text(studentName);
        $("#chosenTrack").text(chosenTrack);
        $("#reason").text(reason);
        $("#myLanguages").text(selectedLanguages.join(", "));

        $("div.alert").show();

        event.preventDefault();
    })

})


