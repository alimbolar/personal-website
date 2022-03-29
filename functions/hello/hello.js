import fetch from 'node-fetch';
// https://answers.netlify.com/t/to-use-import-or-require-for-importing-node-fetch-for-netlify-serverless-functions-both-give-errors/50068/5

// const fetch = require('node-fetch');

exports.handler = async function(event, context){

    const response = await fetch('https://youandeyemag.com/wp-json/wp/v2/posts');

    const data = response.json();

    return {
        statusCode:200,
        body:JSON.stringify({message:"Hello World"}),
        data
    }
}
