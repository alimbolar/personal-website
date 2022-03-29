exports.handler = async function(event, context){

    const response = fetch('https://youandeyemag.com/wp-json/wp/v2/posts');

    const data = response.json();

    return {
        statusCode:200,
        body:JSON.stringify({message:"Hello World"}),
        data
    }
}
