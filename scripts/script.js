const panels = document.querySelectorAll('.panel');
// console.log(panels);

let currentOpenPanel = null;
const toggleOpen = function () {
    // console.log(this);
    if (currentOpenPanel && currentOpenPanel !== this) {
        currentOpenPanel.classList.remove('open');
        currentOpenPanel.classList.remove('active');
    }
    this.classList.toggle('open');
    this.classList.toggle('active');
    if (this.classList.contains('open')) {
        currentOpenPanel = this;
    } else {
        currentOpenPanel = null;
    }
}




panels.forEach( panel => panel.addEventListener("click", toggleOpen));
