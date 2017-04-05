/*
  You can write overloaded functions in TypeScript.
  Of course this is how function overloading is achieved in JavaScript (for example in libraries like jQuery).
  In JavaScript there is function overloading.
 */

/**
 * Given an string, it reverses it
 * @param string to reverse
 */
export function reverse(str: string): string;
/**
 * Given an array, it reverses it
 * @param array with stuff to reverse
 */
export function reverse<T>(array: T[]): T[];
export function reverse<T>(arg: string | T[]): string | T[] {
    if (typeof arg === "string") {
        return arg.split("").reverse().join("");
    } else {
        return arg.slice().reverse();
    }
}

reverse([1, 2, 3]);
reverse("123");

/**
 * This function does in exactly the same way as the upper function, but it appears differently in the auto-completion.
 * Using the previous version can provide different documentation for each "overload".
 * @param arg string or an array<T>
 */
export function otherReverse<T>(arg: string | T[]): string | T[] {
    if (typeof arg === "string") {
        return arg.split("").reverse().join("");
    } else {
        return arg.slice().reverse();
    }
};

otherReverse([1, 2, 3]);