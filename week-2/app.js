var hidden = document.querySelector(".hidden");
var bottom = document.querySelector(".bottom");

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
