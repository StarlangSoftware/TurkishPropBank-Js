import { FramesetArgument } from "./FramesetArgument";
import { ArgumentType } from "./ArgumentType";
export declare class Frameset {
    private framesetArguments;
    private id;
    /**
     * Another constructor of {@link Frameset} class which takes XmlDocument as input and reads the frameset
     *
     * @param doc  inputStream to read frameset
     */
    constructor(doc: any);
    /**
     * containsArgument method which checks if there is an {@link Argument} of the given argumentType.
     *
     * @param argumentType  ArgumentType of the searched {@link Argument}
     * @return true if the {@link Argument} with the given argumentType exists, false otherwise.
     */
    containsArgument(argumentType: ArgumentType): boolean;
    /**
     * The addArgument method takes a type and a definition of a {@link FramesetArgument} as input, then it creates a
     * new FramesetArgument from these inputs and adds it to the framesetArguments {@link Array}.
     *
     * @param type  Type of the new {@link FramesetArgument}
     * @param definition Definition of the new {@link FramesetArgument}
     * @param _function Function of the new {@link FramesetArgument}
     */
    addArgument(type: string, definition: string, _function: string): void;
    /**
     * The deleteArgument method takes a type and a definition of a {@link FramesetArgument} as input, then it searches for the FramesetArgument with these type and
     * definition, and if it finds removes it from the framesetArguments {@link ArrayList}.
     *
     * @param type  Type of the to be deleted {@link FramesetArgument}
     * @param definition Definition of the to be deleted {@link FramesetArgument}
     */
    deleteArgument(type: string, definition: string): void;
    /**
     * Accessor for framesetArguments.
     *
     * @return framesetArguments.
     */
    getFramesetArguments(): Array<FramesetArgument>;
    /**
     * Accessor for id.
     *
     * @return id.
     */
    getId(): string;
    /**
     * Mutator for id.
     *
     * @param id to set.
     */
    setId(id: string): void;
}
