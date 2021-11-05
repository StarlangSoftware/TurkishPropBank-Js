import { Predicate } from "./Predicate";
export declare class PredicateList {
    private list;
    constructor();
    /**
     * The size method returns the number of predicates inside the list.
     *
     * @return the size of the list {@link Map}.
     */
    size(): number;
    /**
     * getPredicate method returns the {@link Predicate} with the given lemma.
     *
     * @param lemma  Lemma of the searched predicate
     * @return {@link Predicate} which has the given lemma.
     */
    getPredicate(lemma: string): Predicate;
    /**
     * The method returns all lemma in the predicate list.
     * @return All lemma in the predicate list.
     */
    getLemmaList(): IterableIterator<string>;
}
