console.log(((n, m, x) => {
  let all = 0;
  for(let i = 0; i < x; i++) {
    all += n,
    n += m
  };
  return all
})(4, 3, 5));
