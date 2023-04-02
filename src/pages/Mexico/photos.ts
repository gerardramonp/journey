function importAll(r: any) {
  return r.keys().map(r);
}

const sorthPhotos = (photos: string[]) => {
  return photos.sort((a: string, b: string) => {
    const aNumber = parseInt(
      a.split('/')[a.split('/').length - 1].split('.')[0]
    );
    const bNumber = parseInt(
      b.split('/')[b.split('/').length - 1].split('.')[0]
    );
    return aNumber - bNumber;
  });
};

const rawTeotihuacanPhotos = importAll(
  (require as any).context(
    '../../assets/photos/mexico/puebla/teotihuacan',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);

export const rawCholulaPhotos = importAll(
  (require as any).context(
    '../../assets/photos/mexico/puebla/cholula',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);

export const rawAcapulcoPhotos = importAll(
  (require as any).context(
    '../../assets/photos/mexico/acapulco',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);

export const teotihuacanPhotos = sorthPhotos(rawTeotihuacanPhotos);
export const cholulaPhotos = sorthPhotos(rawCholulaPhotos);
export const acapulcoPhotos = sorthPhotos(rawAcapulcoPhotos);
