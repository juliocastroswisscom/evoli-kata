import {CarrotType} from './CarrotType'

type CreateCarrotParams = {
    carrotness: number;
    type: CarrotType;
};

export class Carrot {
    private carrotness: number;
    private carrotType: CarrotType;

    constructor(params: CreateCarrotParams) {
        this.carrotness = params.carrotness;
        this.carrotType = params.type;
    }

    getCarrotness() {
        return this.carrotness;
    }

    getCarrotType(){
        return this.carrotType;
    }

}

