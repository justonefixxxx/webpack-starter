/**
 * Created by denis on 7/2/16.
 */
document.body.onmouseover = (event)=> {
    let target = event.target;
    console.log(target);
    target.style.backgroundColor = 'red';
    target.classList.toggle('black');
};

