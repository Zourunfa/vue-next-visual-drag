type IsUnion<T, U = T> = T extends T ? [Exclude<T, U>] extends [never] ? false : true : never