/**
 * Created by denis on 7/2/16.
 */
document.body.onmousemove = (event)=> {
    let target = event.target;
    console.log(target);
    target.classList = [];
    target.classList.add('black');
};
document.body.onmouseout = (event)=> {
    let target = event.target;
    console.log(target);
    target.classList = [];
    target.classList.add('transparent');
};

