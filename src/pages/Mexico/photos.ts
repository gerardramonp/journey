import homePhoto from '../../assets/photos/mexico/home/teotihuacan.jpeg';

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

console.log(teotihuacanPhotos);

export const cholulaPhotos = [homePhoto];
