// function system (a){
//     s=''
//     cnt=0
//     for(let i=0;i<=a.length-1;i++){
//         for(let f=0;f<=a.length-1;f++){
// if(a[i]==a[f])cnt++
//         }
//         if(cnt==1)s+=a[i]
//     }
//     return 
// }
// console.log(system("swiss"));
// task 2
// function system (a){
//     let n="qQwWeErRtTyYuUiIoOpPaAsSdDfFgGhHjJkKlLzZxXcCvVbBnNmM"
//     for(let i=0;i<=a.length-1;i++){
//         for(let y=0;y<=n.length-1;y++){
//             if(a[i]==n[y])return false
//         }
//     }
//     return true
// }
// console.log(system("13141"));
// task 3
// function system (a,b){
//     return a.slice(0,b)
// }
// console.log(system("hello world", 5));
// task 4
// function system (a){
//     let s=''
//     let k="QWERRTYUIOPASDFGHJKLZXCVBNM"
//     for(let i=0;i<=a.length-1;i++){
//         {s+=a[i]
//         for(let f=0;f<=k.length-1;f++)
//             if(a[i+1]==k[f])s+="_"
//         }
//     }
//     return s.toLowerCase()
// }
// // console.log(system("JavaScript"));
// // task 5
// function system (a){
//     let k=a.split(" ")
//     let d=''
//     for(let i=0;i<=k.length-1;i++){
//         let av=k[i].at(0).toUpperCase();
//         let sm=k[i].at(-1).toUpperCase();
// d+=av+k[i].slice(1,-1)+sm+" "
//     }
//     return d
// }
// console.log(system("helo woeld"));
// function system (a){
//   let   s=""
//   for(let i=0;i<=a.length-1;i++){
//     if(a[i]=="")
//   }
// }
// function system (a){
//     let ans=''
//     for(let i=0;i<+a.length-1;i++){
//         if((a[i]>='a'&& a[i]<='z') || (a[i]>='A'&& a[i]<='Z') || (a[i]>='0'&& a[i]<='9') || a[i==" "])ans+=a[i]
//     }
//     return ans
// }
// console.log(system());
// function system (a){
//     s=''
//     for(let i=a.length-1;i>=0;i--){
//         s+=a[i]
//     }
//     return s==a
// }
// console.log(system("madam"));
// task 9
// function system (a){
//     k=a.split(" ")
//     s=''
//     for(let i=k.length-1;i>=0;i--){
//         s+=k[i]+" "
//     }
//     return s
// }
// console.log(system("helo world"));
// task 10
// function system (a){
//     let y=a.at(0)
//     let o=a.at(-1)
//     return o+a.slice(1,-1)+y
// }
// console.log(system("helo"));
////////////////////////////////////se2
// function system (a){
//     min=99
//    for(let i=a;i>0;i=Math.floor(i/10)){
//     if(i%10<min)min=i%10
//    }
//    return min

// }
// console.log(system(12340));
// task 2
// function system (a){
//     min=-99
//    for(let i=a;i>0;i=Math.floor(i/10)){
//     if(i%10>min)min=i%10
//    }
//    return min

// }
// console.log(system(12340));
// task 3
// function system (a,b){
//         min=""
//        for(let i=a;i<=b;i++){
//         min+=i+","

//        }
//        return min
    
//     }
//     console.log(system(1,4));
// task 4
// function system (a,b,c){
// return (a+b+c)+(a-b-c)+(a*b*c)+(a/b/c)+(a%b%c)
// }
// console.log(system(1,1,1));
// task 5
// function system (a){
//     let f=a.toString()
//     return f[Math.floor(f.length/2)]

// }
// 
// function system (){
//     let cnt=0
//     function  (a,b){
//         cnt++
//         if(cnt/2==1)return a+b
//         if(cnt/2==1)return a+b
//         if(cnt%2==1)return a+b
//         if(cnt%2==1)return a+b
//         if(cnt%2==1)return a+b

//     }
// }
// function system (a){
//    let cnt=0
//    function 
// function system (a){
//     cnt=0
//     let s=a.forEach(function (e,i,arr){
//         cnt+=e
//     })
//     return cnt
// }
// console.log(system([1,2,3,4,4,5,6,7]));
// function system (a){
//        let cnt=0
       
//     function system (a){
//         cnt=-9
//         let s=a.forEach(function (e,i,arr){
//             if(e>cnt)cnt=e
//         })
//         return cnt
//     }
//     console.log(system([1,2,3,4,4,5,6,7]));}
// function system (a){
//        let cnt=0
       
//     function system (a){
//         cnt=0
//         let s=a.forEach(function (e,i,arr){
//             if(e%2==0)cnt++
//         })
//         return cnt
//     }
//     console.log(system([1,2,3,4,4,5,6,7]));}
//
// function system (a,b){
//        let cnt=0
//      return  a.include(b)
   
//     }
//     console.log(system([1,2,3,4,4,5,6,7]));
// function system (a){
//            let cnt=0
//            let s=0
//       a.forEach(function(e,i,arr){
//         s+=a
//         cnt++
//       })
//        return s/cnt
//         }
//         console.log(system([1,2,3,4,4,5,6,7]));