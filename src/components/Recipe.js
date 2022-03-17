import React from "react";
import IngredientList from "./IngredientList";

const Recipe = (props) => {
  const { name, cookTime, servings, instructions, ingredients } = props;

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger">Delete</button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="receipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="receipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="receipe__label">Instuctions</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="receipe__label">Ingredients</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
