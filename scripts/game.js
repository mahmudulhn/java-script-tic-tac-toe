function starNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set player name for both players!');
        return;
    }
    gameAreaElement.style.display = 'block';
}