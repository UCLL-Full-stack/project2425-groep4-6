export class Ingredient {
    private id?: number;
    private name: string;

    constructor(ingredient: {id?: number, name: string}) {
        this.id = ingredient.id;
        this.name = ingredient.name;
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): string {
        this.name = name;
        return this.name;
    }

    equals(ingredient: Ingredient): boolean {
        return (
            this.name === ingredient.getName()
        )
    }
}