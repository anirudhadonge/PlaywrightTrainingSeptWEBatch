import {request, test, expect} from '@playwright/test'

let expectedObject ={
      id: 1,
      name: 'Blue Top',
      price: 'Rs. 500',
      brand: 'Polo',
      category: [Object]
    }

test('API Test example',async({request})=>{
    const response = await request.get('https://automationexercise.com/api/productsList');

    expect(response.status()).toBe(200);
    const body = await response.json();
    const products = body.products;
    expect(body.responseCode).toBe(200);
    expect(products.includes(expectedObject))
    console.log(body);
})