const NMI = require('../../dist').NMI

describe('#Transaction', () => {
  let nmi
  beforeEach(() => {
    nmi = new NMI({
      username: process.env.TEST_USERNAME,
      password: process.env.TEST_PASSWORD
    })
  })

  it('should list transactions', (done) => {
    nmi.transaction.list({
      username: process.env.TEST_USERNAME,
      password: process.env.TEST_PASSWORD
    })
      .then(list => {
        console.log(list)
        done()
      })
      .catch(err => {
        console.log(err)
        done(err)
      })
  })
})
