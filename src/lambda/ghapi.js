const fetch = require('node-fetch').default;

export function handler(event, context, callback) {
  fetch('https://api.github.com/orgs/zeit/members')
  	.then(res => res.json())
  	.then(json => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json)
      })
    });

}
