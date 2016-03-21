var superagent = require('superagent');
var url = './bulbasaur'
export const superExample = request.get(url, function(err, res){
      if (err) throw err;
        console.log(res.text);
});

