const request = require('request-promise')

/**
  * Retrieve societe info from societe-info api giving his siret
  */

  function getSocieteInfo(siret: string): SocieteInfo {
    request(`https://societeinfo.com/app/rest/api/v2/company.json/${siret}?key=process.env.SOCIETE_INFO_API_KEY`)
      .then((response) => {

      })
  }

module.exports = {
  getSocieteInfo,
};