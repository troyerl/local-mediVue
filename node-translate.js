const api = "AIzaSyAK6U6DAH5OZcTnHd7B4PyJd4LsuW3Rjnc";
const googleTranslate = require('google-translate')(api);

exports.translator = function(data) {
  return new Promise((resolve, reject) => {
    googleTranslate.translate(data.text, data.language, function(err, translation) {
      if (err) {
        reject(error);
      }
      
      resolve(translation.translatedText)
    });
  })
}