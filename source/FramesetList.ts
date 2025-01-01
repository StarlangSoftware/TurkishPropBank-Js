import {Frameset} from "./Frameset";
import {XmlDocument} from "nlptoolkit-xmlparser/dist/XmlDocument";

export class FramesetList {

    private frames: Array<Frameset> = []

    /**
     * A constructor of {@link FramesetList} class which reads all frameset files inside the files.txt file. For each
     * filename inside that file, the constructor creates a Frameset and puts in inside the frames {@link Array}.
     */
    constructor() {
        let xmlDocument = new XmlDocument("turkish-propbank.xml")
        xmlDocument.parse()
        let framesNode = xmlDocument.getFirstChild()
        let frameSetNode = framesNode.getFirstChild()
        while (frameSetNode != undefined){
            this.frames.push(new Frameset(frameSetNode))
            frameSetNode = frameSetNode.getNextSibling()
        }
    }

    /**
     * frameExists method checks if there is a {@link Frameset} with the given synSet id.
     *
     * @param synSetId  Id of the searched {@link Frameset}
     * @return true if the {@link Frameset} with the given id exists, false otherwise.
     */
    frameExists(synSetId: string): boolean{
        for (let f of this.frames){
            if (f.getId() == synSetId){
                return true;
            }
        }
        return false;
    }

    /**
     * getFrameSet method returns the {@link Frameset} with the given synSet id.
     *
     * @param synSetId  Id of the searched {@link Frameset}
     * @return {@link Frameset} which has the given id.
     */
    getFrameSet(synSetId: any): Frameset{
        if (!isNaN(synSetId)){
            return this.frames[synSetId]
        } else {
            for (let f of  this.frames){
                if (f.getId() == synSetId){
                    return f
                }
            }
        }
    }

    /**
     * The addFrameset method takes a {@link Frameset} as input and adds it to the frames {@link ArrayList}.
     *
     * @param frameset  Frameset to be added
     */
    addFrameset(frameset: Frameset){
        this.frames.push(frameset)
    }

    /**
     * The size method returns the size of the frames {@link Array}.
     *
     * @return the size of the frames {@link Array}.
     */
    size(): number{
        return this.frames.length
    }
}