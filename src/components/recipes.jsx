import { list } from "postcss";
import { useState } from "react";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};
const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

export const Recipes = () => {
    const [recipe, setRecipe] = useState({});

    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gauntlets Recipe</button>
            <ul>
                {Object.keys(recipe).map((mat) => (
                    <li key={mat}>
                        {mat}: {recipe[mat]}
                    </li>
                ))}
            </ul>
        </div>
    );
};
