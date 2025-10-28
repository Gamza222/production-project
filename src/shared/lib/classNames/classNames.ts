// function will return classes according to payload watch course 1 module 8 video

export type Mods = Record<string, boolean | string | undefined> // key - string, value - boolean or string

export function classNames (
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => {
                return Boolean(value)
            })
            .map(([className, _]) => className)
    ].join(' ')
}
