import fetch from "node-fetch";
// const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const response = await fetch("https://youandeyemag.com/wp-json/wp/v2/posts");

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
    data: JSON.stringify(data),
  };
};
