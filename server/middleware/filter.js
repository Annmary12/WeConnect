import models from '../models/index';

const businessModel = models.Business;

module.exports = {
  filter(req, res) {
    const { category, location } = req.query;
    if (location) {
      businessModel.find({ where });
    }
  }

// const loc = [];
// const cat = [];

// if (location) {
//   for (let i = 0; i < businesses.length; i += 1) {
//     if (businesses[i].location.toLowerCase() === location.toLowerCase()) {
//       loc.push(businesses[i]);
//     }
//   }
//   if (loc.length > 0) {
//     return res.status(200).json({
//       loc,
//       message: `List of business(es) in ${location}`,
//       error: false
//     });
//   }

//   return res.status(400).json({
//     message: `No such business under this(${location}) location`,
//     error: true
//   });
// }

// if (category) {
//   for (let i = 0; i < businesses.length; i += 1) {
//     if (businesses[i].category.toLowerCase() === category.toLowerCase()) {
//       cat.push(businesses[i]);
//     }
//   }

//   if (cat.length > 0) {
//     return res.status(200).json({
//       cat,
//       message: `List of business(es) in ${category}`,
//       error: false
//     });
//   }

//   return res.status(400).json({
//     message: `No sure business under this(${category}) category`,
//     error: true
//   });
// }

};
