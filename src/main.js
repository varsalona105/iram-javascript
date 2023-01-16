window.addEventListener('load', () => {
    const countButton = document.getElementById('count');
    const countText = document.getElementById('count-number');
    let current = 0;
    countButton.addEventListener('click', () => {
        current++;
        countText.textContent = current;
    });
});
