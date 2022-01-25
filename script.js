currScore = 0;
booster = 1;

function cookieClick() {
  currScore += booster;
  document.getElementById('score').innerHTML = currScore;
}

function boosterClick() {
  if (currScore >= 10) {
    currScore -= 10;
    booster += 1;
    document.getElementById('score').innerHTML = currScore;
  }
}

function boosterClickTen() {
  if (currScore >= 100) {
    currScore -= 100;
    booster += 10;
    document.getElementById('score').innerHTML = currScore;
  }
}

function boosterClickMax() {
  if (currScore < 100) {
    while (currScore >= 10) {
      boosterClick();
    }
  }
  else {
    while (currScore >= 100) {
      boosterClickTen();
    }
  }
}

function resetScore() {
  if (currScore > 0) {
    currScore = 0;
    booster = 1;
    document.getElementById('score').innerHTML = currScore;
  }
}
