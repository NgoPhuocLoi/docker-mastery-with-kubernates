const express = require("express");
const { createClient } = require("redis");
const process = require("process")

async function getRedisClient() {
  return await createClient({
    socket: {
        host: "redis-server",
        port: 6379
    }
  })
    .connect();
}

const app = express();

app.get("/users", async (req, res) => {
    process.exit(0)
    try {
        const redisClient = await getRedisClient()
        const numberOfUsers = await redisClient.get("users") || 0
        await redisClient.set("users", Number(numberOfUsers) + 1)
        res.json({ users: numberOfUsers });
    } catch (error) {
        console.log(error)
        res.json({error: "Something wrong"})
    }
});

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});
