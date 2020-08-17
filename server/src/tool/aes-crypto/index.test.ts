import { AesCrypto } from '.';
import { assert } from 'chai';

describe.only('Testing "./tool/aes-crypto"', () => {
  it('En/Decrypt in "aes-128-gcm"', async () => {
    const aes = new AesCrypto('./keys.aes');
    await aes.makeFile('aes-128-gcm');
    assert.isTrue(await aes.exist);

    const raw = 'hello world';
    const enc = aes.encrypt(raw);
    const dec = aes.decrypt(enc);

    assert.strictEqual(raw, dec);
    await aes.delete();
  });
  
  it('En/Decrypt in "aes-128-ccm"', async () => {
    const aes = new AesCrypto('./keys.aes');
    await aes.makeFile('aes-128-ccm');
    assert.isTrue(await aes.exist);

    const raw = 'hello world';
    const enc = aes.encrypt(raw);
    const dec = aes.decrypt(enc);

    assert.strictEqual(raw, dec);
    await aes.delete();
  });
  it('En/Decrypt in "aes-192-gcm"', async () => {
    const aes = new AesCrypto('./keys.aes');
    await aes.makeFile('aes-192-gcm');
    assert.isTrue(await aes.exist);

    const raw = 'hello world';
    const enc = aes.encrypt(raw);
    const dec = aes.decrypt(enc);

    assert.strictEqual(raw, dec);
    await aes.delete();
  });
  
  it('En/Decrypt in "aes-192-ccm"', async () => {
    const aes = new AesCrypto('./keys.aes');
    await aes.makeFile('aes-192-ccm');
    assert.isTrue(await aes.exist);

    const raw = 'hello world';
    const enc = aes.encrypt(raw);
    const dec = aes.decrypt(enc);

    assert.strictEqual(raw, dec);
    await aes.delete();
  });

  it('En/Decrypt in "aes-256-gcm"', async () => {
    const aes = new AesCrypto('./keys.aes');
    await aes.makeFile('aes-256-gcm');
    assert.isTrue(await aes.exist);

    const raw = 'hello world';
    const enc = aes.encrypt(raw);
    const dec = aes.decrypt(enc);

    assert.strictEqual(raw, dec);
    await aes.delete();
  });
  
  it('En/Decrypt in "aes-256-ccm"', async () => {
    const aes = new AesCrypto('./keys.aes');
    await aes.makeFile('aes-256-ccm');
    assert.isTrue(await aes.exist);

    const raw = 'hello world';
    const enc = aes.encrypt(raw);
    const dec = aes.decrypt(enc);

    assert.strictEqual(raw, dec);
    await aes.delete();
  });
  
  it('En/Decrypt in "chacha20-poly1305"', async () => {
    const aes = new AesCrypto('./keys.aes');
    await aes.makeFile('chacha20-poly1305');
    assert.isTrue(await aes.exist);

    const raw = 'hello world';
    const enc = aes.encrypt(raw);
    const dec = aes.decrypt(enc);

    assert.strictEqual(raw, dec);
    await aes.delete();
  });
});
