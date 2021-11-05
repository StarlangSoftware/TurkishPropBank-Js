import { RoleSet } from "./RoleSet";
export declare class Predicate {
    private lemma;
    private roleSets;
    /**
     * A constructor of {@link Predicate} class which takes lemma as input and initializes lemma with this input.
     * The constructor also initializes the roleSets array.
     *
     * @param lemma  Lemma of the predicate
     */
    constructor(lemma: string);
    /**
     * Accessor for lemma.
     *
     * @return lemma.
     */
    getLemma(): string;
    /**
     * The addRoleSet method takes a {@link RoleSet} as input and adds it to the roleSets {@link ArrayList}.
     *
     * @param roleSet  RoleSet to be added
     */
    addRoleSet(roleSet: RoleSet): void;
    /**
     * The size method returns the size of the roleSets {@link Array}.
     *
     * @return the size of the roleSets {@link Array}.
     */
    size(): number;
    /**
     * The getRoleSet method returns the roleSet at the given index.
     *
     * @param index  Index of the roleSet
     * @return {@link RoleSet} at the given index.
     */
    getRoleSet(index: any): RoleSet;
}
