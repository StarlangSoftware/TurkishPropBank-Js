var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Argument", "./ArgumentType", "./ArgumentTypeStatic", "./Frameset", "./FramesetArgument", "./FramesetList", "./Predicate", "./PredicateList", "./Role", "./RoleSet", "./ArgumentList"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./Argument"), exports);
    __exportStar(require("./ArgumentType"), exports);
    __exportStar(require("./ArgumentTypeStatic"), exports);
    __exportStar(require("./Frameset"), exports);
    __exportStar(require("./FramesetArgument"), exports);
    __exportStar(require("./FramesetList"), exports);
    __exportStar(require("./Predicate"), exports);
    __exportStar(require("./PredicateList"), exports);
    __exportStar(require("./Role"), exports);
    __exportStar(require("./RoleSet"), exports);
    __exportStar(require("./ArgumentList"), exports);
});
//# sourceMappingURL=index.js.map