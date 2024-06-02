async function getRedisClient() {
  const { createClient } = require("redis");
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  return client;
}

class RedisClient {
  static async getInstance() {
    if (!this.client) {
      console.log("RUN HERE");
      this.client = await getRedisClient();
    }

    return this.client;
  }
}

module.exports = {
  RedisClient,
};
