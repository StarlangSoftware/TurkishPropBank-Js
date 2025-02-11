(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Argument"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArgumentList = void 0;
    const Argument_1 = require("./Argument");
    class ArgumentList {
        /**
         * Constructor of argument list from a string. The arguments for a word is a concatenated list of arguments
         * separated via '#' character.
         * @param argumentList String consisting of arguments separated with '#' character.
         */
        constructor(argumentList) {
            this.arguments = [];
            let items = argumentList.split("#");
            for (let item of items) {
                this.arguments.push(new Argument_1.Argument(item));
            }
        }
        /**
         * Overloaded toString method to convert an argument list to a string. Concatenates the string forms of all
         * arguments with '#' character.
         * @return String form of the argument list.
         */
        toString() {
            if (this.arguments.length === 0) {
                return "NONE";
            }
            else {
                let result = this.arguments[0].toString();
                for (let i = 1; i < this.arguments.length; i++) {
                    result += "#" + this.arguments[i].toString();
                }
                return result;
            }
        }
        /**
         * Replaces id's of predicates, which have previousId as synset id, with currentId.
         * @param previousId Previous id of the synset.
         * @param currentId Replacement id.
         */
        updateConnectedId(previousId, currentId) {
            for (let argument of this.arguments) {
                if (argument.getId() == previousId) {
                    argument.setId(currentId);
                }
            }
        }
        /**
         * Adds a predicate argument to the argument list of this word.
         * @param predicateId Synset id of this predicate.
         */
        addPredicate(predicateId) {
            if (this.arguments.length != 0 && this.arguments[0].getArgumentType() == "NONE") {
                this.arguments.shift();
            }
            this.arguments.push(new Argument_1.Argument("PREDICATE", predicateId));
        }
        /**
         * Removes the predicate with the given predicate id.
         */
        removePredicate() {
            let i = 0;
            for (let argument of this.arguments) {
                if (argument.getArgumentType() == "PREDICATE") {
                    this.arguments.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        /**
         * Checks if one of the arguments is a predicate.
         * @return True, if one of the arguments is predicate; false otherwise.
         */
        containsPredicate() {
            for (let argument of this.arguments) {
                if (argument.getArgumentType() == "PREDICATE") {
                    return true;
                }
            }
            return false;
        }
        /**
         * Checks if one of the arguments is a predicate with the given id.
         * @param predicateId Synset id to check.
         * @return True, if one of the arguments is predicate; false otherwise.
         */
        containsPredicateWithId(predicateId) {
            for (let argument of this.arguments) {
                if (argument.getArgumentType() == "PREDICATE" && argument.getId() == predicateId) {
                    return true;
                }
            }
            return false;
        }
        /**
         * Returns the arguments as an array list of strings.
         * @return Arguments as an array list of strings.
         */
        getArguments() {
            let result = [];
            for (let argument of this.arguments) {
                result.push(argument.toString());
            }
            return result;
        }
        /**
         * Checks if the given argument with the given type and id exists or not.
         * @param argumentType Type of the argument to search for.
         * @param id Id of the argument to search for.
         * @return True if the argument exists, false otherwise.
         */
        containsArgument(argumentType, id) {
            for (let argument of this.arguments) {
                if (argument.getArgumentType() == argumentType && argument.getId() == id) {
                    return true;
                }
            }
            return false;
        }
    }
    exports.ArgumentList = ArgumentList;
});
//# sourceMappingURL=ArgumentList.js.map