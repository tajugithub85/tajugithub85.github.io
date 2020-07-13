

  var sumof3 = prompt("Enter sum of multiple of 3",  " ");
  var sumof5 = prompt("Enter sum of multiple of 5", " ");
  var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % sumof3 === 0 || x % sumof5 === 0)
    {
       sum += x;
    }
}
alert("the sum of multiple of 3 and 5 is  " + sum);
