export const shuffle = arr => arr.sort(() => Math.random() - 0.5);

export const randomid = (length = 25) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456780'.split('')
  return shuffle(letters).slice(0,length).join('')
}

export const array2object = array => array.reduce((acc, el) => {
  acc[el[0]] = el[1]
  return acc
}, {})