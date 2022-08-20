const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

//bitcoin.createNewBlock(3427, 'AVBN3YA2DH23L97', '7aqabn789kmba');
//bitcoin.createNewBlock(2222, 'ADW23YRU76JHD3B', '7aq21juon468p');
//bitcoin.createNewBlock(1111, 'KJUY43WERXCK90K', '81ndhetro935i');

//bitcoin.createNewBlock(342759, 'AVBN3YA2DH23L97', 'AF6YETQWDNHG84');

//bitcoin.createNewTransaction(100, 'ALEXVBN3YA2DH23L97', 'JENNM5TAQD567OKJL1');
//bitcoin.createNewBlock(569237, 'A5QW29IJKU7E43K', 'IUY19R54JNMCVX');

//bitcoin.createNewTransaction(100, 'ALEXVBN3YA2DH23L97', 'JENNM5TAQD567OKJL1');
//bitcoin.createNewTransaction(50, 'ALEXVBN3YA2DH23L97', 'JENNM5TAQD567OKJL1');
//bitcoin.createNewTransaction(400, 'ALEXVBN3YA2DH23L97', 'JENNM5TAQD567OKJL1');
//bitcoin.createNewBlock(987123, 'KJ3F289UYCVXNJU', 'DG3YWTSR36UNLK1');

const previousBlockHash = '23RGH45KMNLOPIZXACV345G7H89N';

const currentBlockData = [
    {
        amount: 10,
        sender: 'A56DGHI899GVBKLS',
        recipient: '34GADFTICBZNXML',
    },
    {
        amount: 65,
        sender: 'A56DGHI899GVBKLS',
        recipient: '34GADFTICBZNXML',
    },
    {
        amount: 40,
        sender: 'A56DGHI899GVBKLS',
        recipient: '34GADFTICBZNXML',
    }
];

const nonce = 156120;

//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

//console.log(bitcoin);