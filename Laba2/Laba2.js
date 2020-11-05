// задание 1.1
function RetArg(item)
{
  return item;
}
// задание 1.2
function SummArgs(item1,item2)
{
  return item1+item2;
}
// задание 1.3
function ArrSqr()
{
  var arr = [1,2,"ee",3,4,"wer",5,6,"aa"];
  console.log("Стартовый массив: ");
  console.log(arr);
  for(var i=0;i<arr.length;i++)
  {
    if(isNaN(arr[i]))
    {
      arr[i]=0;
    }
    else
    arr[i]*=arr[i];
  }
  console.log("Итоговый массив: ");
  console.log(arr);
}

