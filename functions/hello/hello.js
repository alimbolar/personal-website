const fetch = require("node-fetch");
// import fetch from "node-fetch";

exports.handler = async function (event, context) {
  const response = await fetch("https://youandeyemag.com/wp-json/wp/v2/posts");

  const data = await response.json();

  console.log(data);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
