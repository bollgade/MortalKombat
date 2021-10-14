const player1 = {
  name: 'Sub-Zero',
  hp: 89,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Katana', 'Kunai'],
  attack: function() {
    console.log(player1.name + ' fight');
  },
}

const player2 = {
  name: 'Scorpion',
  hp: 65,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Katana', 'Kunai'],
  attack: function() {
    console.log(player1.name + ' fight');
  },
}

const $arena = document.querySelector('.arenas');

function createPlayer(character, num) {
  const $player = document.createElement('div');
  $player.classList.add('player' + num);
  
  const $progress = document.createElement('div');
  $progress.classList.add('progressbar');
  $player.appendChild($progress);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = character.hp + '%';
  $progress.appendChild($life);

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = character.name;
  $progress.appendChild($name);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player.appendChild($character);

  const $img = document.createElement('img');
  $img.classList.add('img');
  $img.src = character.img;
  $character.appendChild($img);

  $arena.appendChild($player);
}

console.log(createPlayer(player1, 1));
console.log(createPlayer(player2, 2));
