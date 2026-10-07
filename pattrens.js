//nested loops:-Runnaing loop inside another loop
//in this nested loops using patterns.as show in bellow

1.
//print bellow pattern
/*  *****
    *****
    *****
    *****  */

/*function printMatrix(n){
    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=n;j++){
           row+="*"
        }
        console.log(row)
    }
}printMatrix(4)*/

//print bellow pattern 
/* 1111
   2222
   3333
   4444   */

/*function printMatrix(n){
    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=n;j++){
           row+=i
        }
        console.log(row)
    }
}
printMatrix(4)*/

2.
//print inverted right angle triangle using stars
/* *
   **
   ***
   ****  */

/*function triangle(n){
    for(let i=1;i<=n;i++){
        row=""
        for(let j=1;j<=i;j++){
            row+="*"
        }
        console.log(row)
    }
} triangle(4)*/

//reverse of the right angle triangle
/* ****
   ***
   **
   *   */

/*function triangle(n){
    for(let i=n;i>=1;i--){
        row=""
        for(let j=1;j<=i;j++){
            row+="*"
        }
        console.log(row)
    }
} triangle(4)*/

3.
//print inverted right angle triangle using numbers
/*  1
    12
    123
    1234  */

    /*function triangle(n){
    for(let i=1;i<=n;i++){
        row=""
        for(let j=1;j<=i;j++){
            row+=j
        }
        console.log(row)
    }
} triangle(4)*/

//print reverse inverted right angle triangle using numbers
/*
1234
123
12
1    */

    /*function triangle(n){
    for(let i=n;i>=1;i--){
        row=""
        for(let j=1;j<=i;j++){
            row+=j
        }
        console.log(row)
    }
} triangle(4)*/

4.
//print bellow pattern
/* 1
   22
   333
   4444  */
  
   /*function triangle(n){
    for(let i=1;i<=n;i++){
        row=""
        for(let j=1;j<=i;j++){
            row+=i
        }
        console.log(row)
    }
} triangle(4)*/

//print bellow pattern
/* 4444
   333
   22
   1    */

/*function triangle(n){
    for(let i=n;i>=1;i--){
        row=""
        for(let j=1;j<=i;j++){
            row+=i
        }
        console.log(row)
    }
} triangle(4)*/

5.
//print flody's triangle
/* 1
   2 3
   4 5 6
   7 8 9 10  */
   /*let num=1
   let n=4
    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=i;j++){
            row+=num+" ";
            num++
        }
        console.log(row)
    }*/

   //print flody's triangle in reverse

   /*let num=1
   let n=4
    for(let i=1;i<=n;i--){
        let row=""
        for(let j=1;j<=i;j++){
            row+=num+" ";
            num++
        }
    }
        console.log(row)*/



6.
//pyramid pattern using stars
/*    *
    * * *
  * * * * *
* * * * * * *  */  
/*function pyramid(n){
    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
           for(let k=1;k<=2*i-1;k++) {
            row+="*"
           }
           console.log(row)
    }   
} 
pyramid(4) */

//reverse pyramid

/*function pyramid(n){
    for(let i=n;i>=1;i--){
        let row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
           for(let k=1;k<=2*i-1;k++) {
            row+="*"
           }
           console.log(row)
    }   
} 
pyramid(4) */


//pyramid pattern using stars
/*    *
    * * *
  * * * * *
* * * * * * *
* * * * * * *
  * * * * *
    * * *
      *  
 */  
/*function pyramid(n){
    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
           for(let k=1;k<=2*i-1;k++) {
            row+="*"
           }
           console.log(row)
    }    
    for(let i=n;i>=1;i--){
        let row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
           for(let k=1;k<=2*i-1;k++) {
            row+="*"
           }
           console.log(row)
    } 
}   
pyramid(4)*/


7.
/*  *
   * *
  *   *
 *     *  */
  /*function hollowPattern(n){
    for(let i=1;i<=n;i++){
        row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
        for(let k=1;k<=2*i-1;k++){
            if(i==1||k==1||k==2*i-1){
                row+="*"
            }
            else{
                row+=" "
            }
        }
       console.log(row)
    }
  }hollowPattern(4)*/

8.
/*   *     *
      *   *
       * *
        *    */

  /*function hollowPattern(n){
    for(let i=n;i>=1;i--){
        row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
        for(let k=1;k<=2*i-1;k++){
            if(i==1||k==1||k==2*i-1){
                row+="*"
            }
            else{
                row+=" "
            }
        }
       console.log(row)
    }
  }hollowPattern(4)*/
7.
//hellow pattern using stars
/*  *
   * *
  *   *
 *     *
 *     *
  *   *
   * *
    *    */

/*function hellowPattern(n){
    for(let i=1;i<n;i++){
        let row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
        for(let k=1;k<=2*i-1;k++){
        if(i==1||i==n||k==1||k==2*i-1){
            row+="*"
        }else{
            row+=" "
        }
    }
    console.log(row)
    }
    for(let i=n;i>=1;i--){
        let row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
        for(let k=1;k<=2*i-1;k++){
        if(k==1||k==2*i-1){
            row+="*"
        }else{
            row+=" "
        }
    }
    console.log(row)
}
}
hellowPattern(5)*/



//hellow pattern in square shape
 /*  * * * * *
     *       *
     *       *
     *       *
     * * * * *  */
/*function hellowPattern(n){
    for(let i=1;i<=n;i++){
        let row=""
        for(let j=1;j<=n;j++){
            row+=" "
        if(i==1||i==n||j==1||j==n){
            row+="*"
        }else{
            row+=" "
        }
        }
    console.log(row)
    }
    
}hellowPattern(5)*/


8.
//print bellow pattern
/*  *
    **
    ***
    ****
    ****
    ***
    **
    *       */

/*function hellowPattern(n){
    for(let i=1;i<n;i++){
        let row=""
        for(let j=1;j<=i;j++){
            row+="*"
        }
    console.log(row)
    }
    for(let i=n-1;i>=1;i--){
        let row=""
        for(let j=1;j<=i;j++){
            row+="*"
        }
        
    console.log(row)
}
}
hellowPattern(5)*/


//9.
//print inverted triangle using 0's and 1's 
/*
0 
1 0 
0 1 0 
1 0 1 0 
0 1 0 1 0 */

/*function zeroOne(n){
    for(let i=1;i<=n;i++){
        row=""
        for(let j=1;j<=i;j++){
            row+=(i+j)%2+" "
        }
        console.log(row)
    }
}zeroOne(5)*/
   

//9.
//print reverse inverted triangle using 0's and 1's
/*
0 1 0 1 0 
1 0 1 0 
0 1 0 
1 0 
0        */

/*function zeroOne(n){
    for(let i=n;i>=1;i--){
        row=""
        for(let j=1;j<=i;j++){
            row+=(i+j)%2+" "
        }
        console.log(row)
    }
}zeroOne(5)*/

//10.peint bellow pattern
/*  1
   222
  33333
 4444444
555555555 */

/*function triangle(n){
    for(let i=1;i<=n;i++){
        row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
        for(let k=1;k<=2*i-1;k++){
            row+=i
        }console.log(row)
    }
}triangle(5)*/


//print bellow pattern
/*
    1
   123
  12345
 1234567
123456789  */

/*function triangle(n){
    for(let i=1;i<=n;i++){
        row=""
        for(let j=1;j<=n-i;j++){
            row+=" "
        }
        for(let k=1;k<=2*i-1;k++){
            row+=k
        }console.log(row)
    }
}triangle(5)*/


