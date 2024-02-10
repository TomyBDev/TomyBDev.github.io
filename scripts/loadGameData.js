fetch("../data/gridData.json")
  .then(response => response.json())
  .then(gameData => {
for (var k in gameData) {
    document.getElementById("game-block").innerHTML += '<div class="game-block-tile"><img class="game-block-img" src="' + gameData[k]['imageUrl'] + '" alt="' + gameData[k]['title'] + '"><h3 class="game-block-title">' + gameData[k]['title'] + '</h3><p class="game-block-info">' + gameData[k]['description'] + '</p></div>';
};
})
.catch(error => {
  console.error('Error fetching JSON:', error);
});