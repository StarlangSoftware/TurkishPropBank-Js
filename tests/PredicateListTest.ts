import * as assert from "assert";
import {PredicateList} from "../dist/PredicateList";

describe('PredicateListTest', function() {
    describe('PredicateListTest', function() {
        let predicateList = new PredicateList()
        it('testPredicateSize', function() {
            assert.strictEqual(8656, predicateList.size())
        });
        it('testRoleSetSize', function() {
            let count = 0
            for (let lemma of predicateList.getLemmaList()){
                count += predicateList.getPredicate(lemma).size()
            }
            assert.strictEqual(10685, count)
        });
        it('testRoleSize', function() {
            let count = 0
            for (let lemma of predicateList.getLemmaList()){
                for (let i = 0; i < predicateList.getPredicate(lemma).size(); i++){
                    count += predicateList.getPredicate(lemma).getRoleSet(i).size()
                }
            }
            assert.strictEqual(27080, count)
        });
        it('testFunction', function() {
            let functionList = new Map()
            for (let lemma of predicateList.getLemmaList()){
                for (let i = 0; i < predicateList.getPredicate(lemma).size(); i++){
                    for (let j = 0; j < predicateList.getPredicate(lemma).getRoleSet(i).size(); j++){
                        let _function = predicateList.getPredicate(lemma).getRoleSet(i).getRole(j).getF()
                        if (functionList.has(_function)){
                            functionList.set(_function, functionList.get(_function) + 1)
                        } else {
                            functionList.set(_function, 1)
                        }
                    }
                }
            }
            assert.strictEqual(197, functionList.get("com"))
            assert.strictEqual(292, functionList.get("ext"))
            assert.strictEqual(580, functionList.get("loc"))
            assert.strictEqual(1104, functionList.get("prd"))
            assert.strictEqual(2395, functionList.get("gol"))
            assert.strictEqual(19, functionList.get("adj"))
            assert.strictEqual(980, functionList.get("dir"))
            assert.strictEqual(118, functionList.get("prp"))
            assert.strictEqual(1007, functionList.get("mnr"))
            assert.strictEqual(4, functionList.get("rec"))
            assert.strictEqual(679, functionList.get("vsp"))
            assert.strictEqual(14, functionList.get("adv"))
            assert.strictEqual(10282, functionList.get("ppt"))
            assert.strictEqual(267, functionList.get("cau"))
            assert.strictEqual(37, functionList.get("tmp"))
            assert.strictEqual(9105, functionList.get("pag"))
        });
        it('testN', function() {
            let nList = new Map()
            for (let lemma of predicateList.getLemmaList()){
                for (let i = 0; i < predicateList.getPredicate(lemma).size(); i++){
                    for (let j = 0; j < predicateList.getPredicate(lemma).getRoleSet(i).size(); j++){
                        let n = predicateList.getPredicate(lemma).getRoleSet(i).getRole(j).getN()
                        if (nList.has(n)){
                            nList.set(n, nList.get(n) + 1)
                        } else {
                            nList.set(n, 1)
                        }
                    }
                }
            }
            assert.strictEqual(8906, nList.get("0"))
            assert.strictEqual(10375, nList.get("1"))
            assert.strictEqual(5934, nList.get("2"))
            assert.strictEqual(1313, nList.get("3"))
            assert.strictEqual(417, nList.get("4"))
            assert.strictEqual(57, nList.get("5"))
            assert.strictEqual(6, nList.get("6"))
            assert.strictEqual(72, nList.get("m"))
        });
    });
});