import { expect } from 'chai';
import { getSocieteInfo } from '../src/societe-info.util';
import sinon from 'sinon';
import responseExample from './rsc/response.example.json';
import nock from 'nock';

describe('societe-info', () => {

describe('getSocieteInfo', () => {
 afterEach(async () => {
    sinon.verifyAndRestore();
  })

    it('should give societe infos', async () => {
      const siret = '123456789';
      nock('https://societeinfo.com/')
        .get(`/app/rest/api/v2/company.json/123456789?key=${process.env.SOCIETE_INFO_API_KEY}`)
        .reply(200, responseExample);
      const response = await getSocieteInfo(siret);

      expect(response).to.deep.equal(responseExample.result);
    });

    it('should respond a 404 if the company is not found', async () => {
      const siret = '123456789';
      nock('https://societeinfo.com/')
        .get(`/app/rest/api/v2/company.json/123456789?key=${process.env.SOCIETE_INFO_API_KEY}`)
        .reply(404, 'No company found');
      try {
      const response = await getSocieteInfo(siret);
      } catch (err) {
        expect(err.statusCode).to.equal(404);
        expect(err.message).to.equal('404 - "No company found"');
      }
    });
  });
});