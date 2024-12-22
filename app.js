const form = document.querySelector("form");
const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const message = document.getElementById("message");
const alert = document.getElementById("error-message");
const commentList = document.getElementById("comment-list");

function alertmessage() {
  alert.style.display = "inherit";
}

function sup_alertmessage() {
  alert.style.display = "none";
}

function addCom() {
  let newDiv1 = document.createElement("div");
  let newDiv2 = document.createElement("div");
  let newDiv3 = document.createElement("div");
  let newH3 = document.createElement("h3");
  let newP = document.createElement("p");

  /* let newH3Text = document.createTextNode(firstname.value +" "+lastname.value);
    let newPText = document.createTextNode(message.value); */

  newH3.textContent = firstname.value + " " + lastname.value;
  newP.textContent = message.value;

  newDiv1.appendChild(newDiv2);
  newDiv2.appendChild(newH3);
  newDiv2.appendChild(newDiv3);
  newDiv3.appendChild(newP);

  /*     newH3.appendChild(newH3Text);
    newP.appendChild(newPText); */

  commentList.appendChild(newDiv1);

  newDiv1.className = "flex space-x-4 text-sm text-gray-500";
  newDiv2.className = "flex-1 py-10 border-t border-gray-200";
  newH3.className = "font-medium text-gray-900";
  newDiv3.className = "prose prose-sm mt-4 max-w-none text-gray-500";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstname.value === "" || lastname.value === "" || message.value === "") {
    alertmessage();
  } else {
    addCom();
    sup_alertmessage();
    form.reset();
  }
});
