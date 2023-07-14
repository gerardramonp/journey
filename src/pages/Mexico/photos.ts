function importAll(r: any) {
  return r.keys().map(r);
}

const sortPhotos = (photos: string[]) => {
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

const rawCancunPhase1Photos = importAll(
  (require as any).context(
    '../../assets/photos/mexico/cancun/phase1',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);

const rawCancunPhase2Photos = importAll(
  (require as any).context(
    '../../assets/photos/mexico/cancun/phase2',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);
const rawCancunDespedidaPhotos = importAll(
  (require as any).context(
    '../../assets/photos/mexico/cancun/despedida',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);

const rawLondonPhotos = importAll(
  (require as any).context(
    '../../assets/photos/london',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);

const rawRomePhotos = importAll(
  (require as any).context(
    '../../assets/photos/rome',
    false,
    /\.(png|jpe?g|svg|jpg|PNG|JPG)$/
  )
);

export const teotihuacanPhotos = sortPhotos(rawTeotihuacanPhotos);
export const cholulaPhotos = sortPhotos(rawCholulaPhotos);
export const acapulcoPhotos = sortPhotos(rawAcapulcoPhotos);
export const cancunPhase1Photos = sortPhotos(rawCancunPhase1Photos);
export const cancunPhase2Photos = sortPhotos(rawCancunPhase2Photos);
export const cancunDespedidaPhotos = sortPhotos(rawCancunDespedidaPhotos);
export const londonPhotos = sortPhotos(rawLondonPhotos);
export const romePhotos = sortPhotos(rawRomePhotos);
