const {expect} = require('chai');
const request = require('supertest');
const app = require('../server/server')
describe('API', () => {
    describe('GET tweets/:username', () => {
        it('returns with a status code of 200', (done) => {
            return request(app)
                .get('/api/tweets/dennis')
                .expect(200);
                done();
        })
        it.only('returns an array', () => {
             const numbOfTweets = 5;
            return request(app)
            .get(`/api/tweets/dennis?count=${numbOfTweets}`)
            .then(res => {
                const tweetData = res.body[0]
                expect(res.body).to.be.an('array')
                expect(res.body.length).to.equal(numbOfTweets)
            })
            .catch(console.error)
        }).timeout(5000)
    })
})