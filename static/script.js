function liveCheckPassword() {
    var password = $("#password").val();
    $.ajax({
        url: "/check",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ password: password }),
        success: function(response) {
            $("#result")
                .html(response.message)
                .css("color", response.strength === 5 ? "green" : response.strength >= 3 ? "orange" : "red");

            var feedbackHtml =
                "<ul>" + response.feedback.map(f => "<li>" + f + "</li>").join("") + "</ul>";
            $("#feedback").html(feedbackHtml);
        }
    });
}
