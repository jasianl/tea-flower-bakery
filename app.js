
function initialize() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImage = document.querySelectorAll('.carousel-slide img');
    
    //Buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    
    //Initialize
    let counter = 1;
    let debounce = false;
    const size = carouselImage[0].clientWidth;
    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    var scroller = setInterval(scrollRight, 5000);

    //Button Listeners
    nextBtn.addEventListener('click', ()=> {
        if(counter >= (carouselImage.length - 1)) return;
        if(!debounce) {
            debounce = true;
            clearInterval(scroller);
            scroller = setInterval(scrollRight, 5000);
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';   
        }  
    });
    
    prevBtn.addEventListener('click', ()=> {
        if(counter <= 0) return;
        if(!debounce) {
            debounce = true;
            clearInterval(scroller);
            scroller = setInterval(scrollRight, 5000);
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            counter--;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }       
    });

    carouselSlide.addEventListener('transitionend', ()=> {
        debounce = false;
        if(carouselImage[counter].id === 'lastClone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImage.length - 2;        
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        } else if(carouselImage[counter].id === 'firstClone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImage.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }       
    });

    //Interval
    function scrollRight(){
        if(!debounce){
            debounce = true;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
        }       
    }

    window.addEventListener('blur', () => {
        // console.log("outoffocus");
        debounce = true;
    });
    window.addEventListener('focus', () => {
        // console.log("infocus");
        debounce = false;
        clearInterval(scroller);
        scroller = setInterval(scrollRight, 5000);
    });

}
setTimeout(initialize, 1500);

