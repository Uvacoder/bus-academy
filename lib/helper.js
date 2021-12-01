export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function getFromLocalStorage(key) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
}
