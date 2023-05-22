const Joi = require("joi");

const registerUserValidation = (payload) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    picture: Joi.string().allow(null),
    age: Joi.number().required(),
    gender: Joi.string().required(),
    height: Joi.number().required(),
    weight: Joi.number().required(),
    activity: Joi.string().required(),
    food_type: Joi.array().allow(null),
    created_at: Joi.date().required(),
    updated_at: Joi.date().required(),
  });

  return schema.validate(payload);
};

const updateUserValidation = (payload) => {
  const schema = Joi.object({
    name: Joi.string().allow(null),
    age: Joi.number().allow(null),
    height: Joi.number().allow(null),
    weight: Joi.number().allow(null),
    activity: Joi.string().allow(null),
    food_type: Joi.array().allow(null),
    updated_at: Joi.date().required(),
  });

  return schema.validate(payload);
};

module.exports = { registerUserValidation, updateUserValidation };
