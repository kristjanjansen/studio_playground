export const shuffle = arr => arr.sort(() => Math.random() - 0.5);

export const randomid = (length = 25) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456780'.split('')
  return shuffle(letters).slice(0,length).join('')
}
