/**
 * Check if the current environment is production, based on the NODE_ENV environment variable.
 * The value for the production environment is based on the Next.js convention.
 */
export const isProductionEnvironment = () => process.env.NODE_ENV === 'production';