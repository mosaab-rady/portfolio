import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    getAllProjects: [Project!]!
    getProject(id: String): Project!
  }

  type Mutation {
    createProject(name: String!, summary: String!): Project
  }

  type Project {
    id: String
    name: String
    summary: String
    description: String
    link: String
    color: String
    image: String
    logoImage: String
  }
`;
