function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
}

function listenForCartChanges(key, time, func) {
    let previusVal = localStorage.getItem(key);
    setInterval(() => {
        let currentVal = localStorage.getItem(key);
        if (currentVal !== previusVal) {
            func();
            previusVal = currentVal;
        }
    }, time);
}
