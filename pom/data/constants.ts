import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    BASE_URL: 'https://www.saucedemo.com/'
    //Declare here your URLs
}
export const CREDENTIALS = {
    STANDARD_USER: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    }
}
