


export class Character{
    private static nextId = 1;

    private id: number = Character.nextId++;
    private level: number;
    private health: number;
    private alive: boolean;

    constructor() {
        this.level = 1;
        this.health = 1000;
        this.alive = true;
    }

    getLevel() {
        return this.level;
    }

    getHealth() {
        return this.health;
    }

    changeHealth(health: number) {
        this.health += health;
        if (this.health <= 0){
            this.health = 0;
            this.alive = false;
        }else if(this.health > 1000){
            this.health = 1000;
        }
    }

    isAlive() {
        return this.alive;
    }

    getId() {
        return this.id;
    }
}

