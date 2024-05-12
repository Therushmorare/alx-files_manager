import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}/${database}`;

    this.client = new MongoClient(url, { useUnifiedTopology: true });

    this.client.connect((err) => {
      if (err) {
        console.error(`DB connection error: ${err}`);
      } else {
        console.log('DB connected successfully');
      }
    });
  }

  isAlive() {
    return !!this.client && this.client.isConnected();
  }

  async nbUsers() {
    const db = this.client.db();
    const users = db.collection('users');
    const count = await users.countDocuments();
    return count;
  }

  async nbFiles() {
    const db = this.client.db();
    const files = db.collection('files');
    const count = await files.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();

export default dbClient;

