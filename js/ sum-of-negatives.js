function countPositivesSumNegatives(input) {
    let count = 0;
    let b=0;
    
    if (!input ||  input.length===0) return [];
    input.forEach(x => {
      if (x > 0) count++;
      else b += x
    })
    return [count, b]
  }

  console.log(countPositivesSumNegatives([-1,-2,-3,1,2,-4,3]))