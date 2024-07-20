// function system (a,b){
//     return a*(2**b)
// }
// console.log(system(10,3));
//task 2
// function system (a){
// let s=""
// // if(typeof(a)=="string") return [Number(a),"is number"]
// return function (b){
//     // if(typeof(b)=="number") return [b.toString,"is string"]
//     if(typeof(a)=="number") return s+=a
// if(typeof(b)=="string") return [Number(b),"is number"]

//     }
// }
// let ans=system(32)
// console.log(ans(""));
// task2
// function system (a){
//     return function(b){
//         return a+=b
//     }
// }

// console.log(system(2)(5));
//task 4
// function system (a,b){
//     return a/(2**b)
// }
// console.log(system(80,3));
//task 5
// function system (a){
//     let s=a
//     return function(){
//         if(a%2==0)return s++
//     if(a%2!=0)return s--

//     }
// }
// let ans=system(6)
// console.log(ans());
// console.log(ans());
// console.log(ans());
// function system (a){
//     let p0=3
//     let p1=0
//     let p2=2
//     let pn=0
//     for(let i=3;i<=a;i++){
// pn=p1+p0
// p0=p1
// p1=p2
// p2=pn
//     }
//     return pn
// }
// console.log(system(8));
// task 7
// function system(a){
//     return function(b=null){
//         if(b==null)return a
//         return b
//     }
// }
// let ans=system(19)
// console.log(ans());
// console.log(ans());
// task 8
// function system (a,b){
//     return a.repeat(b)
// }
// console.log(system("ab"));
// task 9
// function system (a,b){
//     return function(a1,b1){
//         return function(a2,b2){
//             return (a*a1*a2)+(b*b1*b2)
//         }
//     }
// }
// console.log(system(1,2)(1,1)(2,3));
// task 10
// function system (a,b){
//     return a.repeat(b)
// }
// console.log(system("ab"));
///////////////////////////////////gome task
//task 1
// function system (a){
//     return a.at(0).toUpperCase()+a.slice(1)
// }
// console.log(system("world"));
// task 2
// function system (a,b){
//     let s=0
//     for(let i=a.length-1;i>=0;i--){
//         if(a[i]==b)s++
//     }
//     return s
// }
// console.log(system("hello","l"));
// task 3
// function system (a,b){
//         let s=""
//         for(let i=a.length-1;i>=0;i--){
//           s+=a[i]
//         }
//         return s
//     }
//     console.log(system("hello"));
// task 4
// function system (a,b){
//     return a.repeat(b)
// }
// console.log(system("hello",3));
// task 5
// function system (a){
//     s=''
//     let k="qQwWrRtTpPsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM"  
//     for(let i=0;i<a.length;i++){
// for(let r=0;r<k.length;r++){
//     if(a[i]==k[r])s+=a[i]       
// }
//     }
//     return s
// }
// console.log(system("helloo"));
//task 6
// function system (a){
//     s=0
//     let m="aAeEyYuUiIoO"  
//     for(let i=0;i<a.length;i++){
// for(let r=0;r<m.length;r++){
//     if(a[i]==m[r])s++       
// }
//     }
//     return s
// }
// console.log(system("hello"));
// task 7
// function system (a){
   
//    let s=''
// for(let i=0;i<a.length;i++){
//     if(i==0)s+=a[i].toUpperCase();i
//     if(a[i]==" "){s+=" "+a[i+1].toUpperCase();
//     i+=2
// }
//         s+=a[i]

// }
// return s
// }
// console.log(system('hello world'));
//task 8
// function system (a){
//     s=''
//     for(let i=a.length-1;i>=0;i--){
//         s+=a[i]
//     }
//     return s==a
// }
// console.log(system("sda"));
// task 9
// function system (a){
//     let r=a.split(" ")
//     let s=''
//     for(let i=r.length-1;i>=0;i--)s+=" "+r[i]
// return s
// }
// console.log(system("madad ssasss "));
//task 10
// function system (a,b){
//   let  s=''
//   let y=''
//     for(let i=0;i<=a.length-1;i++){
//         if(a[i]==b){y+=a[i]}
//      else{s+=a[i]}   
//     }
//     return s
// }
// console.log(system("hello world", "l"));
//task 11

// function system(a){
//   let s=''
//   for(let i=0;i<=a.length-1;i++){
//     if(a[i]==a[i+1])i+=1;
//     s+=a[i]
//   }
//   return s
// }
// console.log(system(""));
// task 12
// function system(a){
//     let s=a.at(0)
//     let d=a.at(-1)
//     // return a.replace(a.at(0),d).replace(a.at(-1),s)
//     let r=a.slice(1,-1)
//     return d+r+s
// }
// console.log(system("hello"));
// task 13
// function system (a){
//     min=9999999
//     s=''
//     let y=a.split(" ")
//     for(let i=0;i<=y.length-1;i++){
//         if(y[i].length<min)s=y[i];min=y[i].length
//     }
//     return s
// }
// console.log(system("hello wldo"));
// task 14
// function system (a){
//     min=9999999
//     s=''
//     let y=a.split(" ")
//     for(let i=0;i<=y.length-1;i++){
//         if(y[i].length<min)s=y[i];min=y[i].length
//     }
//     return s
// }
// console.log(system("hello wldo"));
let a=2311313
console.log(a.sort);
