const $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button')

const player1 = {
  player: 1,
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Katana', 'Kunai'],
  attack: function() {
    console.log(player1.name + ' fight');
  },
}

const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Katana', 'Kunai'],
  attack: function() {
    console.log(player1.name + ' fight');
  },
}

function changeHp(play, opponent) {
  const $playerLife = document.querySelector('.player' + play.player + ' .life');
  const hp = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  play.hp -= hp;
    
  if (play.hp <= 0 && opponent.hp <= 0) {
    alert('WTF?');
    play.hp = 100;
    opponent.hp = 100;
  } else if(play.hp <= 0) {
    play.hp = 0;
    $playerLife.style.width = play.hp + '%';
    // $arena.appendChild(playerLose(play.name));
    $arena.appendChild(playerWin(opponent.name));
  }else {
    $playerLife.style.width = play.hp + '%';
  }
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag
}

function createPlayer(character) {
  const $player = createElement('div', 'player' + character.player);
  const $progress = createElement('div', 'progressbar');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $character = createElement('div', 'character');
  const $img = createElement('img');

  $player.appendChild($progress);
  $progress.appendChild($life);
  $progress.appendChild($name);
  $player.appendChild($character);
  $character.appendChild($img);

  $life.style.width = character.hp + '%';
  $name.innerText = character.name;
  $img.src = character.img;

  return $player;
}

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' WIN';
  $randomButton.disabled = true
  return $winTitle
}

function playerLose(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' lose';
  $randomButton.disabled = true
  return $loseTitle
}

$randomButton.addEventListener('click', function() {
  changeHp(player1, player2);
  changeHp(player2, player1);
})

$arena.appendChild(createPlayer(player1, 1));
$arena.appendChild(createPlayer(player2, 2));

