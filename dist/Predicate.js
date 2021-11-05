(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Predicate = void 0;
    class Predicate {
        /**
         * A constructor of {@link Predicate} class which takes lemma as input and initializes lemma with this input.
         * The constructor also initializes the roleSets array.
         *
         * @param lemma  Lemma of the predicate
         */
        constructor(lemma) {
            this.roleSets = [];
            this.lemma = lemma;
        }
        /**
         * Accessor for lemma.
         *
         * @return lemma.
         */
        getLemma() {
            return this.lemma;
        }
        /**
         * The addRoleSet method takes a {@link RoleSet} as input and adds it to the roleSets {@link ArrayList}.
         *
         * @param roleSet  RoleSet to be added
         */
        addRoleSet(roleSet) {
            this.roleSets.push(roleSet);
        }
        /**
         * The size method returns the size of the roleSets {@link Array}.
         *
         * @return the size of the roleSets {@link Array}.
         */
        size() {
            return this.roleSets.length;
        }
        /**
         * The getRoleSet method returns the roleSet at the given index.
         *
         * @param index  Index of the roleSet
         * @return {@link RoleSet} at the given index.
         */
        getRoleSet(index) {
            if (!isNaN(index)) {
                return this.roleSets[index];
            }
            else {
                for (let roleSet of this.roleSets) {
                    if (roleSet.getId() == index) {
                        return roleSet;
                    }
                }
            }
        }
    }
    exports.Predicate = Predicate;
});
//# sourceMappingURL=Predicate.js.map