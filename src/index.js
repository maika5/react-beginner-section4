// // // // /**
// // // //  * const,letの変数宣言
// // // //  */

// // // // var val1 = "var変数";
// // // // console.log(val1);


// // // // //var変数上書き可能
// // // // val1 = "var変数上書き";
// // // // console.log(val1);

// // // // //var変数は再宣言可能
// // // // var val1 = "var変数再宣言可能";
// // // // console.log(val1);

// // // let var2 = "let変数";
// // // console.log(var2);

// // // var2 = "let変数は上書き可能";
// // // console.log(var2);

// // // let var2 = "let変数は再宣言不可";
// // // console.log(var2);


// const val3 = "const変数";
// console.log(val3);

// val3 = "const上書き不可";
// console.log(val3);

// const val3 = "const再宣言不可";
// console.log(val3);


//javascriptのオブジェクト
// const val4 = {
//   name: "じゃけい",
//   age: 31
// };
// val4.name = "jake";
// val4.age =33;
// val4.adress ="広島";
// console.log(val4);


//constで定義した配列はプロパティの変更が可能
// const val5 = ["age","cat"];
// val5[0] = "bird";
// val5.push = "monkey";
// console.log(val5);



// /**
//  * テンプレート文字列
//  */

// const name = "じゃけい";
// const age = "31";

// //私の名前はじゃけいです。年齢は31歳です。
// const message = '私の名前は${name}です。年齢は${age}です';
// console.log(message);


// /**
//  * アロー関数
//  */
// const func2 = (str) => {          //func2という関数を定義
//   return str;
// };
// console.log(func2("func2です"));


// const func3 = (num1,num2) => {
// return num1 + num2;
// };
// console.log(func3(10,20));


// //アロー関数でオブジェクトで返す
// const func4 =(num1,num2) => ({
//   hoge: num1,
//   huga: num2,
// });
// console.log(func4(10,20));


// /**
//  * 分割代入
//  */

// const myProfile = {
//   name: "じゃけい",
//   age: 32
// };
// const { name, age } = myProfile;
// const message4 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message4);

// /**
//  * 配列の分割代入
//  */

// const myProfile2 =["じゃけい", 31];

// const [name, age] = myProfile2;
// const message5 = `私の名前は${name}です。年齢は${age}です`
// console.log(message5);


/**
 * デフォルト値（引数、分割代入）
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちわ！${name}さん`);
// sayHello("じゃけい");

// const myProfile = {
//   age: 31
// };

// const {age, name = "ゲストさん" } = myProfile;
// console.log(age);
// console.log(name);


// /**
//  * オブジェクトの省略記法
//  */

// const name = "じゃけい";
// const age = 31;

// const myProfile4 = {
//   name,
//   age,
// };

// console.log(myProfile4);


// /**
//  * スプレッド構文　配列のコピー、配列
//  */

// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// // console.log(arr6);

// const arr7 =[...arr4, ...arr5];
// console.log(arr7);


// /**
//  * mapやfilterを使った配列処理
//  */


//map(for文：繰り返し処理)
// const nameArr = ["田中","山田","じゃけい"];
// // for (let index = 0; index < nameArr.length; index++) {
// //  console.log(nameArr[index]);
// // }
// const nameArr2= nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2)
