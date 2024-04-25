const Joi = require('@hapi/joi');

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        REACT_APP_API: Joi.string().default('http://localhost:4000/v1')
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export const Config = {
    env: envVars.NODE_ENV,
    API_URL: envVars.REACT_APP_API
};
