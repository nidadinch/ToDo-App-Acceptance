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
    await this.page.evaluate(
        (givenText) => {
            let input = document.querySelector('input[name=textbox]');
            input.value = givenText
        },
        givenText
    );
    let buttonSelector = '.add-button'
    const addButton = await this.page.$(buttonSelector)
    await addButton.click()
});
