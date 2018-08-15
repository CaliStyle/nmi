const NMI = require('@calistyle/nmi').NMI
const nmi = new NMI()

nmi.configure({
  // public sandbox keys are a thing apparently
  apiKey: '2F822Rw39fx762MaV7Yy86jXGTC7sCDy'
})

module.exports = NMI
