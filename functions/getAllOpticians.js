const { MongoClient } = require("mongodb");

exports.handler = async function (event, context) {
  const DB =
    "mongodb+srv://production:pauldaniel@fp-projects.t9wzd.mongodb.net/youandeyeawards2022?retryWrites=true&w=majority";

  const client = await MongoClient.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();

  try {
    const opticians = await db
      .collection("opticians")
      .find(
        {},
        {
          projection: { name: 1, opticianId: 1, slug: 1, logoUrl: 1 },
          sort: { name: 1 },
        }
      )
      .toArray();

    client.close();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(opticians),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error }),
    };
  }
};
