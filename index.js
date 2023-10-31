import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
// db
import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },

    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },

    authors() {
      return db.authors;
    },
  },
};

// Server setup
const server = new ApolloServer({
  // typDefs -- definitions of types of data
  typeDefs,
  // resolvers
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log("Server running on port 4000");
