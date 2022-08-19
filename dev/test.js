const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

//bitcoin.createNewBlock(3427, 'AVBN3YA2DH23L97', '7aqabn789kmba');
//bitcoin.createNewBlock(2222, 'ADW23YRU76JHD3B', '7aq21juon468p');
//bitcoin.createNewBlock(1111, 'KJUY43WERXCK90K', '81ndhetro935i');

bitcoin.createNewBlock(342759, 'AVBN3YA2DH23L97', 'AF6YETQWDNHG84');

bitcoin.createNewTransaction(100, 'ALEXVBN3YA2DH23L97', 'JENNM5TAQD567OKJL1');
bitcoin.createNewBlock(569237, 'A5QW29IJKU7E43K', 'IUY19R54JNMCVX');

bitcoin.createNewTransaction(100, 'ALEXVBN3YA2DH23L97', 'JENNM5TAQD567OKJL1');
bitcoin.createNewTransaction(50, 'ALEXVBN3YA2DH23L97', 'JENNM5TAQD567OKJL1');
bitcoin.createNewTransaction(400, 'ALEXVBN3YA2DH23L97', 'JENNM5TAQD567OKJL1');
bitcoin.createNewBlock(987123, 'KJ3F289UYCVXNJU', 'DG3YWTSR36UNLK1');

console.log(bitcoin.chain[2]);