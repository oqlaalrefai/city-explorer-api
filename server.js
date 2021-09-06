const weather = require('./data/weather.json') ;
const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors')
app.use(cors())

// // a server endpoint 
// // our code will be here below and its create end point to our server
// app.get('/', // our endpoint name
//  function (req, res) { // callback function of what we should do with our request
//   res.send('Hello World ') // our endpoint function response
// })

app.get('/', function (request, response) { 
  console.log(weather)//its will return rh value from json file
  const filtereditem = weather.filter((item) => {weather.lat, weather.lon
  return 
  })
    //     return item.type === rh
})
// if(rh){
//   const filtereditem = weather.filter((item) => {
//     return item.type === rh
//   })
// if(filtereditem.length){
//   response.json(filtereditem)
// }
// else{response.send('no data found')}
// }
//   response.json(weather)

// })


 // kick start the express server to work
// local host by default locate on port 3000
 app.listen(3001,() => {
    console.log(`server started on port`);
})
// 300 is the port number
// listen will check if the port is available then it will run the code