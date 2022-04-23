export const baseURL = 'https://api.spoonacular.com/';
const randomRecipe = 'recipes/random';
const apiKey = '?apiKey=929576e78e4e4be28294ddade6c6f1ca';

export const getRandomRecipe = async () => {
  /* fetch a response based on the URL for a random recipe */
  const response = await fetch(`${baseURL}${randomRecipe}${apiKey}&number=1`),
    /* parse the JSON object */
    json = await response.json(),
    /* retrieve the response information from the parsed JSON object */
    recipeInfo = json.recipes.map(recipe => recipe),
    /* using desconstruction to get the object (recipe) inside of the jsonArray */
    [recipe] = recipeInfo;

  return recipe;
}