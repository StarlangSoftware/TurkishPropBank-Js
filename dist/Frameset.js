(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./FramesetArgument", "nlptoolkit-xmlparser/dist/XmlDocument", "./ArgumentTypeStatic"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Frameset = void 0;
    const FramesetArgument_1 = require("./FramesetArgument");
    const XmlDocument_1 = require("nlptoolkit-xmlparser/dist/XmlDocument");
    const ArgumentTypeStatic_1 = require("./ArgumentTypeStatic");
    class Frameset {
        /**
         * Another constructor of {@link Frameset} class which takes XmlDocument as input and reads the frameset
         *
         * @param doc  inputStream to read frameset
         */
        constructor(doc) {
            this.framesetArguments = [];
            if (doc instanceof XmlDocument_1.XmlDocument) {
                doc.parse();
                let framesetNode = doc.getFirstChild();
                this.id = framesetNode.getAttributeValue("id");
                let argument = framesetNode.getFirstChild();
                while (argument != undefined) {
                    let framesetArgument = new FramesetArgument_1.FramesetArgument(argument.getAttributeValue("name"), argument.getPcData(), argument.getAttributeValue("function"));
                    this.framesetArguments.push(framesetArgument);
                    argument = argument.getNextSibling();
                }
            }
            else {
                this.id = doc;
            }
        }
        /**
         * containsArgument method which checks if there is an {@link Argument} of the given argumentType.
         *
         * @param argumentType  ArgumentType of the searched {@link Argument}
         * @return true if the {@link Argument} with the given argumentType exists, false otherwise.
         */
        containsArgument(argumentType) {
            for (let framesetArgument of this.framesetArguments) {
                if (ArgumentTypeStatic_1.ArgumentTypeStatic.getArguments(framesetArgument.getArgumentType()) == argumentType) {
                    return true;
                }
            }
            return false;
        }
        /**
         * The addArgument method takes a type and a definition of a {@link FramesetArgument} as input, then it creates a
         * new FramesetArgument from these inputs and adds it to the framesetArguments {@link Array}.
         *
         * @param type  Type of the new {@link FramesetArgument}
         * @param definition Definition of the new {@link FramesetArgument}
         * @param _function Function of the new {@link FramesetArgument}
         */
        addArgument(type, definition, _function) {
            let check = false;
            for (let a of this.framesetArguments) {
                if (a.getArgumentType() == type) {
                    a.setDefinition(definition);
                    check = true;
                    break;
                }
            }
            if (!check) {
                let arg = new FramesetArgument_1.FramesetArgument(type, definition, _function);
                this.framesetArguments.push(arg);
            }
        }
        /**
         * The deleteArgument method takes a type and a definition of a {@link FramesetArgument} as input, then it searches for the FramesetArgument with these type and
         * definition, and if it finds removes it from the framesetArguments {@link ArrayList}.
         *
         * @param type  Type of the to be deleted {@link FramesetArgument}
         * @param definition Definition of the to be deleted {@link FramesetArgument}
         */
        deleteArgument(type, definition) {
            let index = 0;
            for (let a of this.framesetArguments) {
                if (a.getArgumentType() == type && a.getDefinition() == definition) {
                    this.framesetArguments.splice(index, 1);
                    break;
                }
                index++;
            }
        }
        /**
         * Accessor for framesetArguments.
         *
         * @return framesetArguments.
         */
        getFramesetArguments() {
            return this.framesetArguments;
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
         * Mutator for id.
         *
         * @param id to set.
         */
        setId(id) {
            this.id = id;
        }
    }
    exports.Frameset = Frameset;
});
//# sourceMappingURL=Frameset.js.map