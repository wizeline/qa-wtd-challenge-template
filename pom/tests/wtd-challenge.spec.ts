import {test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { URLS, CREDENTIALS } from '../data/constants'


test.describe('Wtd Challenge Demo', () => {

    //Declare here your PO
    let loginPage: LoginPage
    

    test.beforeEach(async ({ page }) => {
        //Initialize here your PO
        loginPage = new LoginPage(page)
        

        //Go to your BASE_URL
        await page.goto(URLS.BASE_URL)
    })

    //Implement your tests here. Don't change the test names
    test('As a standard user I should be able to log in', async ({page}) => {
       
    })

    test('As a fake user I should not be able to log in', async ({page}) => {
        
    })

    test('As a standard user I should be able to order the products by ascending price', async ({page}) => {
       
    })
   
    test('As a standard user I should be able to add the two cheaper products to the cart without filter', async ({page}) => {
       

    })

    test('As a standard user I should be able to finish a purchase', async ({page}) => {
       

    })
    
})