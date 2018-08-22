const NMI = require('../../dist').NMI
describe('#Customer', () => {
  let nmi
  beforeEach(() => {
    nmi = new NMI()
    nmi.configure({
      // Demo Sandbox Key
      apiKey: '2F822Rw39fx762MaV7Yy86jXGTC7sCDy'
    })
  })
  it('should create customer', (done) => {
    nmi.customer.create({
      'redirect-url': 'http://locahost:3000',
      billing: {
        'company': 'Acme, Inc.',
        'first-name': 'John',
        'last-name': 'Smith',
        'address1': '1234 Main St.',
        'address2': 'Suite 205',
        'city': 'Beverly Hills',
        'state': 'CA',
        'postal': '90210',
        'country': 'US',
        'phone': '555-555-5555',
        'fax': '555-555-5555',
        'email': 'test@example.com',
      },
      shipping: {
        'company': 'Acme, Inc.',
        'first-name': 'Mary',
        'last-name': 'Smith',
        'address1': '1234 Main St.',
        'address2': 'Suite 205',
        'city': 'Beverly Hills',
        'state': 'CA',
        'postal': '90210',
        'country': 'US',
        'phone': '555-555-5555'
      }
    })
      .then(customer => {
        console.log(customer)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it.skip('should create customer', (done) => {
    nmi.customer.create({
      billing: {
        'company': 'Acme, Inc.',
        'first-name': 'John',
        'last-name': 'Smith',
        'address1': '1234 Main St.',
        'address2': 'Suite 205',
        'city': 'Beverly Hills',
        'state': 'CA',
        'postal': '90210',
        'country': 'US',
        'phone': '555-555-5555',
        'fax': '555-555-5555',
        'email': 'test@example.com',
      },
      shipping: {
        'company': 'Acme, Inc.',
        'first-name': 'Mary',
        'last-name': 'Smith',
        'address1': '1234 Main St.',
        'address2': 'Suite 205',
        'city': 'Beverly Hills',
        'state': 'CA',
        'postal': '90210',
        'country': 'US',
        'phone': '555-555-5555'
      }
    })
      .then(customer => {
        console.log(customer)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
