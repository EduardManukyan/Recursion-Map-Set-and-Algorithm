const tree = {
  value: 12,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: -10,
        next: null,
      },
    },
  },
};

const fn = (tree, res = []) => {
  if (tree === null || tree === undefined) {
    return res;
  }
  return fn(tree.next, [...res, tree.value]);
};

console.log(fn(tree)); // [12, 20, 30, -10]
