var arr1 = window.prompt("Enter Something and see the  Frquency No."); 
var arr2 = arr1.toString();
var arr3 = [arr2[0]];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr2.length; i++)
{
        for (var j=i; j<arr2.length; j++)
        {
                if (arr2[i] == arr2[j])
                 m++;
                if (mf<m)
                { 
                  mf=m; 
                  item = arr2[i];
                }
        }
        m=0;
}
alert(item+" ( " +mf +" times ) ") ;
