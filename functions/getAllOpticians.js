const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

exports.handler = async function (event, context) {
  const DB =
    "mongodb+srv://production:pauldaniel@fp-projects.t9wzd.mongodb.net/youandeyeawards2022?retryWrites=true&w=majority";

  const client = await MongoClient.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();

  console.log(event);
  console.log(context);

  try {
    // const queryObj = { ...req.query };
    // const excludedFields = ["page", "limit", "sort", "fields"];
    // excludedFields.forEach((field) => delete queryObj[field]);

    // let queryStr = JSON.stringify(queryObj);

    // queryStr = queryStr.replace(
    //   /b(gte)|(gt)|(lte)|(lt)b/,
    //   (match) => `$${match}`
    // );

    // let query = Optician.find(JSON.parse(queryStr));

    // // SORTING

    // if (req.query.sort) {
    //   const sortBy = req.query.sort.split(",").join(" ");
    //   query = query.sort(sortBy);
    // } else {
    //   query = query.sort("name");
    // }

    // // SELECT FIELDS

    // if (req.query.fields) {
    //   const fields = req.query.fields.split(",").join(" ");
    //   query = query.select(fields);
    // }

    // // PAGINATION

    // const page = req.query.page || 1;
    // const limit = req.query.limit || 1000;
    // // Logic applied is that records from previous page (page-1) need to be skipped
    // const skip = (page - 1) * limit;
    // query = query.skip(skip).limit(limit);

    // const numOfRecords = await Optician.countDocuments();
    // if (req.query.page) {
    //   if (skip >= numOfRecords) throw new Error("No more records");
    // }

    // const opticians = await query;

    // PURE MONGODB

    // const opticians = await db
    //   .collection("opticians")
    //   .find({}, { name: 1, opticianId: 1, slug: 1, logoUrl: 1 })
    //   .sort({ name: 1 })
    //   .toArray();

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
