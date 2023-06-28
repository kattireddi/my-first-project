const streetNames = ["Main", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"];
const streetTypes = ["Street", "Avenue", "Road", "Drive", "Boulevard"];

const random = Math.floor(Math.random() * streetNames.length)
function getRandomStreetName() {
    return streetNames[random];
}


console.log(random, getRandomStreetName())
        
       