import fetch from "node-fetch";
// const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const response = await fetch("https://youandeyemag.com/wp-json/wp/v2/posts");

  console.log(event);

  const data = await response.json();

  //   console.log(data);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
