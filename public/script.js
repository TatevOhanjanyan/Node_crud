
let usname = document.getElementById("usname").value
let usage = document.getElementById("usage").value
let usemail = document.getElementById("usemail").value

function sendData() {
  var response = fetch("https://localhost:3000/addName", {
    method: "POST",
    headers: {
      "Content-Type": "application/Json"
    },
    body: JSON.stringify({ name: usname.value, password: uspassword.value, email: usemail.value })
  })
}
