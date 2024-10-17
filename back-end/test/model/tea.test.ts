import { Ingredient } from "../../model/ingredient";
import { Tea } from "../../model/tea";

const validName = 'MyTea';
const validIngredientLemon = new Ingredient({name: 'Lemon'});
const validIngredientGinger = new Ingredient({name: 'Ginger'});
const validIngredients = [validIngredientLemon, validIngredientGinger];

test("given: valid values for tea, when: creating a tea, then: tea is created", () => {
    //given

    //when
    const tea = new Tea({name: validName, ingredients: validIngredients});

    //then
    expect(tea.getName()).toEqual(validName);
    expect(tea.getIngredients()).toEqual(validIngredients);
});

test("given: valid new name for tea, when: setting a new name, then: name is set", () => {
    //given
    const tea = new Tea({name: validName, ingredients: validIngredients});
    const validNewName = 'MyEditedTea';

    //when
    tea.setName(validNewName);

    //then
    expect(tea.getName()).toEqual(validNewName);
});

test("given: valid new ingredients for tea, when: setting new ingredients, then: ingredients are set", () => {
    //given
    const tea = new Tea({name: validName, ingredients: validIngredients});
    const validIngredientOregano = new Ingredient({name: 'Oregano'});
    const validNewIngredients = [validIngredientOregano];

    //when
    tea.setIngredients(validNewIngredients);

    //then
    expect(tea.getIngredients()).toEqual(validNewIngredients);
});