//function will return classes according to payload watch course 1 module 8 video

type Mods = Record<string, boolean | string>; //key - string, value - boolean or string

const obj: Mods = {};

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([className, value]) => {
        return Boolean(value);
      })
      .map(([className, value]) => className),
  ].join(' ');
}
