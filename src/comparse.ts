const bbdArray: object[] = [];

function comparse(cookieArray: string[], bddArray: string[]): boolean {
  if (cookieArray === bddArray) {
    return true;
  } else {
    return false;
  }
}

export { comparse };
