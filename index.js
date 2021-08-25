//変数
let unko = 'Hello world!';

// unko = 'Hello world2!!';


// 定数 絶対に変えたくないやつに使う
const bigunko = ' Hello world!? ';

// // bigunko = ' Hello world!? ';


// 配列
let inoki = ['いーち','にーい','さーん','だーーー！！'];



// console.log(inoki[0])
// []に数字を入れるとそこの言葉だけ呼び出される


// ループ文
// let index = 0;
// while(index < inoki.length ){ 
// // 繰り返したい文 
// console.log(inoki[index]);
// index++; //index = 1
// }


// if / else文

// if(inoki.length > 5){
// console.log('ボンバイエ！');
// } else  {
//   console.log('ボンバ...！');
// }

//関数
// const test = () => {
// //ここに実行したい命令を書く
//   if(inoki.length > 5){
//     console.log('ボンバイエ！');
//     } else  {
//       console.log('ボンバ...！');
//     } 
// };

// test();

// 試しに関数やってみた
// const test = (arg) => {
//   //ここに実行したい命令を書く
//     if(inoki.length > arg){
//       console.log('ボンバイエ！');
//       } else  {
//         console.log('ボンバ...！');
//       } 
//   };

// test(5);
// test(1);
// test(0);
// test(8);


//オブジェクト
// const unko2 = {
//   color:'pink',
//   size: 'large',
//   purfume: 'mint'

//   //関数も入れることができる
//   ,gotoilet: () => {
//   console.log('Hello world!');
//  }
// };

// console.log(unko2.gotoilet());

// console.log(inoki)

//あらかじめ設定されているやつ
// ①console.log(window.alert('Hello world!'))

// window.alert('unko!');


// ②console.log(document.getElementsByTagName('button'));

document.getElementsByTagName('button')[0].addEventListener('click',()=> {
  // 命令を書く
  window.alert('Hello World!')
}

)




