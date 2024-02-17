class Key {
    private signature:number;
    constructor(){
        this.signature=Math.random()
    }
    getSignature():number{
        return this.signature
    }
    
}

class Person {
    constructor(private key:Key){
        this.key = key;
    }
    getKey():Key{
        return this.key;
    }
}

abstract class House{
    protected door: boolean;
    protected key: Key;
    private tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(persone:Person):void{
if(this.door){
    this.tenants.push(persone)
} else {
    console.log("sorry door is close")
}
  }
}

class MyHouse extends House {
    openDoor(key:Key){
       if(key.getSignature()=== this.key.getSignature() ) {
        this.door = true;
       } else{
        console.log("Sorry, key is wrong, try again later...")
       }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};