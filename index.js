class hashMap {
  constructor(size = 31) {
    this.buckets = new Array(size).fill(null).map(() => []);
    this.size = size;
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
      if (bucket[i] === key) {
        bucket[i] = [key, value];
        return;
      }
    }

    bucket.push([key, value]);
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
        return true;
      }
    }
    return false;
  }
}

const test = new hashMap();
test.set("zsnaasadsddddasdabc", "gela");
test.get("zsnaasadsddddasdabc");
test.has("zsnaasadsddddasdabc");
test.remove("zsnaasadsddddasdabc");
