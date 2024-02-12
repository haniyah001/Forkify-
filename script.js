"use strict";

// const btn = document.querySelector(" ")

// FETCHING RECIPE

async function getRecipe() {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=pepperoni`
    );
    const data = await response.json();
    console.log(data);
    // renderRecipe(data[0]);
  } catch (err) {
    console.error(err);
  }
}
getRecipe();
