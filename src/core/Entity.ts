import { IComponent } from "./IComponent";

export class Entity {
    private components: IComponent[];
    private entities: Entity[];

    constructor() {
        this.components = [];
        this.entities = [];
    }

    public updateComponents() {
        this.components.forEach(component => {
            component.update();
        });
    }
}