
async function test(description:string,fun1:any) {
    fun1();
}


test("This a dummy method" ,()=>{
    console.log("this is dummy function")
})


test("this is a second function", ()=>{
    console.log("This is a second function");
})