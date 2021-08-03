const RatesService = require('../services/coinlayer-api');

const getBtcRate = async (req, res, next) => {
  try {
    const rates = await RatesService.fetchUahToBtcRate();

    return res.json({ ...rates });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBtcRate };
