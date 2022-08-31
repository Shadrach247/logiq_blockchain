const express = require('express');
const app = express();
const { v1: uuid } = require('uuid');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const port = process.argv[2];
const rp = require('request-promise');

const bitcoin = new Blockchain();
const nodeAddress = uuid().split('-').join('');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/register-and-broadcast-node', function(req, res) {
    const newNodeUrl = req.body.newNodeUrl;
    const regNodesPromises = [];

    if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1)
    bitcoin.networkNodes.push(newNodeUrl);

    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/register-node',
            method: 'POST',
            body: { newNodeUrl: newNodeUrl },
            json: true
        };
        regNodesPromises.push(rp(requestOptions));
        
    });
    Promise.all(regNodesPromises)
    .then(data => {
        const bulkRegisterOptions = {
            uri: newNodeUrl + '/register-node-bulk',
            method: 'POST',
            body: {allNetWorkNodes: [...bitcoin.networkNodes, bitcoin.currentNodeUrl]},
            json: true
        };

        return rp(bulkRegisterOptions);
    })
    .then(data => {
        res.json({ note: 'New Node registered with network successfully.' });
    });
    
});

app.post('/register-node', function () {});
app.post('/register-nodes-bulk', function(req, res) {

});

app.get('/blockchain', function(req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function(req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender,
        req.body.recipient);
        res.json({note: `Transaction will be added on block ${blockIndex}.`}); 
});

app.get('/mine', function(req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock.hash;
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock.index + 1
    };

    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    bitcoin.createNewTransaction(12.5, "00", nodeAddress);
    
    res.json({
        note: "New block mined successfully",
        block: newBlock
    });

});

app.listen(port, function() {
    console.log(`listening on port ${port}...`);
});