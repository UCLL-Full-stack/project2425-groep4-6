export class User {
    private id?: number;
    private email: string;
    private name: string;
    private password: string;

    constructor(user: {id?: number, email: string, name: string, password: string}) {
        this.id = user.id;
        this.email = user.email;
        this.name = user.name;
        this.password = user.password;
    }

    getId(): number | undefined {
        return this.id;
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }

    getPassword(): string {
        return this.password;
    }

    equals(user: User): boolean {
        return (
            this.email === user.getEmail() &&
            this.name === user.getName() &&
            this.password === user.getPassword()
        )
    }
}