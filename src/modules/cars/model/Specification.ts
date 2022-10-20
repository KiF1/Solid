import {v4 as uuidV4} from "uuid";

class Specification {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    //Construtor metodo quando a class é instanciada
    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Specification }