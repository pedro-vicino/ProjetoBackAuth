export const isNameValid = (name: string): boolean => {
  const nameRegex = /^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/;

  console.log(name);
  return nameRegex.test(name);
};
