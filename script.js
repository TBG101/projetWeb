function playTrailer() {
  let newdiv =
    "<video controls autoplay> <source src='assets/mp4/THE BATMAN – Main Trailer.mp4'></video>";
  let div = document.getElementsByClassName("movieShowCaseContainer")[0];
  div.innerHTML = newdiv;

  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.width = "100%";
  div.style.height = "100%";

  div.classList.add("videoTrailer");
}
