function max1(...numbers){
  var ans = numbers[0];

  for (var i = 0; i < numbers.length; i++)
    if (numbers[i] > ans)
      ans = numbers[i];
  return (ans);
}
console.log(max1(1, 15, 3, 6));
