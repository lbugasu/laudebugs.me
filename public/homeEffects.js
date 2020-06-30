main();
function main() {
  let image = document.getElementsByClassName("frontMatter")[0];
  let evts = document.getElementsByClassName("year");
  for (let i = 0; i < evts.length; i++) {
    evts[i].addEventListener("mouseover", function (evt) {
      let year = evt.target.textContent;
      let d = evt.target;
      console.log(d);
      switch (year) {
        case "2020":
          image.src =
            "https://images.ctfassets.net/rnmht6wsj5nl/4nVTBWWMM5VRs5qoxDcC7b/ced86f1603b9ea0c31538da45b2ef8a1/guggenheim.jpg";
          break;
        case "2019":
          image.src =
            "https://images.ctfassets.net/rnmht6wsj5nl/7rYyJGQwsJDtEHTzXIv11V/b4a8c639478a0e5927122039223c0097/summer2019.jpg";

          break;
        case "2017":
          image.src =
            "https://images.ctfassets.net/rnmht6wsj5nl/5IRP9NTg8vhHVRHyLjYvXS/87a6926c0af3b1cb66643b5d00551053/typewriter.jpg";
          break;
        case "2018":
          image.src =
            "https://images.ctfassets.net/rnmht6wsj5nl/5Y1KWGC7atY66aLn5mpAnm/c0d4550f7b02ffc1dda49ca6be0a1936/summer2018.jpg";
          break;
        case "2016":
          image.src =
            "https://images.ctfassets.net/rnmht6wsj5nl/4OPA1TVhFdfhTr4owaYrXZ/83382d9c61e49e38981b13f4e403f093/freshmanyear.jpg";
          break;
        default:
      }
    });
  }
}
