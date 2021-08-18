function compose(fns) {
  return fns.reduce((total, curr) => (...args) => total(curr(...args)));
}
