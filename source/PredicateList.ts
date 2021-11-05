import {Predicate} from "./Predicate";
import * as fs from "fs";
import {XmlDocument} from "nlptoolkit-xmlparser/dist/XmlDocument";
import {RoleSet} from "./RoleSet";
import {Role} from "./Role";

export class PredicateList {

    private list: Map<string, Predicate> = new Map<string, Predicate>()

    constructor() {
        let data = fs.readFileSync("files-english.txt", 'utf8')
        let lines = data.split("\n")
        for (let line of lines){
            let xmlDocument = new XmlDocument("Frames/" + line)
            xmlDocument.parse()
            let frameSetNode = xmlDocument.getFirstChild()
            let predicateNode = frameSetNode.getFirstChild()
            while (predicateNode != undefined){
                if (predicateNode.hasAttributes()){
                    let lemma = predicateNode.getAttributeValue("lemma")
                    let newPredicate = new Predicate(lemma)
                    let roleSetNode = predicateNode.getFirstChild()
                    while (roleSetNode != undefined){
                        if (roleSetNode.hasAttributes()){
                            let id = roleSetNode.getAttributeValue("id")
                            let name = roleSetNode.getAttributeValue("name")
                            let newRoleSet = new RoleSet(id, name)
                            let rolesNode = roleSetNode.getFirstChild()
                            if (rolesNode != undefined){
                                let roleNode = rolesNode.getFirstChild()
                                while (roleNode != undefined){
                                    if (roleNode.hasAttributes()){
                                        let description = roleNode.getAttributeValue("descr")
                                        let f = roleNode.getAttributeValue("f")
                                        let n = roleNode.getAttributeValue("n")
                                        newRoleSet.addRole(new Role(description, f, n))
                                    }
                                    roleNode = roleNode.getNextSibling()
                                }
                            }
                            newPredicate.addRoleSet(newRoleSet)
                        }
                        roleSetNode = roleSetNode.getNextSibling()
                    }
                    this.list.set(newPredicate.getLemma(), newPredicate)
                }
                predicateNode = predicateNode.getNextSibling()
            }
        }
    }

    /**
     * The size method returns the number of predicates inside the list.
     *
     * @return the size of the list {@link Map}.
     */
    size(): number{
        return this.list.size
    }

    /**
     * getPredicate method returns the {@link Predicate} with the given lemma.
     *
     * @param lemma  Lemma of the searched predicate
     * @return {@link Predicate} which has the given lemma.
     */
    getPredicate(lemma: string){
        return this.list.get(lemma)
    }

    /**
     * The method returns all lemma in the predicate list.
     * @return All lemma in the predicate list.
     */
    getLemmaList(): IterableIterator<string>{
        return this.list.keys()
    }
}