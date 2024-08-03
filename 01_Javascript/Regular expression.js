// let str1 = "I go to a mart. I go to a MART.";
// //mart를가지고있는 문자를 패턴화  대소문자 구분하지 않음.
// let pattern = /mart/gi;
// //패턴화된 문자를 "office"로 변경
// let result = str1.replace(pattern, "office");
// document.getElementById("show").innerHTML = result;

// let str2 = "A cat gets haircut c3t c_t";
// let pattern2 = /c.t/g;
// let result2 = str2.match(pattern2);
// document.getElementById("show2").innerHTML = result2;

// let str3 = "Discount rate : 30%";
// let pattern3 = /\w/g;
// let pattern4 = /\W/g;
// let result3 = str3.match(pattern3);
// let result4 = str3.match(pattern4);
// document.getElementById("show3").innerHTML = result3;
// document.getElementById("show4").innerHTML = result4;

// let str4 = " Phone number : 010-1234-5678";
// let pattern5 = /\d/g;
// let pattern6 = /\D/g;
// let result5 = str4.match(pattern5);
// let result6 = str4.match(pattern6);
// document.getElementById("show5").innerHTML = result5;
// document.getElementById("show6").innerHTML = result6;

// let str5 = "Hello world ! ! ";
// let pattern7 = /\s/g;
// let pattern8 = /\S/g;
// let result7 = str5.match(pattern7);
// let result8 = str5.match(pattern8);
// document.getElementById("show7").innerHTML = result7;
// document.getElementById("show8").innerHTML = result8;

// let str6 = "You are a student. Your name is nice";
// let pattern9 = /\bYou/g; // You가 몇개 있는지 확인
// let pattern10 = /e\b/g; // e가 몇개 있는지 확인?
// let pattern11 = /\Bou/g;
// let result9 = str6.match(pattern9);
// let result10 = str6.match(pattern10, "_");
// let result11 = str6.match(pattern11);

// let text = "";
// text += result9 + "<br>";
// text += result10 + "<br>";
// document.getElementById("show9").innerHTML = result9;
// document.getElementById("show10").innerHTML = text;
// document.getElementById("show11").innerHTML = result11;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let str1 = "Woops! Wooops! Woooops!";
// let pattern = /o+/g;
// let result = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str2 = "aahh aahhhh aaaahhhhhhh";
// let pattern2 = /ah*/g;
// let result2 = str2.match(pattern2);
// document.getElementById("show2").innerHTML = result2;

// let str3 = "sshhhhh sssshhhhhhh sssshhhhhh";
// let pattern3 = /sh?/g;
// let result3 = str3.match(pattern3);
// document.getElementById("show3").innerHTML = result3;

// let str4 = "1 12 12222 123 1234 123456 123444556";
// let pattern4 = /\d{3}/g;
// let pattern5 = /\d{3,}/g;
// let pattern6 = /\d{4,5}/g;
// let result4 = str4.match(pattern4);
// let result5 = str4.match(pattern5);
// let result6 = str4.match(pattern6);
// document.getElementById("show4").innerHTML = result4;
// document.getElementById("show5").innerHTML = result5;
// document.getElementById("show6").innerHTML = result6;

let str1 = "How do you do";
let pattern = /[do]/g;
let result = str1.match(pattern);
document.getElementById("show").innerHTML = result;

let str2 = "89769055349";
let pattern2 = /[^1-8]/g;
let result2 = str2.match(pattern2);
document.getElementById("show2").innerHTML = result2;

let str3 = "A AA B BB Aa Bb AAA";
let pattern3 = /A{2,}/g;
let result3 = str3.match(pattern3);
document.getElementById("show3").innerHTML = result3;

let str4 = "AA BB 12 345";
let pattern4 = /[0-9]+/g;
let result4 = str4.match(pattern4);
document.getElementById("show4").innerHTML = result4;
