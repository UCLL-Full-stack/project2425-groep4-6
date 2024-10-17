import { Ingredient } from "./ingredient";
import { Profile } from "./profile";

export class Tea {
    private id?: number;
    private name: string;
    private ingredients: Ingredient[];

    constructor(tea: {id?: number, name: string, ingredients: Ingredient[]}) {
        this.id = tea.id;
        this.name = tea.name;
        this.ingredients = tea.ingredients;
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

    getIngredients(): Ingredient[] {
        return this.ingredients;
    }

    setIngredients(ingredients: Ingredient[]): Ingredient[] {
        this.ingredients = ingredients;
        return this.ingredients;
    }

    equals(tea: Tea): boolean {
        return (
            this.name === tea.getName() &&
            this.ingredients === tea.getIngredients()
        )
    }
}