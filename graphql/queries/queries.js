module.exports.GET_USER_BY_ID = `
query GetUserById($id: Int!) {
  __typename
  h3_users(where: {id: {_eq: $id}}) {
    id
    email
    first_name
    last_name
    token_version
    users_scopes {
      scope {
        name
      }
    }
  }
}
`;

module.exports.GET_USER_BY_EMAIL = `
query GetUserByEmail($email: String!) {
  __typename
  h3_users(where: {email: {_eq: $email}}) {
    id
    email
    first_name
    last_name
    token_version
    users_scopes {
      scope {
        name
      }
    }
  }
}
`;

module.exports.INSERT_USER = `
mutation InsertNewUser($email: String!) {
  __typename
  insert_h3_users(objects: {email: $email}) {
    returning {
      id
      email
    }
  }
}
`;

module.exports.INCREMENT_TOKEN_VERSION = `
mutation IncrementTokenVersion($id: Int!, $tokenVersion: Int!) {
  __typename
  update_h3_users(where: {id: {_eq: $id}}, _set: {token_version: $tokenVersion}) {
    returning {
      id
      token_version
    }
  }
}
`;
