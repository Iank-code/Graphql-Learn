let games = [
  { id: "1", title: "Zelda, Tears of the Kingdom", platform: ["Switch"] },

  { id: "", title: "Final Fantasy 7 Remake", platform: ["Ps5", "Xbox"] },

  { id: "3", title: "Elden Ring", platform: ["Ps5", "Xbox", "PC"] },

  { id: "4", title: "Mario Kart", platform: ["Switch"] },

  { id: "5", title: "Pokemon Scarlet", platform: ["Ps5", "Xbox", "PC"] },
];

let authors = [
  { id: "1", name: "Mario", verified: true },
  { id: "2", name: "Yoshi", verified: false },
  { id: "3", name: "Peach", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "lorem ipsum", auther_id: "1", game_id: "2" },

  { id: "2", rating: 10, content: "lorem ipsum", auther_id: "2", game_id: "1" },

  { id: "3", rating: 7, content: "lorem ipsum", auther_id: "3", game_id: "3" },

  { id: "4", rating: 5, content: "lorem ipsum", auther_id: "2", game_id: "4" },

  { id: "5", rating: 8, content: "lorem ipsum", auther_id: "2", game_id: "5" },

  { id: "6", rating: 7, content: "lorem ipsum", auther_id: "1", game_id: "2" },

  { id: "7", rating: 10, content: "lorem ipsum", auther_id: "3", game_id: "1" },
];

export default { games, authors, reviews };
