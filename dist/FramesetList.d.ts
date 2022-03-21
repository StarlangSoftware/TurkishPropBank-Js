import { Frameset } from "./Frameset";
export declare class FramesetList {
    private frames;
    /**
     * A constructor of {@link FramesetList} class which reads all frameset files inside the files.txt file. For each
     * filename inside that file, the constructor creates a Frameset and puts in inside the frames {@link Array}.
     */
    constructor();
    /**
     * frameExists method checks if there is a {@link Frameset} with the given synSet id.
     *
     * @param synSetId  Id of the searched {@link Frameset}
     * @return true if the {@link Frameset} with the given id exists, false otherwise.
     */
    frameExists(synSetId: string): boolean;
    /**
     * getFrameSet method returns the {@link Frameset} with the given synSet id.
     *
     * @param synSetId  Id of the searched {@link Frameset}
     * @return {@link Frameset} which has the given id.
     */
    getFrameSet(synSetId: any): Frameset;
    /**
     * The addFrameset method takes a {@link Frameset} as input and adds it to the frames {@link ArrayList}.
     *
     * @param frameset  Frameset to be added
     */
    addFrameset(frameset: Frameset): void;
    /**
     * The size method returns the size of the frames {@link Array}.
     *
     * @return the size of the frames {@link Array}.
     */
    size(): number;
}
