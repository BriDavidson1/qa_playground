function fancyPrint(firstString: string, secondString: string): string {
    return `${firstString}**********\n**********${secondString}`;
  }
  
  console.log(fancyPrint("fancy code", "confusing code"));