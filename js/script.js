var baner = document.getElementsByClassName('baner')[0];

var scrollUp = document.createElement('button');
scrollUp.style.cssText = 'height: 70px; width: 70px; background-color: #A27035; border-radius: 50%; position: fixed; left:85vw; top: 77vh; cursor: pointer; box-shadow: 2px 3px 10px rgba(0,0,0,0.3)';
scrollUp.innerHTML = '^';
scrollUp.classList = 'nevidljiv';

baner.appendChild(scrollUp);


window.addEventListener('scroll', skrol, false);

function skrol() {
    
    if(window.pageYOffset > 250) {
        scrollUp.classList.add('vidljiv');
        scrollUp.classList.remove('nevidljiv');
    } else {
        scrollUp.classList.add('nevidljiv');
        scrollUp.classList.remove('vidljiv');
    }
}

scrollUp.addEventListener('click', gore, false);

function gore() {
    if(window.pageYOffset > 200) {
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        });
    } 
}

window.addEventListener('resize', responsive, false);

function responsive() {
    if(window.innerWidth < 600) {
        scrollUp.style.cssText = 'height: 50px; width: 50px; background-color: #A27035; border-radius: 50%; position: fixed; left:80vw; top: 77vh; cursor: pointer; box-shadow: 2px 3px 10px rgba(0,0,0,0.3)'
    } else {
        scrollUp.style.cssText = 'height: 70px; width: 70px; background-color: #A27035; border-radius: 50%; position: fixed; left:85vw; top: 77vh; cursor: pointer; box-shadow: 2px 3px 10px rgba(0,0,0,0.3)';
    }
}