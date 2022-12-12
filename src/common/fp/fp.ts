/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
export const always =
  <T extends unknown>(v: T) =>
  () =>
    v;
