
//colors object

const colors = {
  green: document.querySelector(".green"),
  blue: document.querySelector(".blue"),
  red: document.querySelector(".red"),
  blueSky: document.querySelector(".blueSky"),
  black: document.querySelector(".black"),
  cadetblue: document.querySelector(".cadetblue"),
  darkorchid: document.querySelector(".darkorchid"),
  grey: document.querySelector(".grey"),
  yellow: document.querySelector(".yellow"),
};

//dugsiiye
let dugsiiye = document.querySelector(".dugsiiye");


//values
const values = {
    fontSize: document.querySelector('[value= "font"]'),
    border: document.querySelector('[value= "border"]'),
    fontWeight: document.querySelector('[value= "fontWeight"]')
}

// font family
 
const fontFamily = document.querySelector("#font")

//colors change
colors.green.addEventListener("click", ()=>{
    dugsiiye.style.backgroundColor = "green";
});
colors.blue.addEventListener("click", ()=>{
    dugsiiye.style.backgroundColor = "blue";
});
colors.red.addEventListener("click", ()=>{
    dugsiiye.style.backgroundColor = "red";
});
colors.blueSky.addEventListener("click", ()=>{
    dugsiiye.style.backgroundColor = "skyblue";
});
colors.black.addEventListener("click", ()=>{
    dugsiiye.style.backgroundColor = "black";
});
colors.yellow.addEventListener("click", ()=>{
    dugsiiye.style.backgroundColor = "yellow";
});
colors.cadetblue.addEventListener("click", ()=>{
    dugsiiye.style.backgroundColor = "cadetblue";
});
colors.darkorchid.addEventListener("click", ()=>{
    dugsiiye.style.backgroundColor = "darkorchid";
})


//fonts and border change

values.fontSize.addEventListener("keyup", (event)=>{
    dugsiiye.style.fontSize = values.fontSize.value + "px";
});
values.border.addEventListener("keyup", (event)=>{
    dugsiiye.style.borderRadius = values.border.value + "px";
});
values.fontWeight.addEventListener("keyup", (event)=>{
    dugsiiye.style.fontWeight = values.fontWeight.value ;
});

// font family

fontFamily.addEventListener("change", (event)=>{
    const fontChange = event.target.value;
        dugsiiye.style.fontFamily = fontChange;
})

