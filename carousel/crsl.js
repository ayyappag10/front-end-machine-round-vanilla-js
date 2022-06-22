document.addEventListener("DOMContentLoaded", () => {

    let crntIndx = 0;
    const photos = document.getElementsByClassName("carousel-photo");
    const length = photos.length;
    let prevIndex = (crntIndx - 1 + length) % length;
    let nextIndex = (crntIndx + 1) % length;

    function addClasses() {
        photos[crntIndx].classList.add("carousel-photo-current");
        photos[nextIndex].classList.add("carousel-photo-next");
        photos[prevIndex].classList.add("carousel-photo-prev");
    }

    function removeClasses(tmpCrnt, tmpNxt, tmpPrev) {
        photos[tmpCrnt].classList.remove("carousel-photo-current");
        photos[tmpNxt].classList.remove("carousel-photo-next");
        photos[tmpPrev].classList.remove("carousel-photo-prev");

    }

    function updatePrevCrntNextPhotoStyles(tmpCrnt, tmpNxt, tmpPrev) {
        removeClasses(tmpCrnt, tmpNxt, tmpPrev);
        addClasses(tmpCrnt, tmpNxt, tmpPrev);
    }

    function handleNext() {

        const tmpCrnt = crntIndx;
        crntIndx = nextIndex;
        const tmpNxt = nextIndex;
        nextIndex = (nextIndex + 1) % length;
        const tmpPrev = prevIndex;
        prevIndex = tmpCrnt;
        updatePrevCrntNextPhotoStyles(tmpCrnt, tmpNxt, tmpPrev);

    }

    function handlePrev() {
        const tmpCrnt = crntIndx;
        crntIndx = prevIndex;
        const tmpNxt = nextIndex;
        nextIndex = tmpCrnt;
        const tmpPrev = prevIndex;
        prevIndex = (prevIndex - 1 + length) % length;;
        updatePrevCrntNextPhotoStyles(tmpCrnt, tmpNxt, tmpPrev);

    }
    const prevBtn = document.getElementById("carousel-button-prev");
    const nexBtn = document.getElementById("carousel-button-next");
    prevBtn.addEventListener('click', handlePrev);
    nexBtn.addEventListener('click', handleNext);
    addClasses();
});