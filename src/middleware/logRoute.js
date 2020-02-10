export const SESSION_STORAGE_KEY = "lastRoute"

export default function log({ from, next }) {
  sessionStorage.setItem(SESSION_STORAGE_KEY, from.name);
  return next();
}