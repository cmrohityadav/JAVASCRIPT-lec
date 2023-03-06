const webUrl="www.fb.com/rohit%21yadav";
const useAbleUrl=webUrl.replace(/%20/,"-");
console.log(useAbleUrl);


// now using pattern 
 const weblink=webUrl.replace(/%\d\d/,"-");
 console.log(weblink);