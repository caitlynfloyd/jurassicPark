class Fence {
    
    constructor(name){
        this.name = name;
        this.power = true;
        this.hungry = true;
        
    }
    
    changePower(){
        if(this.power){
            this.power = false;
        } else {
            this.power = true;
        }        
    }
    
    changeHunger(){
        if(this.hungry){
            this.hungry = false;
        } else {
            this.hungry = true;
        }
    }
}