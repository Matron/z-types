import { Entity } from "./Entity";
import { GuiData } from "./GuiData";

export class Player {
    private currentEntity: Entity;

    constructor() {
        
    }

    public getVisibleGuiDatasOfEntities(): GuiData[] {
        throw Error("Not implemented yet");
    }
}