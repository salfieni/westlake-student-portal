

// Login Form Validation

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let studentID = document.getElementById("studentID").value;
        let password = document.getElementById("password").value;

        let registeredStudent = JSON.parse(
    localStorage.getItem("registeredStudent")
);

if (
    (studentID === "2026123456" && password === "student123") ||
    (registeredStudent &&
     studentID === registeredStudent.id &&
     password === registeredStudent.password)
) {

            alert("Login Successful!");
            window.location.href = "dashboard.html";

        } else {

            document.getElementById("errorMessage").textContent =
                "Invalid Student ID or Password. Please try again.";

        }

    });

}

// Logout Function

function logout() {
    alert("You have successfully logged out!");
    window.location.href = "index.html";
}

// Registration Form

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let studentName = document.getElementById("studentName").value;
        let studentID = document.getElementById("studentID").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("registerPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            document.getElementById("registerMessage").textContent =
                "Passwords do not match!";

            return;
        }

        // Save registration details
        let student = {
            name: studentName,
            id: studentID,
            email: email,
            password: password
        };

        localStorage.setItem("registeredStudent", JSON.stringify(student));

        document.getElementById("registerMessage").textContent =
            "Registration successful! You can now log in.";

        document.getElementById("registerMessage").className =
            "text-success text-center mt-3";

    });

}


// Dark Mode / Light Mode


function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

