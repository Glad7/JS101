function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  let flag = true;

  if(dotSeparatedWords.length !== 4)
    return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();

    if (!isAnIpNumber(word)) {
      flag = false;
      break;
    }
  }

  return flag;
}