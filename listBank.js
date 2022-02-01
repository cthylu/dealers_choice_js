const data = [
    { rank: 1, image: "/images/1_gloomhaven.webp", title: "Gloomhaven", year: 2017, description: "Vanquish monsters with strategic cardplay. Fulfill your quest to leave your legacy!", rating: 8.51, voters: 48506 },
    { rank: 2, image: "/images/2_pandemic.webp", title: "Pandemic Legacy: Season 1", year: 2015, description: "Mutating diseases are spreading around the world - can your team save humanity?", rating: 8.44, voters: 45451 },
    { rank: 3, image: "/images/3_brass.webp", title: "Brass: Birmingham", year: 2018, description: "Build networks, grow industries, and navigate the world of the Industrial Revolution.", rating: 8.42, voters: 26179 },
    { rank: 4, image: "/images/4_terra.webp", title: "Terraforming Mars", year: 2016, description: "Compete with rival CEOs to make Mars habitable and build your corporate empire.", rating: 8.27, voters: 75383 },
    { rank: 5, image: "/images/5_twilight.webp", title: "Twilight Imperium: Fourth Edition", year: 2017, description: "Build an intergalactic empire through trade, research, conquest and grand politics.", rating: 8.26, voters: 16341 },
    { rank: 6, image: "/images/6_gaia.webp", title: "Gaia Project", year: 2017, description: "Expand, research, upgrade, and settle the galaxy with one of 14 alien species.", rating: 8.17, voters: 19582 },
    { rank: 7, image: "/images/7_star_wars.webp", title: "Star Wars: Rebellion", year: 2016, description: "Strike from your hidden base as the Rebels—or find and destroy it as the Empire.", rating: 8.17, voters: 25879 },
    { rank: 8, image: "/images/8_ages.webp", title: "Through the Ages: A New Story of Civilization", year: 2015, description: "Rewrite history as you build up your civilization in this epic card drafting game!", rating: 8.15, voters: 25897 },
    { rank: 9, image: "/images/9_ring.webp", title: "War of the Ring: Second Edition", year: 2012, description: "The Fellowship and the Free Peoples clash with Sauron over the fate of Middle-Earth.", rating: 8.14, voters: 15719 },
    { rank: 10, image: "/images/10_spirit.webp", title: "Spirit Island", year: 2017, description: "Island Spirits join forces using elemental powers to defend their home from invaders. ", rating: 8.13, voters: 33041 },
  ];

  const list = () => {
    return [...data] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
  }; 
  
  const find = (rank) => {
    const game = data.find(post => post.rank === +rank);
    return {...game}; // Again, we copy the post data before returning so the original information is safe.
  }
  
  module.exports = { list: list, find: find // list, find
  };