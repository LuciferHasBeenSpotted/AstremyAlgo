console.log(((sentence) => {
  const letters = [];
  const isRepeated = [];
  const chars = sentence.toLowerCase().split('');
  for(const char of chars) {
    if((/[a-Az-Z]/).test(char)) {
      letters.includes(char) ? isRepeated.push(char) : letters.push(char);
    };
  };
  return isRepeated[0];
})("$_$. Il avait les yeux pleins d'argent"));
