import { ArgumentType } from "./ArgumentType";
export declare class ArgumentTypeStatic {
    /**
     * The getArguments method takes an argumentsType string and returns the {@link ArgumentType} form of it.
     *
     * @param argumentsType  Type of the argument in string form
     * @return Type of the argument in {@link ArgumentType} form
     */
    static getArguments(argumentsType: string): ArgumentType;
    /**
     * The getPropbankType method takes an argumentType in {@link ArgumentType} form and returns the string form of it.
     *
     * @param argumentType  Type of the argument in {@link ArgumentType} form
     * @return Type of the argument in string form
     */
    static getPropBankType(argumentType: ArgumentType): string;
}
