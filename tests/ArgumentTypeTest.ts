import * as assert from "assert";
import {ArgumentType} from "../dist/ArgumentType";
import {ArgumentTypeStatic} from "../dist/ArgumentTypeStatic";

describe('ArgumentTypeTest', function() {
    describe('ArgumentTypeTest', function() {
        it('testArgumentType', function() {
            assert.strictEqual(ArgumentTypeStatic.getArguments("arg0"), ArgumentType.ARG0);
            assert.strictEqual(ArgumentTypeStatic.getArguments("argmdis"), ArgumentType.ARGMDIS);
            assert.strictEqual(ArgumentTypeStatic.getArguments("Arg1"), ArgumentType.ARG1);
            assert.strictEqual(ArgumentTypeStatic.getArguments("Argmdir"), ArgumentType.ARGMDIR);
        });
    });
});
