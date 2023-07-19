import placeholder from '../../public/assets/no-image.jpg'

export function getImage(path, withImage) {
    return path ? `https://image.tmdb.org/t/p/w${withImage}${path}` : placeholder ;
}
