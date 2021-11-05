import {Role} from "./Role";

export class RoleSet {

    id: string
    name: string
    roles: Array<Role> = []

    /**
     * A constructor of {@link RoleSet} class which takes id and name as inputs and initializes corresponding attributes
     * with these inputs.
     *
     * @param id  Id of the roleSet
     * @param name Name of the roleSet
     */
    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }

    /**
     * Accessor for id.
     *
     * @return id.
     */
    getId(): string{
        return this.id
    }

    /**
     * Accessor for name.
     *
     * @return name.
     */
    getName(): string{
        return this.name
    }

    /**
     * The addRole method takes a {@link Role} as input and adds it to the roles {@link ArrayList}.
     *
     * @param role  Role to be added
     */
    addRole(role: Role){
        this.roles.push(role)
    }

    /**
     * The getRole method returns the role at the given index.
     *
     * @param index  Index of the role
     * @return {@link Role} at the given index.
     */
    getRole(index: number): Role{
        return this.roles[index]
    }

    /**
     * Finds and returns the role with the given argument number n. For example, if n == 0, the method returns
     * the argument ARG0.
     * @param n Argument number
     * @return The role with the given argument number n.
     */
    getRoleWithArgument(n: string): Role{
        for (let role of this.roles){
            if (role.getN() == n){
                return role;
            }
        }
    }

    /**
     * The size method returns the size of the roles {@link Array}.
     *
     * @return the size of the roles {@link Array}.
     */
    size(): number{
        return this.roles.length
    }
}