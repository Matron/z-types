import { GuiEngine } from "./GuiEngine";
import { Player } from "./Player";
import { Scenario } from "./Scenario";

export class GameEngine {
    private guiEngine: GuiEngine;
    private player: Player;
    private scenario: Scenario;

    constructor() {
        
    }

    public gameLoop(): void {
        // Check for input
        // Update scenario
        // render
    }
}