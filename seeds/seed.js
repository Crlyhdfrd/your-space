const connection = require('../config/connection');
const { User, Thought } = require('../models');

const { thoughtData, userData } = require('./data');  
connection.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  await Thought.insertMany(thoughtData);
  await User.insertMany(userData);

  console.log('Data seeded!');
});

