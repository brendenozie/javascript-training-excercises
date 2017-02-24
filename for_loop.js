var str="#";
for (var counter=0;counter<=7;counter++){
  if (counter==0){
    console.log(str)
  }
  else if(str.length==7){
    break;
  }
  else{
    str+="#";console.log(str);
  }
}
