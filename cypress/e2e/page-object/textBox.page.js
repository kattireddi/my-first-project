

class TextBox {

    get inputfirstname() { return cy.get('[name="first_name"]') }
    get inputlastname() { return cy.get('[name="last_name"]') }
    get inputphonenumber() { return cy.get('[name="phone"]') }
    get inputaddress() { return cy.get('[name="address"]') }
    get inputcity() { return cy.get('[name="city"]') }
    get selectState() { return cy.get('[name="state"]') }
    get inputZipCode() { return cy.get('[name="zip"]') }
    get sendButton() { return cy.get('[class="btn btn-default"]') }


    selectElements() { cy.get('#treemenu').contains('Input Forms').click() }
    selectTextBox() { cy.get('body').contains('Text Box').click() }


    firstname() {
        const names = ["Anil", "Suhass", "Maha Lakshmi", "Praneetha", "Anitha", "Geetha", "Sunil", "Varun Balaji", "Sridhar", "Praveen"]
        function getRandomNames() {
            return names[Math.floor(Math.random() * names.length)]
        }
        const randomName = getRandomNames();
        this.inputfirstname.type(randomName)
    }
    lastname() {
        this.inputlastname.type('Kumar')
    }
    email() {
        cy.get('[name="email"]').click().type('anylkumar@gmail.com')
    }

    phonenumber() {
        const characters = '1234567890'
        const randomText = Cypress._.sampleSize(Cypress._.shuffle(characters), 10).join('')
        this.inputphonenumber.type(randomText)
        cy.wrap(randomText).as('dataGroupName')
    }

    address() {
        const streetNames = ["Main", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"];
        const streetTypes = ["Street", "Avenue", "Road", "Drive", "Boulevard"];

        function getRandomStreetNumber() {
            return Math.floor(Math.random() * 9999) + 1;
        }

        function getRandomStreetName() {
            return streetNames[Math.floor(Math.random() * streetNames.length)];
        }

        function getRandomStreetType() {
            return streetTypes[Math.floor(Math.random() * streetTypes.length)];
        }

        function getRandomAddress() {
            const streetNumber = getRandomStreetNumber();
            const streetName = getRandomStreetName();
            const streetType = getRandomStreetType();
            return `${streetNumber} ${streetName} ${streetType}`;
        }

        // Usage
        const randomAddress = getRandomAddress();
        cy.log(randomAddress);
        this.inputaddress.type(randomAddress);

    }

    city() {
        const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose"];

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        const randomIndex = getRandomNumber(0, cities.length - 1);
        this.inputcity.type(cities[randomIndex]);
    }

    state() {
        const state = 'Florida';
        this.selectState.select(state, { force: true });
    }

    zipcode() {
        const zipCode = Math.floor(Math.random() * (99999 - 10000 + 1) + 1000)
        zipCode.toString()
        this.inputZipCode.type(zipCode)
    }

    websiteName() {
        cy.get('[name="website"]').type('wwww.xyz.com')

    }

    noHosting() {
        cy.get('[value="no"]').click()
    }

    projectdes() {
        cy.get('[name="comment"]').type('this is my first project')
    }


}

export default new TextBox()