function  cupClick(evt) {
    let level = Number(this.getAttribute('level'));
    level += 24;
    if(level <= 96){
        this.style.backgroundPosition = '0 ' + level + '%';
    }
    console.log(level);
    this.setAttribute('level', level);
}

let cups = document.querySelectorAll('.cup');
cups.forEach (cup => {
    cup.addEventListener('click', cupClick)
})