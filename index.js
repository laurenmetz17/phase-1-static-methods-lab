class Formatter {
  //add static methods here
  static capitalize(string) {
    return (string.charAt(0)).toUpperCase() + string.slice(1,string.length) 
  }

  static sanitize(string) {
    let sanitized = '';
    for(let i = 0; i< string.length; i++) {
      if(string.charAt(i) == ' ' || string.charAt(i) == '-' || string.charAt(i) =="'") {
        sanitized = sanitized + string.charAt(i);
      }
      else if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        sanitized = sanitized + string.charAt(i);
        console.log(sanitized);
      }
      else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        sanitized = sanitized + string.charAt(i);
        console.log(sanitized);
      } 
      else if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
        sanitized = sanitized + string.charAt(i);
        console.log(sanitized);
      }
    }
    return sanitized;
  }

  static titleize(string) {
    let words = string.split(' ');
    console.log(words);
    let capitalized = '';
    words.forEach(word => {
      if(word == 'a' || word == 'an' || word == 'the' || word == 'but' || word =='of' || word == 'and' || word == 'for' || word == 'at' || word == 'by' || word == 'from') {
        if(word == words[0]) {
          word = word.charAt(0).toUpperCase() + word.slice(1,word.length);
          capitalized = capitalized + word;
          console.log(word);
        }
        else {
          capitalized = capitalized + ' ' + word;
        }
      }
      else {
        if(word == words[0]) {
          word = word.charAt(0).toUpperCase() + word.slice(1,word.length);
          capitalized = capitalized + word;
          console.log(word);
        }
        else {
          word = word.charAt(0).toUpperCase() + word.slice(1,word.length);
          capitalized = capitalized + ' ' + word;
        }
      }
    })
    return capitalized;
  }
}