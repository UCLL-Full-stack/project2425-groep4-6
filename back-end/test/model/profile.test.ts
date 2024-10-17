import { Ingredient } from "../../model/ingredient";
import { Profile } from "../../model/profile";
import { Tea } from "../../model/tea";
import { User } from "../../model/user";

const validEmail = 'ali.rifai@student.ucll.be';
const validName = 'Ali';
const validPassword = 'password';
const validIngredientLemon = new Ingredient({name: 'Lemon'});
const validIngredientGinger = new Ingredient({name: 'Ginger'});

const validUser = new User({email: validEmail, name: validName, password: validPassword});
const validTea = new Tea({name: 'MyTea1', ingredients: [validIngredientLemon]});
const validTea2 = new Tea({name: 'MyTea2', ingredients: [validIngredientLemon, validIngredientGinger]});

test("given: valid values for profile, when: creating a profile, then: profile is created", () => {
    //given

    //when
    const profile = new Profile({user: validUser});

    //then
    expect(profile.getUser()).toEqual(validUser);
    expect(profile.getTeas()).toEqual([]);
});

test("given: valid new tea for profile, when: adding a new tea to profile without tea, then: tea is added", () => {
    //given
    const profile = new Profile({user: validUser});

    //when
    profile.addTea(validTea);

    //then
    expect(profile.getTeas()).toEqual([validTea]);
});

test("given: valid new tea for profile, when: adding a new tea to profile with tea, then: tea is added", () => {
    //given
    const profile = new Profile({user: validUser});
    profile.addTea(validTea);

    //when
    profile.addTea(validTea2);

    //then
    expect(profile.getTeas()).toContain(validTea);
    expect(profile.getTeas()).toContain(validTea2);
    expect(profile.getTeas().length).toEqual(2);
});

test("given: valid tea for profile, when: deleting a tea from profile, then: tea is deleted", () => {
    //given
    const profile = new Profile({user: validUser});
    profile.addTea(validTea);
    profile.addTea(validTea2);

    //when
    profile.deleteTea(validTea);

    //then
    expect(profile.getTeas()).not.toContain(validTea);
    expect(profile.getTeas()).toContain(validTea2);
    expect(profile.getTeas().length).toEqual(1);
});