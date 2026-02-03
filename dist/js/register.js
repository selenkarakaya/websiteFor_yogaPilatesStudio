// Handle register button click
document.getElementById("create").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form from submitting and refreshing the page

  // Get input values
  let firstName = document.querySelector("#firstName").value.trim();
  let lastName = document.querySelector("#lastName").value.trim();
  let email = document.querySelector("#email").value.trim();
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;
  let msg = document.querySelector("#msg");

  // Helper function to show messages
  function showMsg(text) {
    msg.innerHTML = text;
    msg.classList.add("msg");

    // Remove message after 2 seconds
    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("msg");
    }, 2000);
  }

  // Check if any input is empty
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    showMsg("Please fill in all fields");
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    showMsg("Passwords do not match");
    return;
  }

  // Get users from localStorage or create an empty array
  let users = JSON.parse(localStorage.getItem("MyUsersList")) || [];

  // Create a new user object
  let user = {
    firstName,
    lastName,
    email,
    password,
  };

  // Save user to array and localStorage
  users.push(user);
  localStorage.setItem("MyUsersList", JSON.stringify(users));

  // Show success message
  showMsg("You have been registered successfully");

  // Clear input fields after registration
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#confirmPassword").value = "";

  // Redirect to login page after 2 seconds
  setTimeout(() => {
    window.location.href = "./signin.html"; // Change path if needed
  }, 2000);
});
