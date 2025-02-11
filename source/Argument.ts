export class Argument {

    private readonly argumentType: string
    private _id: string

    /**
     * A constructor of {@link Argument} class which takes argument string which is in the form of argumentType$id
     * and parses this string into argumentType and id. If the argument string does not contain '$' then the
     * constructor return a NONE type argument.
     *
     * @param argument  Argument string containing the argumentType and id
     * @param id  Id of the argument
     */
    constructor(argument: string, id?: string) {
        if (id == undefined){
            if (argument.includes("$")){
                this.argumentType = argument.substring(0, argument.indexOf("$"));
                this._id = argument.substring(argument.indexOf("$") + 1);
            } else {
                this.argumentType = "NONE";
            }
        } else {
            this.argumentType = argument
            this._id = id
        }
    }

    /**
     * Accessor for argumentType.
     *
     * @return argumentType.
     */
    getArgumentType(): string{
        return this.argumentType
    }

    /**
     * Accessor for id.
     *
     * @return _id.
     */
    getId(): string{
        return this._id
    }

    /**
     * toString converts an {@link Argument} to a string. If the argumentType is "NONE" returns only "NONE", otherwise
     * it returns argument string which is in the form of argumentType$id
     *
     * @return string form of argument
     */
    toString(): string{
        if (this.argumentType == "NONE"){
            return this.argumentType;
        } else {
            return this.argumentType + "$" + this._id;
        }
    }

    /**
     * Setter for the id
     * @param id New id of the argument
     */
    setId(id: string) {
        this._id = id;
    }

}