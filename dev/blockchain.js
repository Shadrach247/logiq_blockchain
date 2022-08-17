function Blockchain () {
    this.chain = [];
    this.transaction = [];

    Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.newTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash,
        };

        this.newTransactions = [];
    };
}