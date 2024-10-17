
import { User } from "../../model/user";

const validEmail = 'ali.rifai@student.ucll.be';
const validName = 'Ali';
const validPassword = 'password';

test("given: valid values for user, when: creating a user, then: user is created", () => {
    //given
    
    //when
    const user = new User({email: validEmail, name: validName, password: validPassword});

    //then
    expect(user.getEmail()).toEqual(validEmail);
    expect(user.getName()).toEqual(validName);
    expect(user.getPassword()).toEqual(validPassword);
});