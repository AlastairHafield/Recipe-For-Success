import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_RECIPES } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";

function ProductList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_RECIPES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_RECIPES,
        recipes: data.recipes,
      });
      data.recipes.forEach((recipe) => {
        idbPromise("recipes", "put", recipe);
      });
    } else if (!loading) {
      idbPromise("recipes", "get").then((recipes) => {
        dispatch({
          type: UPDATE_RECIPES,
          recipes: recipes,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterRecipes() {
    if (!currentCategory) {
      return state.recipes;
    }

    return state.recipes.filter(
      (recipe) => recipe.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Recipes:</h2>
      {state.recipes.length ? (
        <div className="flex-row">
          {filterRecipes().map((recipe) => (
            <ProductItem
              key={recipe._id}
              _id={recipe._id}
              image={recipe.image}
              name={recipe.name}
              price={recipe.price}
            />
          ))}
        </div>
      ) : (
        <h3>Oops! No recipes found!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;