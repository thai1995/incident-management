const cds = require('@sap/cds');
const { GET, POST, DELETE, PATCH, expect, axios} = cds.test();

axios.defaults.auth = { username: 'incident.support@tester.sap.com', password: 'initial' };

describe('Test GET Endpoints', () => {
    it('Should check Processor Service', async () => {
        const processorService = await cds.connect.to('ProcessorService');
        const { Incidents } = processorService.entities;
        expect(await SELECT.from(Incidents)).to.have.length(4);
    });

    it('Should check Customer', async () => {
        const processorService = await cds.connect.to('ProcessorService');
        const { Customers } = processorService.entities;
        expect(await SELECT.from(Customers)).to.have.length(3)
    })
});