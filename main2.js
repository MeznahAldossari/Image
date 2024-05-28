let url = "https://rickandmortyapi.com/api/character";

async function UrlFunction() {
  let res = await fetch(url);
  let x = await res.json();
  let y = x.results;
  console.log(x);
  console.log(y.length);
  x.results.forEach((e) => {
    h3 = document.createElement("h3");
    image = document.createElement("img");
    div2 = document.createElement("div");
    div = document.querySelector(".div1");
    div2.setAttribute("class", ".div2");
    h3.innerText = e.name;
    image.src = e.image;
    div2.appendChild(h3);
    div2.appendChild(image);
    div.appendChild(div2);
  });
}

UrlFunction();
