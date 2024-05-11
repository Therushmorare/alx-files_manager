// Assuming you have utils to check Redis and DB
const { checkRedis, checkDB } = require('../utils');

const AppController = {
  getStatus: (req, res) => {
    const redisAlive = checkRedis();
    const dbAlive = checkDB();
    if (redisAlive && dbAlive) {
      res.status(200).json({ redis: true, db: true });
    } else {
      res.status(500).json({ error: 'Service unavailable' });
    }
  },
  getStats: (req, res) => {
    // Assuming you have a users and files collection
    const usersCount = /* count users */;
    const filesCount = /* count files */;
    res.status(200).json({ users: usersCount, files: filesCount });
  }
};

module.exports = AppController;

