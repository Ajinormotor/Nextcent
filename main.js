const navlink  = document.getElementById("navlink");


function showMenu() {
    navlink.style.left = "0px"
    console.log("Yes it has been clicked");
}

function hideMenu() {
    navlink.style.left="-500px"
    console.log("Yes it has been clicked")
}


let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
    console.log("Window Event Listener is active");
})