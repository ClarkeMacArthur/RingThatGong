// Namespace object
const gongApp = {};

// Setting up confetti specifics
gongApp.confetti = function () {
    const count = 1000;
    const defaults = {
        origin: {y: 0.6},
    };

    function fire(particleRatio, opts) {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
            })
        );
    }

    fire(0.25, {
        spread: 60,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 120,
    });
    fire(0.35, {
        spread: 140,
        decay: 0.91,
        scalar: 0.8,
    });
    fire(0.1, {
        spread: 180,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });
    fire(0.1, {
        spread: 140,
        startVelocity: 45,
    });
};

// Primary gong ringing function
gongApp.ringthatGong = function () {
    gongApp.button.addEventListener('click', function (e) {
        // define elements to be used
        const mallet = document.querySelector('.mallet');
        const cymbal = document.querySelector('.cymbal1');
        const audio = document.querySelector('audio');

        // Add the animated .swing class to the mallet
        // mallet swings
        mallet.classList.add('swing');

        // Timeout so that sound and confetti happen once the mallet strikes the gong
        setTimeout(function () {
            cymbal.classList.add('gongRing');
            audio.play();
            gongApp.confetti();
        }, 1500);

        // Timeout to remove the animated classes from the Mallet and Cymbal once complete.
        // **May redo this as it gets out of sync sometimes**
        setTimeout(function () {
            mallet.classList.remove('swing');
            cymbal.classList.remove('gongRing');
        }, 5500);
    });
};

// Init function
gongApp.init = function () {
    gongApp.button = document.querySelector('button');
    gongApp.ringthatGong();
};

// App initialize
gongApp.init();
