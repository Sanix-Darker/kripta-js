# kripta-js

An simple implementation of a Symmetric(AES) and Asymmetric(RSA) encryption.

## Features

- Generate RSA keys like
- Encrypt/Decrypt messages, files, binaries on symmetric or asymmetric

## How to use

- Install the lib
```bash
yarn add kripta-js
# or
npm install kripta-js
```

- To use the **symmetric encryption** (AES):
    - Schema :

        <img
            src="https://github.com/Sanix-Darker/kripta/raw/master/images/s.png"
            alt="drawing"
            width="400"
        />
    - Code :
        ```javascript
        import {KriptaAES} from "kripta-js";

        const message = "secret-message"
        const secret_key = "secret-code-password"

        const k = KriptaAES()
        // to encrypt
        const encrypted_msg = k.encrypt(message, secret_key)

        // to decrypt
        console.log(k.decrypt(encrypted_msg1, secret_key).decode())
        // secret-message 
        ```

- To use an **asymmetric encryption** (RSA):
    - Schema :

        <img
            src="https://github.com/Sanix-Darker/kripta/raw/master/images/as.gif"
            alt="drawing"
            width="400"
        />
    - Code example:
        ```javascript
        import {KriptaRSA} from "kripta-js";

        const message = "secret-message"
        const pub_key = `-----BEGIN PUBLIC KEY-----
        ....
        -----END PUBLIC KEY-----`

        const k = KriptaRSA()
        k.setPublicKey(pub_key)
        // To encrypt a message
        const encrypted_msg = k.encrypt(k.getPublicKey(), message.encode())

        const priv_key = `-----BEGIN RSA PRIVATE KEY-----
        .....
        -----END RSA PRIVATE KEY-----`

        k.setPrivateKey(priv_key)
        // To decrypt
        console.log(k.decrypt(encrypted_msg).decode())
        // secret-message 
        ```

