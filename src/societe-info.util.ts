import request from 'request-promise';
import { SocieteInfo } from './types';

/**
  * Retrieve societe info from societe-info api giving his siret
  */
  export async function getSocieteInfo(siret: string): Promise<SocieteInfo> {
    try {
      const response = await request(`https://societeinfo.com/app/rest/api/v2/company.json/${siret}?key=${process.env.SOCIETE_INFO_API_KEY}`);
      const infos = JSON.parse(response).result;
      return Promise.resolve(infos);
    }
    catch (err) {
      console.log(`ERROR when retrieving societe info ${err}`);
      return Promise.reject(err);
    }
  }
