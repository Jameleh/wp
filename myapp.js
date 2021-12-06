

import Express from "express";
//01catching error ReferenceError: fetch is not defined to fix this we write
//If you are using a node, the fetch method will not be available. And to use it, 
//you need to install the "node-fetch" package and then import to use it.
import fetch from "node-fetch";
const app = Express();
const port= process.env.PORT || 5432;
let token='';
var postData = JSON.stringify({
    'username' : 'gossjsstudent2017' ,
    'password' :'|||123|||456'
});
/*
var options = {
 path: new URL('https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token'),
  method: 'POST',
  headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'Content-Length': postData.length
     }
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  console.log('headers:', res.token);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(`Request on error ${e}`);
});

req.write(postData);
req.end();
*/
//02catching error TypeError: Cannot read property 'token' of undefined
//try ei write awaitin 53
app.get('/wordpress', async (req, res) => { 

   // const content = req.query.content; 
   try{
    const response = await fetch ( 
    'https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token', {
    method: 'POST', 
    body: postData,
    headers: {'Content-Type': 'application/json'}}
    ); 
    const data= await response.json();
    token=data.token;
    console.log(response);
  }
    catch(e){
      console.log(`catching error ${e}`)
    }})
    .get('/login', (req, res) => {
      res.send('itmo2021');
  });
 
   /*

    const wordpressResponse = await axios.post( 
    'https://wordpress.kodaktor.ru/wp-json/wp/v2/posts', 
    { content, title: 'leontevaira98', status: 'publish' }, 
    { 
    headers: { 
    Authorization: `Bearer ${token}`, */
    process.on('warning', (warning) => {
      console.log(warning.stack);
  })
    app.listen(port, () => console.log(`Server listening on port ${port}`));