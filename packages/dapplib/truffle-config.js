require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index regret oven proud harvest pave army giggle'; 
let testAccounts = [
"0x58a70b7fa64b7afefc497b38e58f09aa9165fad489926e79ebe4b85e0dc93e35",
"0x72b9acca5139678da6cd0e8fbc81ca4d9e1d4b518d62da5d9aaa2753b2e77cea",
"0xffb75f1dc5b5942754da86943bb56fab48a2311ce9ae4280c7f1064fda7273b3",
"0xc34d0e0e783a64d27a3d01c0f6a304289cf7f622d969e69cc151abfff42a5693",
"0x5cdeb34529cb5170c9da9b7165ed2fd2a6cb65ea146a1f907008fdac46bc4263",
"0xc01219a7ba1a5c19c6292d9522d8f40c20750de51949ee783d6c5b524f4752f7",
"0xc0ceec3be10502c87150e373458c183d309e464cada421ad8a7697674f7ceb84",
"0xa0e8bed37288612fb1e727090a4494550b87358653de39291529890a7b9a6c28",
"0x8ada6873a15dd7053ac028dd033e715f0b290027fceea9ec619ed9d783a95e60",
"0x89824590172f78bdd53ef7958419268f54bb7610c4f98be5c1da6ec4e9f3d8ba"
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

