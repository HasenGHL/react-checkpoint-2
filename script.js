function dotProduct(v1, v2) {

  let dotProduct = 0;
  for (let i = 0; i < v1.length; i++) {
    dotProduct += v1[i] * v2[i];
  }
  return dotProduct;
}

function areOrthogonal(v1, v2) {
  return dotProduct(v1, v2) === 0;
}
