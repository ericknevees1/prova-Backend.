module.exports = (schema) => async (req, res, next) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
  };