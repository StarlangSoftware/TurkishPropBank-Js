export declare class Argument {
    private readonly argumentType;
    private _id;
    /**
     * A constructor of {@link Argument} class which takes argument string which is in the form of argumentType$id
     * and parses this string into argumentType and id. If the argument string does not contain '$' then the
     * constructor return a NONE type argument.
     *
     * @param argument  Argument string containing the argumentType and id
     * @param id  Id of the argument
     */
    constructor(argument: string, id?: string);
    /**
     * Accessor for argumentType.
     *
     * @return argumentType.
     */
    getArgumentType(): string;
    /**
     * Accessor for id.
     *
     * @return _id.
     */
    getId(): string;
    /**
     * toString converts an {@link Argument} to a string. If the argumentType is "NONE" returns only "NONE", otherwise
     * it returns argument string which is in the form of argumentType$id
     *
     * @return string form of argument
     */
    toString(): string;
    /**
     * Setter for the id
     * @param id New id of the argument
     */
    setId(id: string): void;
}
