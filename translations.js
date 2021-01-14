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

const language_set = ['en', 'es', 'zh-cn', 'ar', 'en']

function perform_translate(i, txt, callback){
    console.log(txt)
    if(i<language_set.length-1){
        callback(txt, i, language_set[i], language_set[i+1], perform_translate)
    }
}

function call_translate(txt, i, a, b, callback){
    languageTranslator.translate({
        text: txt,
        source: a,
        target: b,
    }).then(response => {
        console.log(a + ' to ' + b);
        translation = response.result.translations[0].translation;
        callback(i+1, translation, call_translate)
    })
    .catch(error => console.error(error));
}

perform_translate(0,translation,call_translate)