const highOrder=n=>{

    const oneFun=m=>{

        const twoFun=p=>{
            return m+n+p;
        }

        return twoFun;

    }
    return oneFun;
}


highOrder(1)(2)(2);
console.log(highOrder(1)(2)(2))