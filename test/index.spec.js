'use strict'
const app = require('../index')
const chai = require('chai')
const request = require('supertest')

const expect = chai.expect;

describe('GET /', () => {
  it('should return 200 status', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200)
        done()
      })
  })
})

describe('GET /invalidRouteName', () => {
  it('should return 404 status', done => {
    request(app)
      .get('/invalidRouteName')
      .end((err, res) => {
        expect(res.statusCode).not.to.be.equal(200)
        expect(res.statusCode).to.be.equal(404)
        done()
      })
  })
})