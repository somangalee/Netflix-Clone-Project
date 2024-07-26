let dramaShows = [
    "Ginny & Georgia",
    "Outlander",
    "Grey's Anatomy",
    "Ozark",
    "The Queen's Gambit"
  ];
  
  let fantasyShows = [
    "Supernatural",
    "The Sandman",
    "Wednesday",
    "The Witcher",
    "Avatar: The Last Airbender"
  ];
  
  let comedyShows = [
    "Arrested Development",
    "Dead to Me",
    "Seinfeld",
    "Emily in Paris",
    "The Good Place"
  ];
  
  function chooseRandomGenre() {
    let randomGenre = getRandomNumber(0, 2); // generates a random number and passes it to the value randomGenre
    let genres = ["drama", "fantasy", "comedy"]; // lists out the genres available
    return genres[randomGenre]; // selects the randomly generated index number from the array list of genres and returns the value
  }
  
  function displayRandomShow(genre) {
    let randomIndex; // declares the values needed later
    let show;
    
    if (genre === "random") { // if the genre is "random" the chooseRandomGenre() function above will run
      genre = chooseRandomGenre();
    }
  
      if (genre === "drama") { // if genre is "drama", the randomIndex will be assigned the value of the randomly generated number from the getRandomNumber() function. 
        randomIndex = getRandomNumber(0, dramaShows.length - 1);
          show = dramaShows[randomIndex];
      } else if (genre === "fantasy") {
        randomIndex = getRandomNumber(0, fantasyShows.length - 1);
          show = fantasyShows[randomIndex];
      } else {
        randomIndex = getRandomNumber(0, comedyShows.length - 1);
          show = comedyShows[randomIndex];
    } 
    displayShow(show)
  }
  
  