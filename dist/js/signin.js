// Handle login button click
document.getElementById("login").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const loginEmail = document.querySelector("#email").value.trim();
  const loginPass = document.querySelector("#password").value;
  const msg = document.querySelector("#msg");

  // Helper function to show messages
  function showMsg(text) {
    msg.innerHTML = text;
    msg.classList.add("msg");

    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("msg");
    }, 2000);
  }

  // Check if inputs are empty
  if (!loginEmail || !loginPass) {
    showMsg("Please fill in all fields");
    return;
  }

  // Get users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem("MyUsersList")) || [];

  // Find matching user
  const matchedUser = storedUsers.find(
    (user) => user.email === loginEmail && user.password === loginPass
  );

  if (matchedUser) {
    showMsg("Login successful");

    // Redirect after successful login
    setTimeout(() => {
      window.location.href = "./index.html"; // change path if needed
    }, 1000);
  } else {
    showMsg("Wrong email or password");
  }
});
