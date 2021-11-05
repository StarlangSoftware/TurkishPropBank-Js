import * as assert from "assert";
import {FramesetList} from "../dist/FramesetList";

describe('FramesetListTest', function() {
    describe('FramesetListTest', function() {
        let framesetList = new FramesetList()
        it('testFrames', function() {
            assert.strictEqual(17691, framesetList.size())
        });
        it('testArgSize', function() {
            let count = 0
            for (let i = 0; i < framesetList.size(); i++){
                count += framesetList.getFrameSet(i).getFramesetArguments().length
            }
            assert.strictEqual(29759, count)
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
            assert.strictEqual(14668, nameList.get("ARG0"))
            assert.strictEqual(13126, nameList.get("ARG1"))
            assert.strictEqual(1886, nameList.get("ARG2"))
            assert.strictEqual(78, nameList.get("ARG3"))
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
            assert.strictEqual(481, functionList.get("com"))
            assert.strictEqual(14, functionList.get("ext"))
            assert.strictEqual(814, functionList.get("loc"))
            assert.strictEqual(198, functionList.get("rec"))
            assert.strictEqual(14, functionList.get("pat"))
            assert.strictEqual(10687, functionList.get("ppt"))
            assert.strictEqual(605, functionList.get("src"))
            assert.strictEqual(801, functionList.get("gol"))
            assert.strictEqual(156, functionList.get("tmp"))
            assert.strictEqual(14557, functionList.get("pag"))
            assert.strictEqual(1432, functionList.get("dir"))
        });
    });
});
