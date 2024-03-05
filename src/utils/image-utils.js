function getImageURL(name) {
  return new URL(`../assets/project_img/${name}`, import.meta.url).href;
}

export { getImageURL };
