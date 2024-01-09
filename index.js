const http = require('http');
const data = require('./data')

const server = http.createServer((request,response)=>{
    if(request.url ==='/'){
    response.write('hello world');
    response.end();
    }else if(request.url === '/json'){
    const stringData=JSON.stringify(data)
    response.write(stringData);
    response.end();
    }

})
server.listen(5000,()=>{
    console.log('sever ready')
})