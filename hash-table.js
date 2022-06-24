const sha256 = require('js-sha256');

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let val = sha256(key).slice(0,8);
    val = parseInt(val, 16);
    return val;
  }

  hashMod(key) {
    let val = this.hash(key);
    val = val % this.capacity;
    return val;
  }

  insert(key, value) {
    let int = this.hashMod(key);

    if(this.data[int] === null) {
      this.data[int] = {key, value};
      }

      else {
      let val = this.data[int];
      this.data[int] = {key, value};
      this.data[int].next = val;
    }
    this.count++

  }

}

hashTable = new HashTable(2);

hashTable.insert("key-1", "val-1");
hashTable.insert("key-2", "val-2");
hashTable.insert("key-3", "val-3");

const pairC = hashTable.data[0];
const pairB = hashTable.data[1];
const pairA = hashTable.data[0].next;

console.log(pairC);
console.log(pairB);
console.log(pairA);

module.exports = HashTable;
