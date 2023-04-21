const stateLoading = "state-loading";
const stateLoadTrans = "state-load-transition"
const stateLoaded = "state-loaded";
const transitionClassName = 'fade-out'
addEventListener("load", (event) => {
    console.log("LOADED", document.getElementsByTagName("body")[0], document.getElementsByTagName("body")[0].classList);
    document.getElementsByTagName("body")[0].classList.replace(stateLoading, stateLoadTrans);
    
    var ld = document.querySelector(".loader-container");
    ld.classList.add(transitionClassName);
    ld.addEventListener("transitionend", stateLoadTransition, false);
});
document.addEventListener("DOMContentLoaded", (event) => {
    // console.log("DOMContentLoaded", event);
});
function stateLoadTransition (event) {
    // console.log("stateLoadTransition", event);
    document.getElementsByTagName("body")[0].classList.replace(stateLoadTrans, stateLoaded);
}