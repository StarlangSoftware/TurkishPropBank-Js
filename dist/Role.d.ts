import { ArgumentType } from "./ArgumentType";
export declare class Role {
    description: string;
    f: string;
    n: string;
    /**
     * A constructor of {@link Role} class which takes description, f, and n as inputs and initializes corresponding with these inputs.
     *
     * @param description  Description of the role
     * @param f  Argument Type of the role
     * @param n  Number of the role
     */
    constructor(description: string, f: string, n: string);
    /**
     * Accessor for description.
     *
     * @return description.
     */
    getDescription(): string;
    /**
     * Accessor for f.
     *
     * @return f.
     */
    getF(): string;
    /**
     * Accessor for n.
     *
     * @return n.
     */
    getN(): string;
    /**
     * Constructs and returns the argument type for this role.
     *
     * @return Argument type for this role.
     */
    getArgumentType(): ArgumentType;
}
