function login(email, password, callback) {
    const { MongoClient } = require("mongodb@4.4.1");
    const dbUser = "jmsmall89";
    const dbPwd = "Michael16091!";
    const dbHost = "cluster0.aendn.mongodb.net";
    const dbName = "reactDB";
    const usersCollection = "reactCOL";
  
    const uri = `mongodb+srv://${dbUser}:${dbPwd}@${dbHost}/test?retryWrites=true`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
      if (err) return callback(err);
  
      const collection = client.db(dbName).collection(usersCollection);
  
      collection.findOne({username: email, password}, (err, user) => {
        if (err) return callback(err);
        if (!user) return callback("User not found.");
  
        const profile  = {
          ...user,
          user_id: user.username
        };
        callback(null, profile);
        client.close();
      });
    });
  }

  function getByEmail(email, callback) {
    const { MongoClient } = require("mongodb@4.4.1");
    const dbUser = "jmsmall89";
    const dbPwd = "Michael16091!";
    const dbHost = "cluster0.aendn.mongodb.net";
    const dbName = "reactDB";
    const usersCollection = "reactCOL";
  
    const uri = `mongodb+srv://${dbUser}:${dbPwd}@${dbHost}/test?retryWrites=true`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
      if (err) return callback(err);
  
      const collection = client.db(dbName).collection(usersCollection);
  
      collection.findOne({username: email}, (err, user) => {
        if (err) return callback(err);
        if (!user) return callback(null);
  
        delete user.password;
        const profile  = {
          ...user,
          user_id: user.username
        };
        callback(null, profile);
        client.close();
      });
    });
  }

  function create(user, callback) {
    const { MongoClient } = require("mongodb@4.4.1");
    const dbUser = "jmsmall89";
    const dbPwd = "Michael16091!";
    const dbHost = "cluster0.aendn.mongodb.net";
    const dbName = "reactDB";
    const usersCollection = "reactCOL";
  
    const uri = `mongodb+srv://${dbUser}:${dbPwd}@${dbHost}/test?retryWrites=true`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
      const collection = client.db(dbName).collection(usersCollection);
  
      collection.insertOne(user, (err, result) => {
        if (err) return callback(err);
        if (result.insertedCount !== 1) return callback("Unable not inserted.");
  
        callback(null);
        client.close();
      });
    });
  }

 function verify (email, callback) {
    const { MongoClient } = require("mongodb@4.4.1");
    const dbUser = "jmsmall89";
    const dbPwd = "Michael16091!";
    const dbHost = "cluster0.aendn.mongodb.net";
    const dbName = "reactDB";
    const usersCollection = "reactCOL";
  
    const uri = `mongodb+srv://${dbUser}:${dbPwd}@${dbHost}/test?retryWrites=true`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
      const collection = client.db(dbName).collection(usersCollection);
  
      collection.updateOne({username: email}, {$set: {email_verified: true}}, (err, result) => {
        if (err) return callback(err);
        if (result.modifiedCount !== 1) return callback("Unable to mark user as verified.");
  
        callback(null, true);
        client.close();
      });
    });
  }

  function changePassword (email, newPassword, callback) {
    const { MongoClient } = require("mongodb@4.4.1");
    const dbUser = "jmsmall89";
    const dbPwd = "Michael16091!";
    const dbHost = "cluster0.aendn.mongodb.net";
    const dbName = "reactDB";
    const usersCollection = "reactCOL";
  
    const uri = `mongodb+srv://${dbUser}:${dbPwd}@${dbHost}/test?retryWrites=true`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
      if (err) return callback(err);
      const collection = client.db(dbName).collection(usersCollection);
  
      // TO-DO: salt and hash password before persisting it (check note below)
  
      collection.updateOne({username: email}, {$set: {password: newPassword}}, (err, result) => {
        if (err) return callback(err);
        if (result.modifiedCount !== 1) return callback("Unable to change user password.");
  
        callback(null, true);
        client.close();
      });
    });
  }

  function remove (id, callback) {
    const { MongoClient } = require("mongodb@4.4.1");
    const dbUser = "jmsmall89";
    const dbPwd = "Michael16091!";
    const dbHost = "cluster0.aendn.mongodb.net";
    const dbName = "reactDB";
    const usersCollection = "reactCOL";
  
    const uri = `mongodb+srv://${dbUser}:${dbPwd}@${dbHost}/test?retryWrites=true`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
      if (err) return callback(err);
  
      const collection = client.db(dbName).collection(usersCollection);
  
      collection.deleteOne({_id: ObjectID(id)}, (err, result) => {
        if (err) return callback(err);
        if (result.deletedCount !== 1) return callback("Unable to delete user.");
  
        callback(null);
        client.close();
      });
    });
  }