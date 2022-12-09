console.log("heyys");
let a = document.getElementById("c");

a.addEventListener("click", () => {
  setTimeout(() => {
    console.log("heyyy");
    a.src = "img/ad.PNG";
  }, 1000);
});

let s = 10;
let z = 1000;
