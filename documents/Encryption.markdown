---
layout: narrow
title: Encryption
---
<h4>Encryption</h4>
<p>Let us bring to mind two very famous individuals in computer science: Alice and Bob. Alice has a message (a payload). 
She wants to send her message to Bob, however she wants only herself and Bob to be able to read the message, so she encrypts it: she modifies the 
payload such that without knowing a certain secret, the data contained within the payload is gibberish.</p>
<p>She first tries to shift all characters by a value of one such that 'a' becomes 'b', 'b' becomes 'c', etc. Unfortunately she notices that an attacker 
would only need to try 36 shift-values to break her encryption, as only 36 shift-values exist (assuming Alice's message is case-independent alphanumeric).
Alice decides to use one-way mathematical functions. These are functions where outputs are very easy to compute for inputs but inputs are very hard to 
compute for outputs. Of course this means it is very hard for Bob to get the payload (input) from the encrypted payload (output), so Alice has to pick 
a one-way mathematical function that is only hard to compute inputs from outputs if a secret isn't known. Alice can almost start encrypting and decrypting 
messages to and from Bob, but she has to get the secret to Bob. How does she send the unencrypted secret to Bob without revealing the secret to spys that
are watching in on their conversation? Thankfully, some very smart people figured this out a long time ago, which Alice discovers by researching the
Diffie-Hellman key exchange. This method, despite being decades old, remains elegant and easy to follow:   
<img src="/Assets/images/Diffie_Hellman.png" width="100%" height="100%"></p>
<p>Key exchanges are often thought of in terms of mixing colors, which itself is a one-way mathematical function:
<img src="/Assets/images/Diffie_Hellman_color.png" width="100%" height="100%"></p>
<p>With this methodology in place, even a man-in-the-middle (MITM) tracking the entirety of Alice and Bobs conversation will only attain the values g, n,
A and B. The MITM will not attain the private values a or b, which are needed to derive the secret. The MITM could try every possible value of a or b 
from 0 to n, verifying which a or b is used by Alice and Bob based on whether the value produces the output A or B. However, setting a large value n 
(typically 2048 or 4096 bits), ensures that such an effort would take an infeasibly long time. Consider that the attacker might have to compute 2^4096 
values to guarantee success, and that there exists 10^80 atomis n the observable universe, which is substantially less than even 2^320.</p>
<p>An interesting point to note is that it is important to ensure that g when raised by x and then operated on by modulo n, should output all values
from 0 to n as x approaches infinity. Consider the case where we g equals 2. Suddenly, the output space is reduced logarithmically to powers of two only:
2, 4, 8, etc. Prime numbers are useful as they tend to ensure that the output space covers all output values from 0 to n. Note that Alice and Bob's shared secret is not the same as their secret key. The secret is run through a key derivation function to produce 
a set of symmetric keys that Alice and Bob can use to encrypt and decrypt messages to and from one another.</p>
<p>Let us now look to asymmetric encryption: encryption where the key responsible for encryption is distinct from the key responsible for decryption.
Public key cryptography involves asymmetric encryption. In public key cryptography, Alice and Bob each have a private-public key-pair. Data encrypted with
the public key can be decrypted with the private key, and data encrypted with the private key can be decrypted with the public key. The public key is 
shared, the private key is not. Thus if Alice encrypts a message with Bob's public key, only Bob (who holds the matching private key) can decrypt it. 
Alice will also digitally sign the message, by adding a header that is encrypted with her private key and can only be decrypted with her public key. Bob
has Alice's public key and decrypt the header, to validate that the message sent was digitally signed by Alice's private key, and thus that Alice was the 
sender of the message. RSA is one of the most commonly used public-private key-pair generating algorithms.</p>
<p>Despite our rigorous discussion of symmetric and asymmetric encryption, we have still yet to fully develop a secure means of encryption between Alice 
and Bob. This is because a MITM who can impersonate as Alice to Bob and as Bob to Alice if aware that they are initiating a secure communication. Thus, the 
MITM generates two shared secrets, one between himself and Alice, and one between himself and Bob. Any encrypted message sent by Alice is decrypted by the 
MITM with one secret key, and re-encrypted and delivered to Bob with another secret key. Thus, Alice and Bob may ahve an entire digital conversation, without
realising that it is coordinated by and entirely visible to the MITM.</p>
<p>To solve for this, we introduce a third party: the certificate authority (CA). The certificate digitally signs a certificate that is held by a verified
server. Before initiating a secure key exchange with a given server, the client can check that the server has a digital certificate that has been digitally
signed by a trusted certificate authority. The client has a list of trusted certificate authorities embedded in their operating system and web browser.</p>