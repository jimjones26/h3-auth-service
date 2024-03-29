module.exports.GET_USER_BY_ID = `
query GetUserById($id: Int!) {
  h3_users(where: {id: {_eq: $id}}) {
    id
    email
    first_name
    last_name
    first_visit
    token_version
    users_scopes {
      scope {
        name
      }
    }
    practitioners {
      setup_complete
    }
  }
}

`;

module.exports.GET_USER_BY_EMAIL = `
query GetUserByEmail($email: String!) {
  h3_users(where: {email: {_eq: $email}}) {
    id
    email
    first_name
    last_name
    first_visit
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

module.exports.INSERT_CLIENT = `
mutation CreateNewClient($email: String!, $scopeId: Int!, $firstName: String!, $lastName: String!, $phoneNumber: String!) {
  insert_h3_users(objects: {email: $email, first_name: $firstName, last_name: $lastName, phone_number: $phoneNumber, users_scopes: {data: {scope_id: $scopeId}}}) {
    returning {
      id
      first_name
      last_name
      email
      phone_number
    }
  }
}
`;

module.exports.INSERT_PRACTITIONER = `
mutation CreateNewPractitioner($email: String!, $scopeId: Int!) {
  insert_h3_users(objects: {email: $email, users_scopes: {data: {scope_id: $scopeId}}}) {
    returning {
      id
      email
    }
  }
}
`;

module.exports.GET_SCOPE_ID_BY_NAME = `
query GetScopeIdByName($scopeName: String!) {
  h3_scopes(where: {name: {_eq: $scopeName}}) {
    id
  }
}
`;
