/**
 * Created by denis on 7/2/16.
 */
const nav = document.querySelector('nav');

nav.onmouseover = (event)=> {
    let target = event.target;
    if(target.nodeName=='LI'){
    target.classList.remove('transparent');
    target.classList.add('black');}
};

nav.onmouseout = (event)=> {
    let target = event.target;
    if(target.nodeName=='LI'){
    target.classList.remove('black');
    target.classList.add('transparent');}
};

