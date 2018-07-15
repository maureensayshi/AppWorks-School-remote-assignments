var hidden = document.querySelector(".hidden");
var bottom = document.querySelector(".bottom");
var Menu = document.querySelector(".Menu");
var image = document.getElementById('image');

const change = document.getElementById('change');
change.addEventListener ( 'click', ()=> {
  change.textContent = "Have a Good Time!";
});


bottom.addEventListener('click', ()=> {
  if(hidden.style.display == "" || hidden.style.display == "none"){
    hidden.style.display = "block";
  } else {
    hidden.style.display = "none";
  }
});

image.addEventListener('click', ()=> {
  if(Menu.style.display == "" || Menu.style.display == "none"){
    Menu.style.display = "block";
  } else {
    Menu.style.display = "none";
  }
});


/* const callfor = document.getElementById('callfor');
const hidden = document.getElementById('hidden');

callfor.addEventListener('click', () => {
    hidden();
});

function hidden(){

if(hidden.style.display == "none"){

hidden.style.display = "block";
} else {

hidden.style.display == "none";
};
}


  // change.textContent = "Noooop"; */
