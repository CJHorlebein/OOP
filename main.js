`
1) Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
2) Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
3) Have sonny greet jordan using the greet method.
4) Have jordan greet sonny using the greet method.
5) Write a statement to print the contact info(email and phone) of Sonny.
6) Write another statement to print the contact info of Jordan.`;

// Person Class
class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
        console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
}

// // Create person objects 'sonny' and 'jordan'
let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4938');
let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// Have 'Sonny' greet 'Jordan'
sonny.greet(jordan);
jordan.greet(sonny);

// Contact info
console.log(`Contact info for ${sonny.name}: ${sonny.email},${sonny.phone}`);
console.log(`Contact info for ${jordan.name}: ${jordan.email},${jordan.phone}`);

// A card object will have 2 properties:
// point - the point value of the card: a number between 1 and 13.
// suit - the suit of the card: one of diamonds, clubs, hearts and spades.
// Add a getImageUrl method to card objects by adding it as a member method to your Card class.

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
        return `./cards/${this.point}${this.suit.slice(0, 1)}`;
    }
}

// let myCard = new Card(5, 'Diamonds')

// Implement a Hand class that will allow the code above to work.Hint:
// you will want to store as a property of a hand object - an array of card objects.

class Hand {
    constructor() {
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
        return this.cards;
    }
    getPoints() {
        let sum = 0;
        this.cards.forEach(card => (sum += card.point));
        return sum;
    }
}

let myHand = new Hand();

myHand.addCard(new Card(5, 'Diamonds'));
myHand.addCard(new Card(15, 'Spades'));

console.log(myHand.getPoints());

// Create Deck class that can draw(), shuffle(), and numCardsLeft()
class Deck {
    constructor() {
        this.reset();
        this.shuffle();
    }
    reset() {
        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'C', 'H', 'D'];
        this.cards = [];
        values.forEach(value => {
            suits.forEach(suit => this.cards.push(new Card(value, suit)));
        });
    }
    shuffle() {
        let deck = [];
        while (this.cards.length > 0) {
            let pos = Math.floor(Math.random() * this.cards.length);
            deck.push(this.cards[pos]);
            this.cards = [...this.cards.slice(0, pos), ...this.cards.slice(pos + 1)];
        }
        this.cards = [...deck];
    }
    draw() {
        return this.cards.pop();
    }
    numCardsLeft() {
        return this.cards.length;
    }
}

let myDeck = new Deck();

myDeck.draw();
myDeck.draw();
myDeck.draw();
myDeck.draw();
console.log(myDeck.numCardsLeft());
