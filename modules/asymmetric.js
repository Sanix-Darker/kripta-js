import forge from 'node-forge';
import keypair from 'keypair';


export class KriptaRSA {

    constructor(){
        this.keysize = 1024;
        this.public_key = ""
        this.private_key = ""
    }

    // Setters and getters
    getKeySize(){
        return this.keysize
    }
    setKeySize(m){
        this.keysize = m
    }

    // Setters and getters
    getPublicKey(){
        return this.public_key
    }
    setPublicKey(m){
        this.public_key = m
    }


    // Setters and getters
    getPrivateKey(){
        return this.private_key
    }
    setPrivateKey(m){
        this.private_key = m
    }

    generateRSAKeyPair() {
        return keypair();
    }

    autoSet() {
        const keyPair = this.generateRSAKeyPair();
        this.setPrivateKey(keyPair.private);
        this.setPublicKey(keyPair.public);
    }

    // To convert Public key to string
    getPubKeyPem(keypair) {
        return forge.pki.publicKeyToPem(keypair.publicKey);
    }

    encrypt(pubkey, stringToBeEncrypted) {
        let publicKey = forge.pki.publicKeyFromPem(pubkey);
        let buffer = forge.util.createBuffer(stringToBeEncrypted, 'utf8');
        let binaryString = buffer.getBytes();
        let encrypted = publicKey.encrypt(binaryString, 'RSA-OAEP', {
            md: forge.md.sha256.create(),
            mgf1: {
                md: forge.md.sha256.create()
            }
        });
        return forge.util.encode64(encrypted);
    }

    decrypt(encryptedString) {
        let decrypted = forge.pki.privateKeyFromPem(this.getPrivateKey()).decrypt(forge.util.decode64(encryptedString), 'RSA-OAEP', {
            md: forge.md.sha256.create(),
            mgf1: {
                md: forge.md.sha256.create()
            }
        });
        return decrypted;
    }

}
