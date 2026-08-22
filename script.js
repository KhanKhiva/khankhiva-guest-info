let currentLanguage = "en";

function setLanguage(language){

currentLanguage = language;

document
.querySelectorAll(".language-switcher button")
.forEach(btn => btn.classList.remove("active"));

document
.getElementById("btn-" + language)
.classList.add("active");

document
.querySelectorAll("[data-en]")
.forEach(element => {

element.innerHTML =
element.getAttribute("data-" + language);

});

}
