import {ArgumentType} from "./ArgumentType";

export class ArgumentTypeStatic {

    /**
     * The getArguments method takes an argumentsType string and returns the {@link ArgumentType} form of it.
     *
     * @param argumentsType  Type of the argument in string form
     * @return Type of the argument in {@link ArgumentType} form
     */
    static getArguments(argumentsType: string): ArgumentType{
        switch (argumentsType.toUpperCase())
        {
            case "ARG0":
                return ArgumentType.ARG0;
            case "ARG1":
                return ArgumentType.ARG1;
            case "ARG2":
                return ArgumentType.ARG2;
            case "ARG3":
                return ArgumentType.ARG3;
            case "ARG4":
                return ArgumentType.ARG4;
            case "ARG5":
                return ArgumentType.ARG5;
            case "ARGMADV":
                return ArgumentType.ARGMADV;
            case "ARGMCAU":
                return ArgumentType.ARGMCAU;
            case "ARGMDIR":
                return ArgumentType.ARGMDIR;
            case "ARGMDIS":
                return ArgumentType.ARGMDIS;
            case "ARGMEXT":
                return ArgumentType.ARGMEXT;
            case "ARGMLOC":
                return ArgumentType.ARGMLOC;
            case "ARGMMNR":
                return ArgumentType.ARGMMNR;
            case "ARGMTMP":
                return ArgumentType.ARGMTMP;
            case "ARGMNONE":
                return ArgumentType.ARGMNONE;
            case "ARGMPNC":
                return ArgumentType.ARGMPNC;
            case "PREDICATE":
                return ArgumentType.PREDICATE;
            default:
                return ArgumentType.NONE;
        }
    }

    /**
     * The getPropbankType method takes an argumentType in {@link ArgumentType} form and returns the string form of it.
     *
     * @param argumentType  Type of the argument in {@link ArgumentType} form
     * @return Type of the argument in string form
     */
    static getPropBankType(argumentType: ArgumentType): string{
        if (argumentType == undefined)
            return "NONE"
        switch (argumentType){
            case ArgumentType.ARG0:
                return "ARG0";
            case ArgumentType.ARG1:
                return "ARG1";
            case ArgumentType.ARG2:
                return "ARG2";
            case ArgumentType.ARG3:
                return "ARG3";
            case ArgumentType.ARG4:
                return "ARG4";
            case ArgumentType.ARG5:
                return "ARG5";
            case ArgumentType.ARGMADV:
                return "ARGMADV";
            case ArgumentType.ARGMCAU:
                return "ARGMCAU";
            case ArgumentType.ARGMDIR:
                return "ARGMDIR";
            case ArgumentType.ARGMDIS:
                return "ARGMDIS";
            case ArgumentType.ARGMEXT:
                return "ARGMEXT";
            case ArgumentType.ARGMLOC:
                return "ARGMLOC";
            case ArgumentType.ARGMMNR:
                return "ARGMMNR";
            case ArgumentType.ARGMTMP:
                return "ARGMTMP";
            case ArgumentType.ARGMNONE:
                return "ARGMNONE";
            case ArgumentType.ARGMPNC:
                return "ARGMPNC";
            case ArgumentType.PREDICATE:
                return "PREDICATE";
            default:
                return "NONE";
        }
    }
}