export const getMapFromArray = <T>(array: number[]): { [key: string]: T } => {
  return array.reduce((acc, item) => {
    return {
      ...acc,
      [item]: true,
    };
  }, {});
};
