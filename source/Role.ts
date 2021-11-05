import {ArgumentType} from "./ArgumentType";
import {ArgumentTypeStatic} from "./ArgumentTypeStatic";

export class Role {

    description: string
    f: string
    n: string

    /**
     * A constructor of {@link Role} class which takes description, f, and n as inputs and initializes corresponding with these inputs.
     *
     * @param description  Description of the role
     * @param f  Argument Type of the role
     * @param n  Number of the role
     */
    constructor(description: string, f: string, n: string) {
        this.description = description
        this.f = f
        this.n = n
    }

    /**
     * Accessor for description.
     *
     * @return description.
     */
    getDescription(): string{
        return this.description
    }

    /**
     * Accessor for f.
     *
     * @return f.
     */
    getF(): string{
        return this.f
    }

    /**
     * Accessor for n.
     *
     * @return n.
     */
    getN(): string{
        return this.n
    }

    /**
     * Constructs and returns the argument type for this role.
     *
     * @return Argument type for this role.
     */
    getArgumentType(): ArgumentType{
        return ArgumentTypeStatic.getArguments("ARG" + this.f.toUpperCase());
    }
}