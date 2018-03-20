import businesses from '../model/business';

module.exports = {
    filter(req, res){
        const { category, location } = req.query;
    const loc = [];
    const cat = [];

    // To search for business based on on location
    if (location) {
      for (let i = 0; i < businesses.length; i += 1) {
        if (businesses[i].location.toLowerCase() === location.toLowerCase()) {
          loc.push(businesses[i]);
        }
      }
      if (loc.length > 0) {
        return res.status(200).json({
          loc,
          message: `List of business(es) in ${location}`,
          error: false
        });
      }

      return res.status(400).json({
        message: `No such business under this(${location}) location`,
        error: true
      });
    }

    // To search for business based on category
    if (category) {
      for (let i = 0; i < businesses.length; i += 1) {
        if (businesses[i].category.toLowerCase() === category.toLowerCase()) {
          cat.push(businesses[i]);
        }
      }

      if (cat.length > 0) {
        return res.status(200).json({
          cat,
          message: `List of business(es) in ${category}`,
          error: false
        });
      }

      return res.status(400).json({
        message: `No sure business under this(${category}) category`,
        error: true
      });
    }

    }
}