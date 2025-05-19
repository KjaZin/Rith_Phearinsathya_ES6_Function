export const validateQuery = (req, res, next) => {
  // console.log("Query paramas", req.query);
  if (!req.query.minCredits) {
    return res.json({
      error: "min credit is require",
    });
  }
  if (isNaN(req.query.minCredits) || isNaN(req.query.maxCredits)) {
    return res.status(400).json({
      error: "Bad request",
    });
  }
  if (!req.query.maxCredits && parseInt(req.query.minCredits) > 0) {
    return res.status(400).json({
      error: "maxCredits is require",
    });
  }

  if (req.query.minCredits > req.query.maxCredits) {
    return res.status(400).json({
      error: "minCredit cannot be greater than maxCredits",
    });
  }
  next();
};
