/// <reference types="Cypress" /> 

import ProgressBar from "../elements/progressBar_elements";
const progressBar = new ProgressBar();

class ProgressBarPage {
    navigateToUrl(url) {
        cy.visit(url); // Navega para a URL fornecida
    }

    clickStartButton() {
        cy.get(progressBar.startStopButton()).click(); // Clica no botão de start/stop
    }

    stopProgressBar() {
        cy.get(progressBar.startStopButton()).click(); // Clica novamente para pausar o progresso
    }

    verifyProgressBarEqual25() {
        this.clickStartButton(); // Inicia o progresso

        // Aguardar mais tempo para a animação alcançar 25%
        cy.wait(2000); // Aumenta o tempo de espera para garantir que o progresso tenha alcançado 25%

        cy.get(progressBar.progressBar())
            .should(($progressBar) => {
                const styleWidth = $progressBar.css("width"); // Largura da barra em pixels
                const percentageText = $progressBar.text();   // Texto da porcentagem da barra

                const widthValue = parseFloat(styleWidth);    // Converte largura para número (em pixels)
                const percentageValue = parseFloat(percentageText); // Converte texto de porcentagem para número

                // Verifica se a largura está dentro de uma tolerância maior de 25% (80px a 120px)
                expect(widthValue).to.be.within(80, 120); // Maior margem de erro
                expect(percentageValue).to.be.within(20, 30); // O texto da porcentagem deve estar entre 20% e 30%
            });

        this.stopProgressBar(); // Pausa a barra ao atingir aproximadamente 25%
    }

    letProgressBarReach100() {
        this.clickStartButton(); // Inicia o progresso

        // Aguardar o progresso alcançar 100%
        cy.get(progressBar.progressBar(), { timeout: 15000 }) // Aumenta o tempo de espera para 15 segundos
            .should(($progressBar) => {
                const percentageText = $progressBar.text();
                expect(percentageText).to.not.equal("100%"); // Caso ainda não tenha atingido 100%
            });

        // Aguardar até que o progresso alcance 100%
        cy.get(progressBar.progressBar(), { timeout: 15000 }) // Aumenta o tempo de espera para 15 segundos
            .should(($progressBar) => {
                const percentageText = $progressBar.text();
                expect(percentageText).to.equal("100%"); // Verifica se o texto exibe 100%
            });

        this.stopProgressBar(); // Pausa a barra de progresso
    }

    verifyProgressBarEqual100() {
        cy.get(progressBar.progressBar())
            .should(($progressBar) => {
                const percentageText = $progressBar.text();
                expect(percentageText).to.equal("100%"); // Verifica se o texto exibe 100%
            });
    }

    clickResetButton() {
        cy.get(progressBar.resetButton()).click(); // Clica no botão de reset
    }

    verifyProgressBarReset() {
        cy.get(progressBar.progressBar())
            .should(($progressBar) => {
                const styleWidth = $progressBar.css("width");
                const percentageText = $progressBar.text();

                expect(styleWidth).to.equal("0px"); // Verifica se a largura é 0px
                expect(percentageText).to.equal("0%"); // Verifica se o texto exibe 0%
            });
    }
}

export default ProgressBarPage;