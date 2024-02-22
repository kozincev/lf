


    let offset = 832; //Смещения от левого края
    const spiderMan = document.querySelector('.slider-line');
    
    document.querySelector('.slider-next').addEventListener('click', function(){
        offset = offset + 440;
        if (offset > 2004) {
            offset = 832;
        }
        spiderMan.style.left = -offset + 'px';
    })
    
    document.querySelector('.slider-prev').addEventListener('click', function(){
        offset = offset - 440;
        if (offset < -440) {
            offset = 832;
        }
        spiderMan.style.left = -offset + 'px';
    })
    