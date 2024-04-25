// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//<reference types = "Cypress">
//const cypress = require("cypress");
//const { describe, it, before, beforeEach, after, afterEach } = require('mocha');
//const { describe } = require("mocha");
require('cypress-xpath')
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// Your Cypress test code goes here

// cypress.config.js