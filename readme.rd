//__filename
//For ESModules you would wa
/*При этом для получения пути к файлу необходимо воспользоваться 
значением import.meta.url.substring(7), чтобы получить расположение текущего файла в рамках файловой системы.
 (Внимание, при использовании Windows потребуется другое число, на 1-3 больше чем 7.) */

app.use(bodyParser.urlencoded({extended:true}))       
.all('/code/', r => {
 console.log(path.join(process.cwd(), 'app.js'));
  fs.readFile(path.join(process.cwd(), 'app.js')
    //import.meta.url.substring(8)
    ,(err, data) => {
      if (err) throw err;
      r.res.set(headers).end(data);
    });           
})


               });
               });
