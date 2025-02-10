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

function togglePasswordVisibility() {
    const passwordField = $("#password");
    const type = passwordField.attr("type") === "password" ? "text" : "password";
    passwordField.attr("type", type);
}

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()123456789";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    $("#password").val(password);
    liveCheckPassword();
}

function generatePasswordAndToggleVisibility() {
    generatePassword();
    const passwordField = $("#password");
    passwordField.attr("type", "text");
}

$("#copyPassword").on("click", function () {
    const password = $("#password").val();
    if (password) {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    } else {
        alert("No password to copy!");
    }
});

