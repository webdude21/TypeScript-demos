/**
 * When you get some type from somewhere, and you're certain that it's not undefined, or you just don't want to check.
 * You can use '!' to assert that the type is not null/undefined.
 * @param str possibly undefined
 */
export function toUpperCase(str: string | undefined | null): string {
    return str!.toUpperCase();
}

export function printFirstLetter(str: string | undefined | null): void {
    if (str === undefined) {
        return;
    }

    // here str is narrowed down to just string | null;
    if (str === null) {
        return;
    }

    // here we're left with just string;
    str.charAt(0);
}

/**
 * Remove null/undefined in JS style
 * @param str possibly undefined
 */
export function justRemoveNull(str: string | undefined | null) {
    return str || "";
}

export function nonNullArgFunc(str: string) {
    return str;
}

// when trying to pass null you get compiler error (if you've enabled the flag "strictNullChecks")
// nonNullArgFunc(null);