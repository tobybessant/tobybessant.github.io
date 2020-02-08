export const SESSION_STORAGE_KEY = "lastRoute"

export default function log({ from, next }) {
  console.log(from);
  sessionStorage.setItem(SESSION_STORAGE_KEY, from.name);
  console.log(sessionStorage.getItem(SESSION_STORAGE_KEY));

  return next();
}