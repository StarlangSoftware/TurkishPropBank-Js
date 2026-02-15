"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const ArgumentTypeStatic_1 = require("./ArgumentTypeStatic");
class Role {
    description;
    f;
    n;
    /**
     * A constructor of {@link Role} class which takes description, f, and n as inputs and initializes corresponding with these inputs.
     *
     * @param description  Description of the role
     * @param f  Argument Type of the role
     * @param n  Number of the role
     */
    constructor(description, f, n) {
        this.description = description;
        this.f = f;
        this.n = n;
    }
    /**
     * Accessor for description.
     *
     * @return description.
     */
    getDescription() {
        return this.description;
    }
    /**
     * Accessor for f.
     *
     * @return f.
     */
    getF() {
        return this.f;
    }
    /**
     * Accessor for n.
     *
     * @return n.
     */
    getN() {
        return this.n;
    }
    /**
     * Constructs and returns the argument type for this role.
     *
     * @return Argument type for this role.
     */
    getArgumentType() {
        return ArgumentTypeStatic_1.ArgumentTypeStatic.getArguments("ARG" + this.f.toUpperCase());
    }
}
exports.Role = Role;
//# sourceMappingURL=Role.js.map