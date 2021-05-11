var shop = [
    {
      title: 'Bubbles',
      image: './imgs/1.png', 
      price: '500',
      description: 'Bubbles got her name from her infectious energy. <br> Her main goal in life is to make sure you always <br> have a smile on your face (with her in your lap, of course)!',
    },
    {
      title: 'Buddy',
      image: './imgs/2.png', 
      price: '350',
      description: 'Buddy is our class clown, who thinks he is a Mastiff. <br> He is unafraid and adorably dopey. As playful and energetic <br> as he is, there\'s nothing he loves more than a good nap!',
    },
    {
      title: 'Rosie',
      image: './imgs/3.png', 
      price: '750',
      description: 'Rosie is the definition of puppy! <br> While she is incredibly playful, Rosie girl is also <br> extremely well mannered and just wants to please you.',
    },
    {
      title: 'Princess',
      image: './imgs/4.png', 
      price: '650',
      description: 'Don\'t let the name fool you, Pricess is our little tough guy. <br> He has quite the protective personality and is not <br>the least bit bothered by the implications of his name.',
    },
    {
      title: 'Whiskers',
      image: './imgs/5.png', 
      price: '100',
      description: 'Whiskers is as polite and quiet as they come. <br> He just wants to be loved on and makes the best <br> and warmest cuddle buddy at bedtime. ',
    },
    {
      title: 'Jack',
      image: './imgs/6.png', 
      price: '125',
      description: 'Playful, affectionate and talkative are the best words <br> to describe our Jack. He has the most infectious <br> smile and an affinity for catnip.',
    },
    {
      title: 'Amber',
      image: './imgs/7.png', 
      price: '125',
      description: 'Amber is our mellow kitty girl. She loves  attention, <br> but isn\'t bothered if you are busy with other things. <br> More than anything she loves her feather toys.',
    },
    {
      title: 'Bob',
      image: './imgs/8.png', 
      price: '100',
      description: 'A gentle giant, Bob just wants to be your shadow. <br> He will stretch out and do yoga with you and then <br> promptly sit on your keyboard while you\'re working',
    },


  
    
    ]
    
    var postHTML = " "
  
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class="bit"><p>'+ shop[i].description + '</p><button id="button" type="button" class="btn btn-outline-warning"> pick me! pick me!</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML




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
  // const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  const top = (doc.clientTop || 0);

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

