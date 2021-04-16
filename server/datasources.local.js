const mongodbUrl = process.env.MONGODB_URL;
const localMongodbUrl = "mongodb://localhost/loopback";

if (mongodbUrl) {
  console.log("using mongodb url " + mongodbUrl);
  const dataSources = {
    db: {
      name: "db",
      connector: "mongodb",
      url: mongodbUrl,
    },
  };
  module.exports = dataSources;
} else {
  console.log("using mongodb url " + localMongodbUrl);
  const dataSources = {
    db: {
      name: "db",
      connector: "mongodb",
      url: localMongodbUrl,
    },
  };
  module.exports = dataSources;
}
