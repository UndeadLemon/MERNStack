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

const Leonardo = new Ninja("Leonardo", 10)

Leonardo.sayName()
Leonardo.showStats()
Leonardo.drinkSake()