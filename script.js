let error = document.querySelector(".error");
let longLink = document.querySelector(".long_link");
let short = document.querySelector(".result");

function shortLink() {
  //Vérifications input
  if (!longLink.value == "") {
    //Vider l'erreur
    error.innerHTML = "";
    //Connection API
    let url = "https://shortlink-api.mtarget.fr/shorten=${longLink.value}";

    fetch;
  } else {
    //error
    error.innerHTML = "Veuillez remplir le champ !";
  }
}
