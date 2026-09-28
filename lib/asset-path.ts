// Prefixes a /public asset path with the site's basePath (e.g. /amirah on GitHub Pages).
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
