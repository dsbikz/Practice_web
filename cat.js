removea = function(){
    let a = document.getElementsByTagName('img');
    let b = document.getElementById('panner');
    for(let i=0;i<a.length;) a[0].remove();
}
function add(src){
    let tmp = document.createElement('img');
    tmp.setAttribute('src',src);
    return tmp
}
window.onload = function(){
    let dog = document.getElementById('dog');
    let cat = document.getElementById('cat');
    let poke = document.getElementById('pokemon');
    dog.addEventListener('click',function(){
        removea();
        let d = document.getElementById('panner');
        d.appendChild(add('dog1.jpg'));
        setTimeout(function(){d.appendChild(add('dog2.jpg')); setTimeout(
                    function(){d.appendChild(add('dog3.jpg'))},2000)},2000);

    })
    cat.addEventListener('click',function(){
        removea();
        let d = document.getElementById('panner');
        d.appendChild(add('cat1.jpg'));
        setTimeout(function(){d.appendChild(add('cat2.jpg'));;setTimeout(
                    function(){d.appendChild(add('cat3.jpg'));},2000)},2000);
    })
    poke.addEventListener('click',function(){
        removea();
        let d = document.getElementById('panner');
        d.appendChild(add('fire.jpg'));
        setTimeout(function(){d.appendChild(add('plant.jpg'));setTimeout(
                    function(){d.appendChild(add('water.jpg'));},2000)},2000);
                
    }
    )
    
}