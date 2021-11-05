import {FramesetArgument} from "./FramesetArgument";
import {XmlDocument} from "nlptoolkit-xmlparser/dist/XmlDocument";
import {ArgumentType} from "./ArgumentType";
import {ArgumentTypeStatic} from "./ArgumentTypeStatic";

export class Frameset {

    private framesetArguments: Array<FramesetArgument> = []
    private id: string

    /**
     * Another constructor of {@link Frameset} class which takes XmlDocument as input and reads the frameset
     *
     * @param doc  inputStream to read frameset
     */
    constructor(doc: any) {
        if (doc instanceof XmlDocument){
            doc.parse()
            let framesetNode = doc.getFirstChild()
            this.id = framesetNode.getAttributeValue("id")
            let argument = framesetNode.getFirstChild()
            while (argument != undefined){
                let framesetArgument = new FramesetArgument(argument.getAttributeValue("name"),
                    argument.getPcData(), argument.getAttributeValue("function"))
                this.framesetArguments.push(framesetArgument)
                argument = argument.getNextSibling()
            }
        } else {
            this.id = doc
        }
    }

    /**
     * containsArgument method which checks if there is an {@link Argument} of the given argumentType.
     *
     * @param argumentType  ArgumentType of the searched {@link Argument}
     * @return true if the {@link Argument} with the given argumentType exists, false otherwise.
     */
    containsArgument(argumentType: ArgumentType): boolean{
        for (let framesetArgument of this.framesetArguments){
            if (ArgumentTypeStatic.getArguments(framesetArgument.getArgumentType()) == argumentType){
                return true;
            }
        }
        return false;
    }

    /**
     * The addArgument method takes a type and a definition of a {@link FramesetArgument} as input, then it creates a
     * new FramesetArgument from these inputs and adds it to the framesetArguments {@link Array}.
     *
     * @param type  Type of the new {@link FramesetArgument}
     * @param definition Definition of the new {@link FramesetArgument}
     * @param _function Function of the new {@link FramesetArgument}
     */
    addArgument(type: string, definition: string, _function: string){
        let check = false;
        for (let a of this.framesetArguments) {
            if (a.getArgumentType() == type) {
                a.setDefinition(definition);
                check = true;
                break;
            }
        }
        if (!check) {
            let arg = new FramesetArgument(type, definition, _function);
            this.framesetArguments.push(arg);
        }
    }

    /**
     * The deleteArgument method takes a type and a definition of a {@link FramesetArgument} as input, then it searches for the FramesetArgument with these type and
     * definition, and if it finds removes it from the framesetArguments {@link ArrayList}.
     *
     * @param type  Type of the to be deleted {@link FramesetArgument}
     * @param definition Definition of the to be deleted {@link FramesetArgument}
     */
    deleteArgument(type: string, definition: string){
        let index = 0
        for (let a of this.framesetArguments) {
            if (a.getArgumentType() == type && a.getDefinition() == definition) {
                this.framesetArguments.splice(index, 1);
                break;
            }
            index++
        }
    }

    /**
     * Accessor for framesetArguments.
     *
     * @return framesetArguments.
     */
    getFramesetArguments(): Array<FramesetArgument>{
        return this.framesetArguments
    }

    /**
     * Accessor for id.
     *
     * @return id.
     */
    getId(): string{
        return this.id
    }

    /**
     * Mutator for id.
     *
     * @param id to set.
     */
    setId(id: string){
        this.id = id
    }
}