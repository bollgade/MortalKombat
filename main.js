const player1 = {
  name: 'Sub-Zero',
  hp: 89,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
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