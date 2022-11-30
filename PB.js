let btn = document.getElementById("btn");
let txt = document.getElementById("name");
let phone = document.getElementById("phone");
let ulname = document.getElementById("ulname");
let ulphone = document.getElementById("ulphone");

function book(name, phone) {}

btn.addEventListener("click", function () {
  let list = document.createElement("li");
  list.innerHTML = txt.value;
  ulname.appendChild(list);
  let listphone = document.createElement("li");
  listphone.innerHTML = phone.value;
  ulphone.appendChild(listphone);
});
