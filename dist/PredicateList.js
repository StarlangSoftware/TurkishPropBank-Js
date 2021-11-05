(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Predicate", "fs", "nlptoolkit-xmlparser/dist/XmlDocument", "./RoleSet", "./Role"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PredicateList = void 0;
    const Predicate_1 = require("./Predicate");
    const fs = require("fs");
    const XmlDocument_1 = require("nlptoolkit-xmlparser/dist/XmlDocument");
    const RoleSet_1 = require("./RoleSet");
    const Role_1 = require("./Role");
    class PredicateList {
        constructor() {
            this.list = new Map();
            let data = fs.readFileSync("files-english.txt", 'utf8');
            let lines = data.split("\n");
            for (let line of lines) {
                let xmlDocument = new XmlDocument_1.XmlDocument("Frames/" + line);
                xmlDocument.parse();
                let frameSetNode = xmlDocument.getFirstChild();
                let predicateNode = frameSetNode.getFirstChild();
                while (predicateNode != undefined) {
                    if (predicateNode.hasAttributes()) {
                        let lemma = predicateNode.getAttributeValue("lemma");
                        let newPredicate = new Predicate_1.Predicate(lemma);
                        let roleSetNode = predicateNode.getFirstChild();
                        while (roleSetNode != undefined) {
                            if (roleSetNode.hasAttributes()) {
                                let id = roleSetNode.getAttributeValue("id");
                                let name = roleSetNode.getAttributeValue("name");
                                let newRoleSet = new RoleSet_1.RoleSet(id, name);
                                let rolesNode = roleSetNode.getFirstChild();
                                if (rolesNode != undefined) {
                                    let roleNode = rolesNode.getFirstChild();
                                    while (roleNode != undefined) {
                                        if (roleNode.hasAttributes()) {
                                            let description = roleNode.getAttributeValue("descr");
                                            let f = roleNode.getAttributeValue("f");
                                            let n = roleNode.getAttributeValue("n");
                                            newRoleSet.addRole(new Role_1.Role(description, f, n));
                                        }
                                        roleNode = roleNode.getNextSibling();
                                    }
                                }
                                newPredicate.addRoleSet(newRoleSet);
                            }
                            roleSetNode = roleSetNode.getNextSibling();
                        }
                        this.list.set(newPredicate.getLemma(), newPredicate);
                    }
                    predicateNode = predicateNode.getNextSibling();
                }
            }
        }
        /**
         * The size method returns the number of predicates inside the list.
         *
         * @return the size of the list {@link Map}.
         */
        size() {
            return this.list.size;
        }
        /**
         * getPredicate method returns the {@link Predicate} with the given lemma.
         *
         * @param lemma  Lemma of the searched predicate
         * @return {@link Predicate} which has the given lemma.
         */
        getPredicate(lemma) {
            return this.list.get(lemma);
        }
        /**
         * The method returns all lemma in the predicate list.
         * @return All lemma in the predicate list.
         */
        getLemmaList() {
            return this.list.keys();
        }
    }
    exports.PredicateList = PredicateList;
});
//# sourceMappingURL=PredicateList.js.map