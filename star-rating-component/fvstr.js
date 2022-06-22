document.addEventListener('DOMContentLoaded', function () {

    let slctdStrIndx = -1;
    const stars = document.getElementsByClassName('star');


    const colorStars = function (strtIndx, endIndx) {
        for (let i = strtIndx; i <= endIndx; i++) {
            stars[i].classList.add('star-highlighted');
        }
    };
    const unColorStars = function (strtIndx, endIndx) {
        for (let i = strtIndx; i <= endIndx; i++) {
            stars[i].classList.remove('star-highlighted');
        }
    };

    const handleStarClick = function (event, index) {
        const prevSlctdIStrndex = slctdStrIndx;
        slctdStrIndx = index;
        if (!(prevSlctdIStrndex == slctdStrIndx)) {
            if (slctdStrIndx > prevSlctdIStrndex) {
                colorStars(prevSlctdIStrndex + 1, slctdStrIndx);
            }
            else {
                unColorStars(slctdStrIndx + 1, prevSlctdIStrndex);
            }
        }
    };
    console.log("loaded", stars);

    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', (event) => handleStarClick(event, i));
    }

});