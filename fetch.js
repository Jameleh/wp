import Express from "express";
//01catching error ReferenceError: fetch is not defined to fix this we write
//If you are using a node, the fetch method will not be available. And to use it, 
//you need to install the "node-fetch" package and then import to use it.
import fetch from "node-fetch";
const app=Express();
const port= process.env.PORT || 5432
const url0 = 'https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token';
const url1='https://wordpress.kodaktor.ru/wp-json/wp/v2/posts';
var postData0 = JSON.stringify({
    'username' : 'gossjsstudent2017' ,
    'password' :'|||123|||456'
});
const options0 = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;'
  },
  body: postData0
};
let token='';

app.get('/wordpress',async(req,res)=>
{
try{
  await fetch(url0, options0)
  .then((response) => response.json())
  
    .then(data=>{
       // debugger;
      token= data.token;
    })
  
     await fetch(url1,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;',
          'Authorization':`Bearer ${token}`
        },
        body:  JSON.stringify({
            'title':'itmo2021',
            'status':'publish',
            //and the content is a fragment of text received from the verifier
            'content':req.query.content
        })
      } )
  .then((response) =>

   response.json())
  
    .then(data=>{
       // debugger;

     console.log(data.id)
    
      res.set('Content-Type', 'text/plain')
      res.send(`${data.id}`)

})

   
}

  catch(e) {console.log(`Catchin an error ${e}`);}})
  .get('/login', (req, res) => {
    res.send('itmo2021');
});
app.listen(port, () => console.log(`Server listening on port ${port}`));