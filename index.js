class hashMap {
  constructor(size = 31, loadFactor = 0.75) {
    this.buckets = new Array(size).fill(null).map(() => []);
    this.size = size;
    this.count = 0;
    this.loadFactor = loadFactor;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    hashCode = hashCode % this.size;
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i] = [key, value];
        return;
      }
    }

    bucket.push([key, value]);
    this.count++;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [currentKey, currentValue] = bucket[i];
      if (currentKey === key) {
        return currentValue;
      }
    }
    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket.length === 0) {
      return false;
    } else if (bucket.length > 0) {
      return true;
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [bucketKey] = bucket[i];
      if (bucketKey === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.count;
  }

  clear() {
    this.buckets = new Array(size).fill(null).map(() => []);
    this.count = 0;
  }

  keys() {
    const newArr = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        newArr.push(key);
      }
    }
    return newArr;
  }

  values() {
    const newArr = [];

    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        newArr.push(value);
      }
    }
    return newArr;
  }

  entries() {
    const [...hashKeys] = this.keys();
    const [...hashValues] = this.values();

    return [hashKeys, hashValues];
  }
}

const test = new hashMap();
test.set("zsnaasadsddddasdabc", "gela");
test.set("zsnaasadsddddasdabc", "gela");
test.get("zsnaasadsddddasdabc");
test.has("zsnaasadsddddasdabc");
test.length();
test.keys();
test.values();
test.entries();
