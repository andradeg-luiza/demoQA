/// <reference types="Cypress" /> 

import ProgressBarPage from "../pages/progressBar_pages";
const progressBarPage = new ProgressBarPage();

Given(/^I access the website "([^"]*)"$/, (url) => {
    progressBarPage.navigateToUrl(url);
});

When(/^I click the "([^"]*)" button on the page$/, (buttonName) => {
    if (buttonName === "Start") {
        progressBarPage.clickStartButton();
    } else if (buttonName === "Reset") {
        progressBarPage.clickResetButton();
    }
});

When(/^I stop the progress bar$/, () => {
    progressBarPage.stopProgressBar(); // Pausa o progresso ao clicar novamente
});

Then(/^the progress bar value should be equal to 25%$/, () => {
    progressBarPage.verifyProgressBarEqual25(); // Verifica se o progresso é aproximadamente 25%
});

//TODO corrigir daqui em diante, o método para alcançar 100% não funciona
When(/^the progress bar reaches 100%$/, () => {
    progressBarPage.letProgressBarReach100(); // Espera o progresso atingir 100%
});

Then(/^the progress bar value should be 100%$/, () => {
    progressBarPage.verifyProgressBarEqual100(); // Verifica se o progresso é 100%
});

When(/^I reset the progress bar$/, () => {
    progressBarPage.clickResetButton();
});

Then(/^the progress bar value should be 0%$/, () => {
    progressBarPage.verifyProgressBarReset(); // Verifica se o progresso foi resetado para 0%
});
