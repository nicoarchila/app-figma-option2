const NumbersFormat = {
  RateFormatter: (str: string, fix: number) => {
    return (+str/(Math.pow(10,fix))).toFixed(1).toString() + "%";
  },
  ProdNumberFormatter: (str: string, fix: number) => {
    let offuscatedNum = str;

    if(str.length > fix) {
      offuscatedNum = "******" + str.slice(str.length-fix,str.length);
    }

    return offuscatedNum;
  },
  CleanProductNum: (str: string) => {
    return (+str.replaceAll("-","")).toString();
  },
  CleanCurrencyFormat: (str: string) => {
    return str.replace(/[^0-9]/g, '');
  },
}

export default NumbersFormat;