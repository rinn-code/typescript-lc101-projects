import { Payload } from './Payload';
export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: [];
    astronauts: [];


    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    function sumMass(items: Payload[] ): number {
        let sum: number = 0;
        for(let index = 0; index < items.length; index++) {
            sum += sum + items.massKg;
        }
        return sum;
    }
/*    function currentMassKg( ): number {
        return Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems;
    }
    function canAdd(items: Payload ): boolean {
        return true if this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    function addCargo(cargo: Cargo): boolean {
        return something;
    }
    function addAstronaut(astronaut: Astronaut): boolean {
        return something;
    }
}*/
