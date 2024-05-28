let url = "https://coffee.alexflipnote.dev/random.json";
let x = setInterval(img, 100);

function img() {
  fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.file);
      console.log(data.file);

      let element = document.querySelector("img");
      let body = document.querySelector("body");
      element.src = data.file;
      element.style.height = "20vh";
      element.style.width = "20vw";
      body.append(element);
    });
}

setInterval(() => {
  clearInterval(img());
}, 1000);
