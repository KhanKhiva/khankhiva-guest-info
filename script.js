function setLanguage(language){
document.querySelectorAll('.language-switcher button').forEach(btn=>btn.classList.remove('active'));
document.getElementById('btn-'+language).classList.add('active');

document.querySelectorAll('[data-en]').forEach(el=>{
el.innerHTML = el.getAttribute('data-'+language);
});
}