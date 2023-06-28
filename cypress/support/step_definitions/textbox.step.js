import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import menuComp from "../../e2e/page-object/menu.comp"
import textBox from "../../e2e/page-object/textBox.page"

Given('user open a web application', () => {
    menuComp.homePage()
})

Then('user is able to fill the {string}', (parameter) => {

    switch (parameter) {
        case 'First Name': textBox.firstname(); break;
        case 'Last Name': textBox.lastname(); break;
        case 'Email': textBox.email(); break;
        case 'Phone Number': textBox.phonenumber(); break;
        case 'Address': textBox.address(); break;
        case 'City': textBox.city(); break;
        case 'Zip Code': textBox.zipcode(); break;
        case 'Website or domain name': textBox.websiteName(); break;
        case 'Project Description' : textBox.projectdes(); break;

    }

})

Then('user is able to select the State', () => {
    textBox.state()
})

Then('user is able to select the hosting Yes or No', () => {
    textBox.noHosting()
})
Then('user is able to click on send button', () => {
    textBox.sendButton.click()
})