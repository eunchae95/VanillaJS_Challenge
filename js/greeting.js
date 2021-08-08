const NameForm = document.querySelector("#NameForm");
const NameInput = document.querySelector("#NameForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USER_NAME = "userName";

function NameSubmit(event){
    event.preventDefault();
    NameForm.classList.add(HIDDEN);
    const userName = NameInput.value;
    localStorage.setItem(USER_NAME,userName);
    paintGreeting(userName);
}

function paintGreeting(userName){
    greeting.innerText = `Hello ${userName} :)`;
    greeting.classList.remove(HIDDEN);
}

const savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null){
    NameForm.classList.remove(HIDDEN);
    NameForm.addEventListener("submit",NameSubmit);
}else{
    paintGreeting(savedUserName);
}