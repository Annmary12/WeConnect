const uuid = require('node-uuid');

const businesses = [
  {
    id: uuid.v4(),
    name: 'WeConnect',
    description: 'Connecting people with their business ideas',
    location: 'Lagos',
    category: 'IT'
  },

  {
    id: uuid.v4(),
    name: 'Smart Hub',
    description: 'Learn and build your programming skills',
    location: 'Abuja',
    category: 'IT'
  }
];

export default businesses;
