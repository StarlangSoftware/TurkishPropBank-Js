import * as assert from "assert";
import {FramesetList} from "../dist/FramesetList";

describe('FramesetListTest', function() {
    describe('FramesetListTest', function() {
        let framesetList = new FramesetList()
        it('testFrames', function() {
            assert.strictEqual(17531, framesetList.size())
        });
        it('testArgSize', function() {
            let count = 0
            for (let i = 0; i < framesetList.size(); i++){
                count += framesetList.getFrameSet(i).getFramesetArguments().length
            }
            assert.strictEqual(29473, count)
        });
        it('testCase', function() {
            let caseList = new Map()
            for (let i = 0; i < framesetList.size(); i++){
                for (let argument of framesetList.getFrameSet(i).getFramesetArguments()){
                    if (argument.getGrammaticalCase().includes("abl")){
                        if (caseList.has("abl")){
                            caseList.set("abl", caseList.get("abl") + 1);
                        } else {
                            caseList.set("abl", 1)
                        }
                    }
                    if (argument.getGrammaticalCase().includes("acc")){
                        if (caseList.has("acc")){
                            caseList.set("acc", caseList.get("acc") + 1);
                        } else {
                            caseList.set("acc", 1)
                        }
                    }
                    if (argument.getGrammaticalCase().includes("dat")){
                        if (caseList.has("dat")){
                            caseList.set("dat", caseList.get("dat") + 1);
                        } else {
                            caseList.set("dat", 1)
                        }
                    }
                    if (argument.getGrammaticalCase().includes("gen")){
                        if (caseList.has("gen")){
                            caseList.set("gen", caseList.get("gen") + 1);
                        } else {
                            caseList.set("gen", 1)
                        }
                    }
                    if (argument.getGrammaticalCase().includes("ins")){
                        if (caseList.has("ins")){
                            caseList.set("ins", caseList.get("ins") + 1);
                        } else {
                            caseList.set("ins", 1)
                        }
                    }
                    if (argument.getGrammaticalCase().includes("loc")){
                        if (caseList.has("loc")){
                            caseList.set("loc", caseList.get("loc") + 1);
                        } else {
                            caseList.set("loc", 1)
                        }
                    }
                    if (argument.getGrammaticalCase().includes("nom")){
                        if (caseList.has("nom")){
                            caseList.set("nom", caseList.get("nom") + 1);
                        } else {
                            caseList.set("nom", 1)
                        }
                    }
                }
            }
            assert.strictEqual(418, caseList.get("abl"))
            assert.strictEqual(4633, caseList.get("acc"))
            assert.strictEqual(2402, caseList.get("dat"))
            assert.strictEqual(870, caseList.get("gen"))
            assert.strictEqual(451, caseList.get("ins"))
            assert.strictEqual(666, caseList.get("loc"))
            assert.strictEqual(2049, caseList.get("nom"))
        });
        it('testArgName', function() {
            let nameList = new Map()
            for (let i = 0; i < framesetList.size(); i++){
                for (let argument of framesetList.getFrameSet(i).getFramesetArguments()){
                    if (nameList.has(argument.getArgumentType())){
                        nameList.set(argument.getArgumentType(), nameList.get(argument.getArgumentType()) + 1);
                    } else {
                        nameList.set(argument.getArgumentType(), 1)
                    }
                }
            }
            assert.strictEqual(14535, nameList.get("ARG0"))
            assert.strictEqual(12996, nameList.get("ARG1"))
            assert.strictEqual(1865, nameList.get("ARG2"))
            assert.strictEqual(76, nameList.get("ARG3"))
            assert.strictEqual(1, nameList.get("ARG4"))
        });
        it('testArgFunction', function() {
            let functionList = new Map()
            for (let i = 0; i < framesetList.size(); i++){
                for (let argument of framesetList.getFrameSet(i).getFramesetArguments()){
                    if (functionList.has(argument.getFunction())){
                        functionList.set(argument.getFunction(), functionList.get(argument.getFunction()) + 1)
                    } else {
                        functionList.set(argument.getFunction(), 1)
                    }
                }
            }
            assert.strictEqual(475, functionList.get("com"))
            assert.strictEqual(14, functionList.get("ext"))
            assert.strictEqual(808, functionList.get("loc"))
            assert.strictEqual(195, functionList.get("rec"))
            assert.strictEqual(13, functionList.get("pat"))
            assert.strictEqual(10579, functionList.get("ppt"))
            assert.strictEqual(597, functionList.get("src"))
            assert.strictEqual(794, functionList.get("gol"))
            assert.strictEqual(156, functionList.get("tmp"))
            assert.strictEqual(14425, functionList.get("pag"))
            assert.strictEqual(1417, functionList.get("dir"))
        });
    });
});
