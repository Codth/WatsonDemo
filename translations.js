const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');



const languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
      apikey: 'JapGpxbrpxD1S1m8R686qhCy6fQIBd1FskY2_cNSTGCA',
    }),
    serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/12c03f9e-4498-4a74-b0a7-bb601cc4e848',
  });


var translation = 'Hello, this is a example of translating language with Watson.';
console.log(translation)

languageTranslator
  .translate({
    text: translation,
    source: 'en',
    target: 'es',
  })
  .then(response => {
    console.log('English to Spanish')
    translation = response.result.translations[0].translation;
    console.log(translation);

    languageTranslator
    .translate({
      text: translation,
      source: 'es',
      target: 'zh-cn',
    })
    .then(response => {
      console.log('Spanish to Chinese')
      translation = response.result.translations[0].translation;
      console.log(translation);


      languageTranslator
      .translate({
        text: translation,
        source: 'zh-cn',
        target: 'ar',
      })
      .then(response => {
        console.log('Chinese to Arabic');
        translation = response.result.translations[0].translation;
        console.log(translation);

        languageTranslator
        .translate({
          text: translation,
          source: 'ar',
          target: 'en',
        })
        .then(response => {
          console.log('Arabic to English');
          translation = response.result.translations[0].translation;
          console.log(translation);
        })
        .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
  })
  .catch(error => console.error(error));





