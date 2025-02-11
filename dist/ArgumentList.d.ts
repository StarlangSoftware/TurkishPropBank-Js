export declare class ArgumentList {
    private arguments;
    /**
     * Constructor of argument list from a string. The arguments for a word is a concatenated list of arguments
     * separated via '#' character.
     * @param argumentList String consisting of arguments separated with '#' character.
     */
    constructor(argumentList: string);
    /**
     * Overloaded toString method to convert an argument list to a string. Concatenates the string forms of all
     * arguments with '#' character.
     * @return String form of the argument list.
     */
    toString(): string;
    /**
     * Replaces id's of predicates, which have previousId as synset id, with currentId.
     * @param previousId Previous id of the synset.
     * @param currentId Replacement id.
     */
    updateConnectedId(previousId: string, currentId: string): void;
    /**
     * Adds a predicate argument to the argument list of this word.
     * @param predicateId Synset id of this predicate.
     */
    addPredicate(predicateId: string): void;
    /**
     * Removes the predicate with the given predicate id.
     */
    removePredicate(): void;
    /**
     * Checks if one of the arguments is a predicate.
     * @return True, if one of the arguments is predicate; false otherwise.
     */
    containsPredicate(): boolean;
    /**
     * Checks if one of the arguments is a predicate with the given id.
     * @param predicateId Synset id to check.
     * @return True, if one of the arguments is predicate; false otherwise.
     */
    containsPredicateWithId(predicateId: string): boolean;
    /**
     * Returns the arguments as an array list of strings.
     * @return Arguments as an array list of strings.
     */
    getArguments(): Array<string>;
    /**
     * Checks if the given argument with the given type and id exists or not.
     * @param argumentType Type of the argument to search for.
     * @param id Id of the argument to search for.
     * @return True if the argument exists, false otherwise.
     */
    containsArgument(argumentType: string, id: string): boolean;
}
