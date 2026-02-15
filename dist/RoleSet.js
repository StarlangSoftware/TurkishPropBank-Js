"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSet = void 0;
class RoleSet {
    id;
    name;
    roles = [];
    /**
     * A constructor of {@link RoleSet} class which takes id and name as inputs and initializes corresponding attributes
     * with these inputs.
     *
     * @param id  Id of the roleSet
     * @param name Name of the roleSet
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    /**
     * Accessor for id.
     *
     * @return id.
     */
    getId() {
        return this.id;
    }
    /**
     * Accessor for name.
     *
     * @return name.
     */
    getName() {
        return this.name;
    }
    /**
     * The addRole method takes a {@link Role} as input and adds it to the roles {@link ArrayList}.
     *
     * @param role  Role to be added
     */
    addRole(role) {
        this.roles.push(role);
    }
    /**
     * The getRole method returns the role at the given index.
     *
     * @param index  Index of the role
     * @return {@link Role} at the given index.
     */
    getRole(index) {
        return this.roles[index];
    }
    /**
     * Finds and returns the role with the given argument number n. For example, if n == 0, the method returns
     * the argument ARG0.
     * @param n Argument number
     * @return The role with the given argument number n.
     */
    getRoleWithArgument(n) {
        for (let role of this.roles) {
            if (role.getN() == n) {
                return role;
            }
        }
    }
    /**
     * The size method returns the size of the roles {@link Array}.
     *
     * @return the size of the roles {@link Array}.
     */
    size() {
        return this.roles.length;
    }
}
exports.RoleSet = RoleSet;
//# sourceMappingURL=RoleSet.js.map