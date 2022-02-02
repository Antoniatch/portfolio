const Joi = require('joi');

const projectsCreationSchema = Joi.object({
    name: Joi.string().required()
});

const projectsCreationValidation = (req, res, next) => {
  const payload = req.body;
  const { error, value } = projectsCreationSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  } else {
    req.body = value;
    next();
  }
};

module.exports = {
    projectsCreationSchema,
    projectsCreationValidation
};
