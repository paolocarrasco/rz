const PRODUCTION_ENVIRONMENT_NAME = 'production';
const PRODUCTION_HOST = 'https://raw.githubusercontent.com/paolocarrasco/rz/refs/heads/main/public';
const LOCAL_DEV_HOST = 'http://localhost:3000';

export const obtainRecipes = async () => {
  const host = process.env.NODE_ENV === PRODUCTION_ENVIRONMENT_NAME
    ? PRODUCTION_HOST
    : LOCAL_DEV_HOST;
  const recipesResponse = await fetch(`${host}/recipes.json`);
  const {recipes} = await recipesResponse.json();

  return recipes;
}