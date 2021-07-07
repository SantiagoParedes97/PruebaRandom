const { buildSchema } = require('graphql');

const Post = `
  type Post {
    id: String
    title: String @deprecated(reason: "No more used")
    createdAt: String
    modifiedAt: String
  }  
`;

const Query = `
  type Query {
    post: Post!
    posts: [Post!]
  }
`;

module.exports = buildSchema(`
  ${Post}
  ${Query}
`);
