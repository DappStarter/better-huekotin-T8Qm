require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet reflect stereo pulp hunt person fortune giggle'; 
let testAccounts = [
"0xf95fec79f5e6468ef7fac76f179bfc00b3ed4763a8a45900743fb8e683b59758",
"0x41a93500fc8f42eb1e4eefd244bbd48fe48daeea995a80b8387e30ac9d155b33",
"0x4afaa42958efd96f8d1f6d6ce28355fcf28df541d575e030eeeb7e0c12e27a13",
"0x071315e1a9c770961767b1f6086fcf158207932a886a909b043f3998ea9c9e21",
"0xf7a0c0e18ae611b5aac9441269fac7b1f03e358e995f4225d5b34004af48f63a",
"0xfc5b5c0095480735b12bf74995c80e7705dfcec0153235aed07e1d9feb120073",
"0xbec44ddf0e540735adf23b2d482edbd51a5e1c47965160f12b68e86355a4206d",
"0x0c1dee30a310591c54d7dbf6162a5bf820f9c93ebcd4a81fb67aef2f98440e22",
"0xd79df1fb7dc957d7181b8ba0687086b1191a4f17761ba440144bd4024680cbf5",
"0x707e369db535645f8b683959fe63c27deb2373621a6a56caa1b61c7be8953835"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

