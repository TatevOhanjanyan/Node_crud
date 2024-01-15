// var click = document.getElementById("send");
// click.addEventListener("click", handleEvent);
// function handleEvent(){
//     let name = document.getElementById("name")
//     let age = document.getElementById("age")

//     console.log(name.ariaValue, age.value);
// }

function sendData() {
  let nameInput = document.getElementById("name").value
  let ageInput = document.getElementById("age").value

  fetch("/addName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameInput, age: ageInput }),
  });

}
