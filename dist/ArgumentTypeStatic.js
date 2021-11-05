(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ArgumentType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArgumentTypeStatic = void 0;
    const ArgumentType_1 = require("./ArgumentType");
    class ArgumentTypeStatic {
        /**
         * The getArguments method takes an argumentsType string and returns the {@link ArgumentType} form of it.
         *
         * @param argumentsType  Type of the argument in string form
         * @return Type of the argument in {@link ArgumentType} form
         */
        static getArguments(argumentsType) {
            switch (argumentsType.toUpperCase()) {
                case "ARG0":
                    return ArgumentType_1.ArgumentType.ARG0;
                case "ARG1":
                    return ArgumentType_1.ArgumentType.ARG1;
                case "ARG2":
                    return ArgumentType_1.ArgumentType.ARG2;
                case "ARG3":
                    return ArgumentType_1.ArgumentType.ARG3;
                case "ARG4":
                    return ArgumentType_1.ArgumentType.ARG4;
                case "ARG5":
                    return ArgumentType_1.ArgumentType.ARG5;
                case "ARGMADV":
                    return ArgumentType_1.ArgumentType.ARGMADV;
                case "ARGMCAU":
                    return ArgumentType_1.ArgumentType.ARGMCAU;
                case "ARGMDIR":
                    return ArgumentType_1.ArgumentType.ARGMDIR;
                case "ARGMDIS":
                    return ArgumentType_1.ArgumentType.ARGMDIS;
                case "ARGMEXT":
                    return ArgumentType_1.ArgumentType.ARGMEXT;
                case "ARGMLOC":
                    return ArgumentType_1.ArgumentType.ARGMLOC;
                case "ARGMMNR":
                    return ArgumentType_1.ArgumentType.ARGMMNR;
                case "ARGMTMP":
                    return ArgumentType_1.ArgumentType.ARGMTMP;
                case "ARGMNONE":
                    return ArgumentType_1.ArgumentType.ARGMNONE;
                case "ARGMPNC":
                    return ArgumentType_1.ArgumentType.ARGMPNC;
                case "PREDICATE":
                    return ArgumentType_1.ArgumentType.PREDICATE;
                default:
                    return ArgumentType_1.ArgumentType.NONE;
            }
        }
        /**
         * The getPropbankType method takes an argumentType in {@link ArgumentType} form and returns the string form of it.
         *
         * @param argumentType  Type of the argument in {@link ArgumentType} form
         * @return Type of the argument in string form
         */
        static getPropBankType(argumentType) {
            if (argumentType == undefined)
                return "NONE";
            switch (argumentType) {
                case ArgumentType_1.ArgumentType.ARG0:
                    return "ARG0";
                case ArgumentType_1.ArgumentType.ARG1:
                    return "ARG1";
                case ArgumentType_1.ArgumentType.ARG2:
                    return "ARG2";
                case ArgumentType_1.ArgumentType.ARG3:
                    return "ARG3";
                case ArgumentType_1.ArgumentType.ARG4:
                    return "ARG4";
                case ArgumentType_1.ArgumentType.ARG5:
                    return "ARG5";
                case ArgumentType_1.ArgumentType.ARGMADV:
                    return "ARGMADV";
                case ArgumentType_1.ArgumentType.ARGMCAU:
                    return "ARGMCAU";
                case ArgumentType_1.ArgumentType.ARGMDIR:
                    return "ARGMDIR";
                case ArgumentType_1.ArgumentType.ARGMDIS:
                    return "ARGMDIS";
                case ArgumentType_1.ArgumentType.ARGMEXT:
                    return "ARGMEXT";
                case ArgumentType_1.ArgumentType.ARGMLOC:
                    return "ARGMLOC";
                case ArgumentType_1.ArgumentType.ARGMMNR:
                    return "ARGMMNR";
                case ArgumentType_1.ArgumentType.ARGMTMP:
                    return "ARGMTMP";
                case ArgumentType_1.ArgumentType.ARGMNONE:
                    return "ARGMNONE";
                case ArgumentType_1.ArgumentType.ARGMPNC:
                    return "ARGMPNC";
                case ArgumentType_1.ArgumentType.PREDICATE:
                    return "PREDICATE";
                default:
                    return "NONE";
            }
        }
    }
    exports.ArgumentTypeStatic = ArgumentTypeStatic;
});
//# sourceMappingURL=ArgumentTypeStatic.js.map