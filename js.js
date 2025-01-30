
function bounce(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('bounce-effect');
        element.classList.remove('bounce-effect-revert');
    }
}

function bounceRevert(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('bounce-effect');
        element.classList.add('bounce-effect-revert');
    }
}

// handles the swipe in left fade function of elements ↓

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-left');
            entry.target.classList.remove('fade-out-left');
        } else {
            entry.target.classList.add('fade-out-left');
            entry.target.classList.remove('fade-in-left');
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '0px 800px',
    threshold: [0.1, 0.2]
});

const contentBlocks = document.querySelectorAll('.appear-on-scroll-left');

contentBlocks.forEach(block => {
    observer.observe(block);
})

// handles he swipe in right fade function of elements ↓

function handleIntersectRight(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-right');
            entry.target.classList.remove('fade-out-right');    
        } else {
            entry.target.classList.add('fade-out-right');
            entry.target.classList.remove('fade-in-right');
        }
    });
}

const observerRight = new IntersectionObserver(handleIntersectRight, {
    root: null,
    rootMargin: '0px 800px',
    threshold: [0.2, 0.2]
});

const contentBlocksRight = document.querySelectorAll('.appear-on-scroll-right');

contentBlocksRight.forEach(block => {
    observerRight.observe(block);
})


// handles the spin and scale function of elements ↓

function handleIntersectSpin(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('entry');
            entry.target.classList.remove('exit');
        } else {
            entry.target.classList.add('exit');
            entry.target.classList.remove('entry');
        }
    });
}

const spinObserver = new IntersectionObserver(handleIntersectSpin, {
    root: null,
    rootMargin: '10px 0px',
    threshold: [0.5, 0.2]
});

const contentBlocksSpin = document.querySelectorAll('.spin-on-scroll');

contentBlocksSpin.forEach(block => {
    spinObserver.observe(block);
});

// handles the slide up function of elements ↓

function handleIntersectSlideUp(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('entry');
            entry.target.classList.remove('exit');
        } else {
            entry.target.classList.add('exit');
            entry.target.classList.remove('entry');
        }
    });
}

const slideUpObserver = new IntersectionObserver(handleIntersectSlideUp, {
    root: null,
    rootMargin: '0px 0px',
    threshold: [0.5, 0.2]
});

const contentBlocksSlideUp = document.querySelectorAll('.slide-up-on-scroll');

contentBlocksSlideUp.forEach(block => {
    slideUpObserver.observe(block);
});

// handles the fold down function of elements ↓

function handleIntersectFoldDown(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('entry');
        } else {
            entry.target.classList.remove('entry');
        }
    });
}

const foldDownObserver = new IntersectionObserver(handleIntersectFoldDown, {
    root: null,
    rootMargin: '0px',
    threshold: [0.5, 0.2]
});

const contentBlocksFoldDown = document.querySelectorAll('.fold-down');

contentBlocksFoldDown.forEach(block => {
    foldDownObserver.observe(block);
});

// handles the fade in background function of elements ↓

function handleIntersectFadeInBackground(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('entry');
            entry.target.classList.remove('exit');
        } else {
            entry.target.classList.add('exit');
            entry.target.classList.remove('entry');
        }
    });
}

const fadeInBackground = new IntersectionObserver(handleIntersectFadeInBackground, {
    root: null,
    rootMargin: '0px',
    threshold: [0.5, 0.2]
});

const contentBlocksFadeInBackground = document.querySelectorAll('.float');

contentBlocksFadeInBackground.forEach(block => {
    fadeInBackground.observe(block);
});