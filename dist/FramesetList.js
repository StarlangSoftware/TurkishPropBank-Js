(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Frameset", "nlptoolkit-xmlparser/dist/XmlDocument"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FramesetList = void 0;
    const Frameset_1 = require("./Frameset");
    const XmlDocument_1 = require("nlptoolkit-xmlparser/dist/XmlDocument");
    class FramesetList {
        /**
         * A constructor of {@link FramesetList} class which reads all frameset files inside the files.txt file. For each
         * filename inside that file, the constructor creates a Frameset and puts in inside the frames {@link Array}.
         */
        constructor() {
            this.frames = [];
            let xmlDocument = new XmlDocument_1.XmlDocument("turkish-propbank.xml");
            xmlDocument.parse();
            let framesNode = xmlDocument.getFirstChild();
            let frameSetNode = framesNode.getFirstChild();
            while (frameSetNode != undefined) {
                this.frames.push(new Frameset_1.Frameset(frameSetNode));
                frameSetNode = frameSetNode.getNextSibling();
            }
        }
        /**
         * frameExists method checks if there is a {@link Frameset} with the given synSet id.
         *
         * @param synSetId  Id of the searched {@link Frameset}
         * @return true if the {@link Frameset} with the given id exists, false otherwise.
         */
        frameExists(synSetId) {
            for (let f of this.frames) {
                if (f.getId() == synSetId) {
                    return true;
                }
            }
            return false;
        }
        /**
         * getFrameSet method returns the {@link Frameset} with the given synSet id.
         *
         * @param synSetId  Id of the searched {@link Frameset}
         * @return {@link Frameset} which has the given id.
         */
        getFrameSet(synSetId) {
            if (!isNaN(synSetId)) {
                return this.frames[synSetId];
            }
            else {
                for (let f of this.frames) {
                    if (f.getId() == synSetId) {
                        return f;
                    }
                }
            }
        }
        /**
         * The addFrameset method takes a {@link Frameset} as input and adds it to the frames {@link ArrayList}.
         *
         * @param frameset  Frameset to be added
         */
        addFrameset(frameset) {
            this.frames.push(frameset);
        }
        /**
         * The size method returns the size of the frames {@link Array}.
         *
         * @return the size of the frames {@link Array}.
         */
        size() {
            return this.frames.length;
        }
    }
    exports.FramesetList = FramesetList;
});
//# sourceMappingURL=FramesetList.js.map