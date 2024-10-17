import { Tea } from "./tea";
import { User } from "./user";

export class Profile{
    private id?: number;
    private user: User;
    private teas: Tea[];

    constructor(profile: {id?: number, user: User}) {
        this.id = profile.id;
        this.user = profile.user;
        this.teas = [];
    }

    getId(): number | undefined {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    getTeas(): Tea[] {
        return this.teas;
    }

    addTea(tea: Tea): Tea {
        this.teas.push(tea);
        return tea;
    }

    deleteTea(tea: Tea): Tea {
        this.teas = this.teas.filter(t => !t.equals(tea));
        return tea;
    }

    equals(profile: Profile): boolean {
        return (
            this.user.equals(profile.getUser())
        )
    }
}