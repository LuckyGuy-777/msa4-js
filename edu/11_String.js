// String (문자열) 객체
let let1 = "쌍따옴표가능" // 간편하게 현재 부터, 아래 처럼 문자열생성
let let2 = '홑따옴표도가능'
let let3 = `백틱도가능함.`

// const string1 = new String('객체로 생성') // 스트링객체 생성법.

// length : 문자열 길이 반환 
console.log(let3.length)

// String.charAt(인덱스)   반환값은 String
// 문자열에서, 해당 인덱스에 맞는 문자를 반환함.
// length 는 7, 시작 인덱스는 0~
let str4 = "문자열입니다."
console.log(str4.charAt(3));


// 함수형태 : String.indexOf(searchStr, idx)     반환값은 Number
// 문자열에서 해당 검색어를 찾아 최초의 인덱스를 반환함.
// 찾는 대상이 없을경우 -1 반환
// 쌍따옴표, 홑따옴표, 백틱 등, 자바스크립트에서는 다 됨. 다른 언어에서는 안될요지가 있음.
let str5 = "문자열입니다. 문자열입니다."
console.log(str5.indexOf('열')); // 2

// str5에서 '열' 이라는 문자를 찾을건데, 4번째 인덱스 부터 시작해라. 0부터 시작
console.log(str5.indexOf('열',4));

// 문자가 여러개 일때, 최초글자의 인덱스번호를 반환함.
console.log(str5.indexOf('입니다')); // 3

// 없는글자를 찾는데 쓰일수도 있다 
console.log(str5.indexOf('아아')); // 이때는 -1을 반환.




// String.replace(pattern, replacement)   문자열을 반환함
// 문자열에서 해당패턴의 첫번째 문자열을 찾아서, 대체문자열로 변경 후,
// 변경한 문자열을 반환한다.

let str6 = "문자열입니다. 문자열입니다.";
console.log(str6.replace('문자열','석갈비').replace('문자열','갈비찜'))



// String.replaceAll(pattern, replacement)    String 반환
// 문자열에서 해당패턴의 "모든 문자열을 찾아서", 대체문자열로 변경한 문자열을 반환
let str7 = "문자열입니다만? 문자열이에요.";
console.log(str7.replaceAll('문자열', '돌솥비빔밥')) 



// String.substring(startidx, endIdx)    String 반환
// 문자열에서 시작인덱스 부터, 끝 인덱스까지 자른 문자열을 반환
// 끝 인덱스 생략시, 시작 인덱스부터, 끝까지 자른 문자열을 반환
let str8 = "문자열입니다만? 문자열이에요.";
console.log(str8.substring(2,3)) // 2번 앞까지 자르고, 3번 인덱스 부터 자름.




//String.trim()   String 반환
// 문자열에서 시작과 끝의 공백을 제거한 문자열을 반환
// 문자열의, 첫 시작 공백과, 맨 끝 공백을 제거함. 문자열 사이의 공백은 제거x
let str10 = "     아아  ";
console.log(str10)
console.log(str10.trim());


// String.toUpperCase(), String.toLowerCase()
// 문자열을 대소문자로 변경해서 반환함.
let str11= 'gwbzmeiasokd'
console.log(str11.toUpperCase())
console.log(str11.toLowerCase())
