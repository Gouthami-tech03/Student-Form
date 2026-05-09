document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.getElementById("gender").value;
    let course = document.getElementById("course").value;

    let message = document.getElementById("message");

    if(name === "" || email === "" || phone === "" || gender === "" || course === "") {
        message.style.color = "red";
        message.innerHTML = "Please fill all fields!";
        return;
    }

    if(phone.length !== 10 || isNaN(phone)) {
        message.style.color = "red";
        message.innerHTML = "Enter valid 10-digit phone number!";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Registration Successful! 🎉";

    document.getElementById("registrationForm").reset();
});