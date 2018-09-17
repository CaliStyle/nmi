const NMI = require('../../dist').NMI
const assert = require('assert')

describe('#Configure', () => {
  let nmi, nmi2
  it('should allow two different instances', () => {
    nmi = new NMI({
      username: '1',
      password: '1'
    })
    nmi2 = new NMI({
      username: '2',
      password: '2'
    })

    assert.equal(nmi.config.username, 1)
    assert.equal(nmi.config.password, 1)
    assert.equal(nmi2.config.username, 2)
    assert.equal(nmi2.config.password, 2)
  })
})
