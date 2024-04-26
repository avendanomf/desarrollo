export const hasValue = (value: any): boolean => {
  if (Array.isArray(value)) {
    return value.length > 0
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return !['', null, undefined, NaN, false].includes(value)
  }
}
