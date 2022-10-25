class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name
        this.health = health
        this.speed=speed
        this.strength=strength
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(`${this.name}'s Stats:
Health = ${this.health}
Speed = ${this.speed}
Strength = ${this.strength}`)
    }
    drinkSake(){
        this.health +=10
        console.log(`${this.name} drank some sake! ${this.name} now has ${this.health} health.`)
    }
}
class Sensei extends Ninja{
    constructor(name, health=200, wisdom=10){
        super(name, health)
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log(`${this.name} says: \"Debug while you code, not just after.\"`)
    }
}
const Leonardo = new Ninja("Leonardo", 10)

Leonardo.sayName()
Leonardo.showStats()
Leonardo.drinkSake()

const masterSplinter = new Sensei("Master Splinter")

masterSplinter.speakWisdom()