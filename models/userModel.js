const { gqlClient } = require('./../graphql/index');
const {
  GET_USER_BY_EMAIL,
  INSERT_USER,
  GET_USER_BY_ID,
  INCREMENT_TOKEN_VERSION,
  INSERT_CLIENT,
} = require('./../graphql/queries/queries');

exports.getUserById = (id) => {
  return gqlClient(
    GET_USER_BY_ID,
    { 'Content-Type': 'application/json' },
    {
      id,
    }
  ).then((resAsJson) => {
    if (resAsJson.data.h3_users.length > 0) {
      return resAsJson.data.h3_users[0];
    } else {
      return null;
    }
  });
};

exports.getUserByEmail = (email) => {
  return gqlClient(
    GET_USER_BY_EMAIL,
    { 'Content-Type': 'application/json' },
    {
      email,
    }
  ).then((resAsJson) => {
    if (resAsJson.data.h3_users.length > 0) {
      return resAsJson.data.h3_users[0];
    } else {
      return null;
    }
  });
};

exports.revokeRefreshToken = (id, tokenVersion) => {
  return gqlClient(
    INCREMENT_TOKEN_VERSION,
    { 'Content-Type': 'application/json' },
    {
      id,
      tokenVersion,
    }
  ).then((resAsJson) => resAsJson.data.update_h3_users.returning[0]);
};

exports.createNewClient = (user) => {
  console.log('BLAH: ', user);
  return gqlClient(
    INSERT_CLIENT,
    { 'Content-Type': 'application/json' },
    {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    }
  ).then((resAsJson) => {
    if (resAsJson.data.insert_h3_users.returning.length > 0) {
      return resAsJson.data.insert_h3_users.returning[0];
    } else {
      throw Error('user not created');
    }
  });
};

const createNewUser = (email) => {
  return gqlClient(
    INSERT_USER,
    { 'Content-Type': 'application/json' },
    {
      email,
    }
  ).then((resAsJson) => {
    if (resAsJson.data.insert_h3_users.returning.length > 0) {
      return resAsJson.data.insert_h3_users.returning[0];
    } else {
      throw Error('user not created');
    }
  });
};
