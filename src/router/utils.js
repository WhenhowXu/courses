export function lazyLoad(path) {
  return () => import(`@/views/${path}`);
}
