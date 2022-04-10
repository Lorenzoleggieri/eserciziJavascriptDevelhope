let personName = 'Paul';

function canPlay() {
  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();