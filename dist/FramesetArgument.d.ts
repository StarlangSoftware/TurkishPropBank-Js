export declare class FramesetArgument {
    argumentType: string;
    _function: string;
    definition: string;
    /**
     * A constructor of {@link FramesetArgument} class which takes argumentType and definition as input and initializes corresponding attributes
     *
     * @param argumentType  ArgumentType of the frameset argument
     * @param definition  Definition of the frameset argument
     * @param _function  Function of the frameset argument
     */
    constructor(argumentType: string, definition: string, _function: string);
    /**
     * Accessor for argumentType.
     *
     * @return argumentType.
     */
    getArgumentType(): string;
    /**
     * Accessor for function.
     *
     * @return function.
     */
    getFunction(): string;
    /**
     * Accessor for definition.
     *
     * @return definition.
     */
    getDefinition(): string;
    /**
     * Mutator for definition.
     *
     * @param definition to set.
     */
    setDefinition(definition: string): void;
    /**
     * Mutator for function.
     *
     * @param _function to set.
     */
    setFunction(_function: string): void;
    /**
     * toString converts an {@link FramesetArgument} to a string. It returns argument string which is in the form of
     * argumentType:definition
     *
     * @return string form of frameset argument
     */
    toString(): string;
}
