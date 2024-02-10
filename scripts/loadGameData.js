fetch("../data/gridData.json")
  .then(response => response.json())
  .then(gameData => {
    var gameBlock = document.getElementById("game-block");

    for (var k in gameData) {
      var tileHtml = '<div class="game-block-tile"><video webkit-playsinline playsinline class="game-block-video"><source src="' + gameData[k]['videoUrl'] + '" type="video/webm"></video><img class="game-block-img" src="' + gameData[k]['imageUrl'] + '" alt="' + gameData[k]['title'] + '"><h3 class="game-block-title">' + gameData[k]['title'] + '</h3><p class="game-block-info">' + gameData[k]['description'] + '</p></div>';
      
      gameBlock.innerHTML += tileHtml;
    }

    let gameBlockTiles = gameBlock.querySelectorAll('.game-block-tile');
    gameBlockTiles.forEach(function(gameBlockTile) {
      let video = gameBlockTile.querySelector('.game-block-video');

      video.loop = true; // Set video to loop
      video.muted = true;

      gameBlockTile.addEventListener('mouseenter', function() {
        video.play(); // Start playing the video
        video.style.opacity = 1;
        video.currentTime = 0;
      });
      
      gameBlockTile.addEventListener('mouseleave', function() {
        video.pause(); // Pause the video
        video.style.opacity = 0; // Hide the video
      });
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });