// let hello="Hello World";
// alert(hello);

// let int1= 1;
// alert(int1);

// let int2= -10;
// alert(int2);

// let float1= 3.14;
// alert(float1);

// let str1= "JavaScriptを覚えよう";
// alert(str1);

// let str1="Hello";
// let str2="World!!";
// alert(str1 + str2);

// let orange = 100;
// let apple = 120;

// if(orange<apple){
//   alert("みかんの値段がりんごより安い");
// } else if(orange==apple){
//   alert("みかんとりんごが同じ値段");
// }else{
//   alert("みかんの値段がりんごより高い");
// }

// let max = 300;
// let num = 3;
// let count = 0;

// while(num<max){
//   num = num*5;
//   count= count +1;
// }

// alert("5を掛け続けて"+ max + "を超えるのに必要だった回数は"+ count +"回です");

// let i;
// let num = 0;

// for(i= 1;i< 11;i++){
//   num=num+i;
// }

// alert("1から10まで足し算した結果は" + num + "です");


// let str1="-確認問題-足し算、引き算、掛け算、割り算の計算結果表示";
// alert(str1);

// let int1= 4 + 3 ;
// alert( "4+3の計算結果は" + int1 + "です");

// let int2= 8 - 5 ;
// alert( "8-5の計算結果は" + int2 + "です");

// let int3= 2 * 6;
// alert( "２x６の計算結果は" + int3 + "です");

// let int4= 10 / 2;
// alert("10÷２の計算結果は" + int4 + "です");

// メイン部分
// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("Webcamp");

// // 変数の中身をアラートで表示する
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }


// let promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んで下さい');
if ((user_hand != 'グー') && (user_hand != 'チョキ') && (user_hand != 'パー')){
  alert('グー・チョキ・パーのいずれかを入力してください');
  alert(user_hand);
}
else if (user_hand == null){
  alert('またチャレンジしてね');
}


// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

//ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand,js_hand);

// 結果を表示する
alert('あなたの選んだ手は'+ user_hand +'です。\nJavaScriptの選んだ手は'+ js_hand +'です。\n結果は'+ judge +'です。');

//ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }
return hand_name;
}

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr ="あいこ";
    } else if(js =="チョキ"){
      winLoseStr = "勝ち";
    } else if(js =="パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr ="負け";
    } else if(js =="チョキ"){
      winLoseStr = "あいこ";
    } else if(js =="パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr ="勝ち";
    } else if(js =="チョキ"){
      winLoseStr = "負け";
    } else if(js =="パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}


