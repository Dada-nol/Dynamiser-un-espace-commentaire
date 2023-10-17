const form = document.querySelector("form");
const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const message = document.getElementById("message-max");
const alert = document.getElementById("error-message");
const commentList = document.getElementById("commentList");

function alertmessage() {
    alert.style.display = "initial"
};

console.log(alertmessage);


function deleteForm () {
    firstname = "";
    lastname = "";
    message = "";
};


function newComList() {
    let newDiv1 = document.createElement('div');
    let newDiv2 = document.createElement('div');
    let newDiv3 = document.createElement('div');
    let newH3 = document.createElement('h3');
    let newP = document.createElement('p');

    newDiv1.classList.add("flex space-x-4 text-sm text-gray-500");
    newDiv2.classList.add("flex-1 py-10");
    newDiv3.classList.add("prose prose-sm mt-4 max-w-none text-gray-500");
    newH3.classList.add("font-medium text-gray-900");

    newH3Text = document.createTextNode(firstname.value +""+lastname.value);
    newPText = document.createTextNode(message.value);

    newDiv1.appendChild(newDiv2);
    newDiv1.appendChild(newDiv3);
    newDiv2.appendChild(newH3);
    newDiv3.appendChild(newP);
    newH3.appendChild(newH3Text);
    newP.appendChild(newPText);

    commentList.appendChild(newDiv1);
};



form.addEventListener("submit", function(event) {

if (firstname ==="" || lastname ==="" || message ==="") {
    alertmessage();
} else {
    deleteForm();
    newComList();
};
    event.preventDefault();

});





