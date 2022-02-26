const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkElementExists = require("../support/check/checkElementExists");
const checkIsEmpty = require("../support/check/checkIsEmpty");

const assert = require("assert");

Given(/^Empty ToDo list$/, async function ()  {
    await openUrl.call(this, "http://localhost:8080/")
    await checkElementExists.call(this, '.todo-list', false)
    await checkIsEmpty.call(this, '.todo-list', false)
});
When(/^I write "([^"]*)" to (.*) and click to (.*)$/, async function (givenText, whereToWrite, whereToClick) {
    let selector = '.todo-list'
    await this.page.waitForSelector(selector)
    await this.page.focus('#input')
    await this.page.keyboard.type(givenText)
    let buttonSelector = '.add-button'
    const addButton = await this.page.$(buttonSelector)
    await addButton.click()
});
Then(/^I should see "([^"]*)" item in ToDo list$/, async function (givenText) {
    await this.page.waitForSelector('.todo-list-item')

    const allItems = await this.page.$$eval('.todo-list', async (items) => {
        const elements = document.querySelectorAll(".todo-list-item")
        let elementsArr = Array.from(elements);
        const titles = elementsArr.map(element => element.innerText)
        return titles;
        },
    );

    let todoListItems = [givenText];
    let checker = (array, target) => target.every(item => array.includes(item));
    const result = checker(allItems, todoListItems);
    assert(result === true, `Expected: "true", got: "${result}"`);
});
