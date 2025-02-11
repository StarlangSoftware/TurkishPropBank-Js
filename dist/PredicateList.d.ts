import { Predicate } from "./Predicate";
export declare class PredicateList {
    private list;
    /**
     * A constructor of {@link PredicateList} class which reads all predicate files inside the 'Frames' folder. For each
     * file inside that folder, the constructor creates a Predicate and puts in inside the list Map.
     */
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
