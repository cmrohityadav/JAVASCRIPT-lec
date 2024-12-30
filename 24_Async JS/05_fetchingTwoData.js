function fetchPostData(){
    return new Promise((pass,fail)=>{
        setTimeout(()=>{
            let bFlag=true;
            if(bFlag){
                pass("Post Data Fetched")
            }else{
                fail("Fail during fetching Post Data")
            }
        },3000)
    })
}

function fetchCommentData(){
    return new Promise((pass,fail)=>{
        setTimeout(()=>{
            let bFlag=true;
            if(bFlag){
                pass("Comment Data Fetched")
            }else{
                fail("Fail during fetching Comment Data")
            }
        },5000)
    })
}


async function getBlogData() {
    try {
        console.log("Fetching blog data...")
        const postData=await fetchPostData()
        
        const commentData=await fetchCommentData()
        console.log(postData)
        console.log(commentData)
        console.log("fetch completed")

        // alternative method
       const [post,comment]= await Promise.all([fetchPostData(),fetchCommentData()])
       console.log("using Promise all :",post,comment)
    } catch (error) {
        console.error("Error fetching blog data : ",error)
    }
}

getBlogData();



