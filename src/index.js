const Hourglass = (num) => {
  let borderRow;
  let border;
  let spaces = 0;
  let numPatterSymbols = num;

  for (borderRow = 1; borderRow <= num; borderRow++) {
    for (border = 1; border <= spaces; border++) {
      process.stdout.write("  ");
    }
    
    for (border = 1; border <= numPatterSymbols; border++) {
      if (border === 1 || border === numPatterSymbols || borderRow === 1 || borderRow === num) {
        process.stdout.write("# ");
      } else {
        process.stdout.write("* ");
      }
    }
    
    if (borderRow <= num / 2) {
      spaces++;
      numPatterSymbols -= 2;
    } 
    else {
      spaces--;
      numPatterSymbols += 2;
    }
    console.log();
  }
};

Hourglass(20);
