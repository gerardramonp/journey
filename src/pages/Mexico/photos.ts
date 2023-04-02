function importAll(r: any) {
  return r.keys().map(r);
}

export const teotihuacanPhotos = importAll(
  (require as any).context(
    '../../assets/photos/mexico/puebla/teotihuacan',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);

export const cholulaPhotos = importAll(
  (require as any).context(
    '../../assets/photos/mexico/puebla/cholula',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);
