
class Key {
    private signature: number

    constructor() {
        this.signature =  Math.random()
    }

    getSignature():number {
      return this.signature
    }

}




class Person{
    constructor(private key:Key) {
        this.key
    }

    public getKey():Key {
      return this.key
    }

}



abstract class House{
    protected door: boolean
    protected key: Key
    protected tenants: Person[] 
    
    constructor(key: Key) {

    this.door = false
    this.key = key
    this.tenants = []
    }


    public comeIn(person: Person):void {
        if (this.door) {   
            this.tenants.push(person)
        } else {
            return
        }
    }


   public abstract openDoor(key: Key): void
}

class MyHouse extends House{
    public openDoor(key: Key):void {
    if (this.key.getSignature() === key.getSignature()) {
        this.door = true
    } else {
        this.door = false
    }
}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};