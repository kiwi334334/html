
window.onmousemove = e => {
    document.getElementById('leftside').style.width = `${e.clientX / window.innerWidth * 100}%`;
}
document.ontouchmove = e => handleMove(e.touches[0]);