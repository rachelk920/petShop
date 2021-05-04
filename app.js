var shop = [
    {
      title: 'Bubbles',
      image: './imgs/1.png', 
      price: '7,500-15,000',
      description: 'Buddy',
    },
    {
      title: 'Buddy',
      image: './imgs/2.png', 
      price: '7,500-15,000',
      description: 'Buddy',
    },
    {
      title: 'Rosie',
      image: './imgs/3.png', 
      price: '7,500-15,000',
      description: 'Buddy',
    },
    {
      title: 'Princess',
      image: './imgs/4.png', 
      price: '7,500-15,000',
      description: 'Buddy',
    },
    {
      title: 'Whiskers',
      image: './imgs/5.png', 
      price: '7,500-15,000',
      description: 'Buddy',
    },
    {
      title: 'Jack',
      image: './imgs/6.png', 
      price: '7,500-15,000',
      description: 'Buddy',
    },
    {
      title: 'Amber',
      image: './imgs/7.png', 
      price: '7,500-15,000',
      description: 'Buddy',
    },
    {
      title: 'Bob',
      image: './imgs/8.png', 
      price: '7,500-15,000',
      description: 'Buddy',
    },


  
    
    ]
    
    var postHTML = " "
  
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML


    // var confettiSettings = { target: 'my-canvas' };
    // var confetti = new ConfettiGenerator(confettiSettings);
    // confetti.render();

// Konami Code trigger ;)
const keySequence = [];
let konamiString = '';
const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

document.addEventListener('keydown', function(e) {
  // To make sure it freezes the scroll when 
  // the first two keypresses are "ArrowUp"
  if (keySequence[0] === 'ArrowUp' && keySequence[1] === 'ArrowUp' && e.key === 'ArrowDown') {
    e.preventDefault();
  }
});

document.addEventListener('keyup', function(e) {
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  // This make sure it only work
  // when the window `scrollTop` is 0.
  if (top === 0) {
    keySequence.push(e.key);
    keySequence.splice(-konamiCode.length - 1, keySequence.length - konamiCode.length);
    konamiString = konamiCode.join('');

    if (keySequence.join('').includes(konamiString)) {
      const confettiConfig = { target: 'confetti-holder' };
      const confetti = new ConfettiGenerator(confettiConfig);
      confetti.render();
    }
  }
});