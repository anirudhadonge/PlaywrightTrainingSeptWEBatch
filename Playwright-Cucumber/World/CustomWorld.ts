import { IWorldOptions,setWorldConstructor, World } from "@cucumber/cucumber";

export class CustomWorld extends World{

    public worldKey:Map<string,any>  

    constructor(options:IWorldOptions){
        super(options)
        this.worldKey = new Map<string,any>
    }
    
    public setValue(key:string,value:any){
        this.worldKey.set(key,value);
    }

    public getValue(key:string):any{
        return this.worldKey.get(key);
    }
}

setWorldConstructor(CustomWorld);