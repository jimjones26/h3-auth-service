const { gqlClient } = require('./../graphql/index');
const { GET_SCOPE_ID_BY_NAME } = require('./../graphql/queries/queries');

exports.getScopeIdByName = (scopeName) => {
  return gqlClient(
    GET_SCOPE_ID_BY_NAME,
    { 'Content-Type': 'application/json' },
    {
      scopeName,
    }
  ).then((resAsJson) => {
    if (resAsJson.data.h3_scopes.length > 0) {
      return resAsJson.data.h3_scopes[0];
    } else {
      return null;
    }
  });
};
