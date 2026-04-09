import Ranger from './Ranger.js';

export default class Gaoblue extends Ranger {
    constructor(name, color, animalSpirit) {
        super(name, color, animalSpirit);
    }

    transform() {
        this.isTransformed = true;
        console.log(`${this.name} transforms! Gao Access!!`);
    }

    shout() {
        if (this.isTransformed) {
            console.log(`${this.color} : ฉลามแห่งคลื่นคลั่ง!!! ${this.color}`);
        } else {
            console.log(`${this.name} : ผมเป็น Dev ${this.name} (มือใหม่แต่ใจสู้ครับ!)`);
        }
    }

    // Method ที่เพื่อนช่วยแก้ให้ (รวมเข้ามาไว้ด้วยกัน)
    human() {
        console.log(`My Name is ${this.name}. hp now ${this.hp}`);
    }

    checkmyhp() {
        console.log(`${this.name} my hp Now!! ${this.hp}`);
    }
}