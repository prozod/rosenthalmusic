const contentfulManagement = require("contentful-management");

console.log(process.env.NODE_ENV);
console.log(process.env.NEXT_PUBLIC_SPACE_ID);

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "",
  });

  return contentfulClient
    .getSpace("")
    .then((space) => space.getEnvironment(""));
};
