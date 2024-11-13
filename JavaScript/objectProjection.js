const ObjectProjection = (src, proto) => {
  const result = {};
  for (const key in proto) {
    if (proto.hasOwnProperty(key) && src.hasOwnProperty(key)) {
      if (
        typeof proto[key] === "object" &&
        proto[key] !== null &&
        typeof src[key] === "object"
      ) {
        result[key] = ObjectProjection(src[key], proto[key]);
      } else {
        result[key] = src[key];
      }
    }
  }

  return result;
};

const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
};

const proto = {
  prop11: {
    prop22: null,
  },
};

const res = ObjectProjection(src, proto);
console.log(res);
