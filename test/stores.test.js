const moongose =require('mongoose');
const supertest=require('supertest');
const Store= require('../models/store');
const {app,server}=require('../app');

const api= supertest(app);


test('stores are returned as json',async ()=>{
    await api
        .get('/api/stores')
        .auth('test@koibanx.com', 'admin')
        .expect(200)
        .expect('Content-Type',/application\/json/)
})

test('post stores',async ()=>{
    await api 
        .post('api/stores')
        .auth('test@koibanx.com', 'admin')
        .expect(404)

})

afterAll(()=>{
    moongose.connection.close()
    server.close()
})