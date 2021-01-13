const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');



const languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
      apikey: 'JapGpxbrpxD1S1m8R686qhCy6fQIBd1FskY2_cNSTGCA',
    }),
    serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/12c03f9e-4498-4a74-b0a7-bb601cc4e848',
  });


languageTranslator
  .translate({
    text: 'Hello, this is a example of translating language with Watson.',
    source: 'en',
    target: 'es',
  })
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(error => console.error(error));