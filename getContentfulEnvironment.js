const contentfulManagement = require("contentful-management");

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "",
  });

  return contentfulClient
    .getSpace("")
    .then((space) => space.getEnvironment(""));
};
