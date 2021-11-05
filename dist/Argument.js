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
    exports.Argument = void 0;
    class Argument {
        /**
         * A constructor of {@link Argument} class which takes argument string which is in the form of argumentType$id
         * and parses this string into argumentType and id. If the argument string does not contain '$' then the
         * constructor return a NONE type argument.
         *
         * @param argument  Argument string containing the argumentType and id
         * @param id  Id of the argument
         */
        constructor(argument, id) {
            if (id == undefined) {
                if (argument.includes("$")) {
                    this.argumentType = argument.substring(0, argument.indexOf("$"));
                    this.id = argument.substring(argument.indexOf("$") + 1);
                }
                else {
                    this.argumentType = "NONE";
                }
            }
            else {
                this.argumentType = argument;
                this.id = id;
            }
        }
        /**
         * Accessor for argumentType.
         *
         * @return argumentType.
         */
        getArgumentType() {
            return this.argumentType;
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
         * toString converts an {@link Argument} to a string. If the argumentType is "NONE" returns only "NONE", otherwise
         * it returns argument string which is in the form of argumentType$id
         *
         * @return string form of argument
         */
        toString() {
            if (this.argumentType == "NONE") {
                return this.argumentType;
            }
            else {
                return this.argumentType + "$" + this.id;
            }
        }
    }
    exports.Argument = Argument;
});
//# sourceMappingURL=Argument.js.map