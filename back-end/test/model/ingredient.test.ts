import { Ingredient } from "../../model/ingredient";

const vaildName = 'lemon';

test("given: valid values for ingredient, when: creating an ingredient, then: ingredient is created", () => {
    //given

    //when
    const ingredient = new Ingredient({name: vaildName});

    //then
    expect(ingredient.getName()).toEqual(vaildName);
});

test("given: valid new name for ingredient, when: setting a new name, then: name is set", () => {
    //given
    const ingredient = new Ingredient({name: vaildName});
    const validNewName = 'Lemon';

    //when
    ingredient.setName(validNewName);

    //then
    expect(ingredient.getName()).toEqual(validNewName);
});