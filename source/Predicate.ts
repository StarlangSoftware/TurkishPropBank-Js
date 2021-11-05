import {RoleSet} from "./RoleSet";

export class Predicate {

    private lemma: string
    private roleSets: Array<RoleSet> = []

    /**
     * A constructor of {@link Predicate} class which takes lemma as input and initializes lemma with this input.
     * The constructor also initializes the roleSets array.
     *
     * @param lemma  Lemma of the predicate
     */
    constructor(lemma: string) {
        this.lemma = lemma
    }

    /**
     * Accessor for lemma.
     *
     * @return lemma.
     */
    getLemma(): string{
        return this.lemma
    }

    /**
     * The addRoleSet method takes a {@link RoleSet} as input and adds it to the roleSets {@link ArrayList}.
     *
     * @param roleSet  RoleSet to be added
     */
    addRoleSet(roleSet: RoleSet){
        this.roleSets.push(roleSet)
    }

    /**
     * The size method returns the size of the roleSets {@link Array}.
     *
     * @return the size of the roleSets {@link Array}.
     */
    size(): number{
        return this.roleSets.length
    }

    /**
     * The getRoleSet method returns the roleSet at the given index.
     *
     * @param index  Index of the roleSet
     * @return {@link RoleSet} at the given index.
     */
    getRoleSet(index: any): RoleSet{
        if (!isNaN(index)){
            return this.roleSets[index]
        } else {
            for (let roleSet of this.roleSets){
                if (roleSet.getId() == index){
                    return roleSet
                }
            }
        }
    }

}