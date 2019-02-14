const express = require('express');

const api = require('./api');

const server = express();

server.get(api.CHANNELS_URL, (req, res)=>{
    res.json(require('./data/channels.json'));
})

server.get(api.RECOMMEND_URL, (req, res)=>{
    res.json(require('./data/recommend.json'));
})

server.get(api.NEW_URL, (req, res)=>{
    res.json(require('./data/new.json'));
})

server.listen(8000, (error)=>{
    if(error){
        console.log('服务器启动失败');
    }else{
        console.log('服务器启动成功');
    }
})
