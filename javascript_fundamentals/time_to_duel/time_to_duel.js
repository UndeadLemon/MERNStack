class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}
class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost)
        this.power = power
        this.resilience = resilience
    }
    attack(target) {
        if (target instanceof Unit) {
            target.resilience -= this.power
            console.log("----------")
            console.log(`${this.name} attacks ${target.name}!`)
        }
        else {
            console.log("----------")
            console.log("Target is not a valid target! Must be a \"Unit\" card!")
        }
    }
    showStats() {
        console.log("----------")
        console.log(`${this.name}'s Power is: ${this.power}`)
        console.log(`${this.name}'s Resilience is: ${this.resilience}`)
    }

}
class Effect extends Card {
    constructor(name, cost, text, targetStat, magnitude) {
        super(name, cost)
        this.text = text
        this.targetStat = targetStat
        this.magnitude = magnitude
    }
    play(target) {
        if (target instanceof Unit) {
            target[this.targetStat] += this.magnitude
            console.log("----------")
            console.log(`${this.name} has been played, targeting ${target.name}!`)
            console.log(`Card text: ${this.text}`)
            console.log(`${target.name}'s ${this.targetStat} is now ${target[this.targetStat]}!`)
        }
        else {
            console.log("----------")
            console.log("Target is not a valid target! Must be a \"Unit\" card!")
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3)
const unhandledPromiseException = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2)

unhandledPromiseException.play(redBeltNinja)
pairProgramming.play(blackBeltNinja)
redBeltNinja.attack(blackBeltNinja)
blackBeltNinja.showStats()
redBeltNinja.showStats()
