import "./styles/index.scss";

const elvenShieldRecipe = {
    leatherStraps: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
}
console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);