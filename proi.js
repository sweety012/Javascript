const arr = [1,2,3];

console.log(Object.getPrototypeOf(arr)); //this is to view  all protype based on array
console.log(Object.getPrototypeOf(arrProto)); // This Will Print all protoType Chain Property

// EXAMPLE of ProtoType Inheritence
function Bee(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "Bee"
}

Bee.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Bee.prototype.sayPhrase = () => console.log(this.phrase)

const Bee1 = new Alien("Honey", "I'm Honey the Bee!")
console.log(Bee1.name) // output "Honey"
console.log(Bee1.phrase) // output "I'm Honey the Bee!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"