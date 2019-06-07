export const isRequired = (name) => {
  throw new Error(`${name} property is required!`);
}
