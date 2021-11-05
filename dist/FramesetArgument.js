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
    exports.FramesetArgument = void 0;
    class FramesetArgument {
        /**
         * A constructor of {@link FramesetArgument} class which takes argumentType and definition as input and initializes corresponding attributes
         *
         * @param argumentType  ArgumentType of the frameset argument
         * @param definition  Definition of the frameset argument
         * @param _function  Function of the frameset argument
         */
        constructor(argumentType, definition, _function) {
            this.argumentType = argumentType;
            this.definition = definition;
            this._function = _function;
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
         * Accessor for function.
         *
         * @return function.
         */
        getFunction() {
            return this._function;
        }
        /**
         * Accessor for definition.
         *
         * @return definition.
         */
        getDefinition() {
            return this.definition;
        }
        /**
         * Mutator for definition.
         *
         * @param definition to set.
         */
        setDefinition(definition) {
            this.definition = definition;
        }
        /**
         * Mutator for function.
         *
         * @param _function to set.
         */
        setFunction(_function) {
            this._function = _function;
        }
        /**
         * toString converts an {@link FramesetArgument} to a string. It returns argument string which is in the form of
         * argumentType:definition
         *
         * @return string form of frameset argument
         */
        toString() {
            return this.argumentType + ":" + this.definition;
        }
    }
    exports.FramesetArgument = FramesetArgument;
});
//# sourceMappingURL=FramesetArgument.js.map