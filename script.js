function ledOn() {
  document.getElementById("img").src = "ledon.png";
  console.log("LED ON");
}

function ledOff() {
  document.getElementById("img").src = "ledoff.png";
  console.log("LED OFF");
}

var config = {
  apiKey: "",
  authDomain: "iotprogram-7e298.firebaseapp.com",
  projectId: "iotprogram-7e298",
  storageBucket: "iotprogram-7e298.firebasestorage.app",
  messagingSenderId: "38474226263",
  appId: "1:38474226263:web:3d08b1b007102f5ea2e112"
}

//Firebase 데이터베이스 만들기
firebase.initializeApp(config);
database = firebase.database();

// Firebase 데이터베이스 정보 가져오기
var ref = database.ref("led");
ref.on("value", gotData);

// LED제어 함수 선언
function lenON(){
  //console.log('led켜짐')
  var ref = datebase.ref('led');
  ref.update({led: 1})
}

function lenOFF(){
  //console.log('led꺼짐')
  var ref = datebase.ref('led');
  ref.update({led: 0})
}


function gotData(data) {
  var val = data.val();

  if (val.led == 0){
    //document.getElementById("ledstatus").innerHTML = "led가 현재 꺼짐";
    document.getElementById("img").src = "ledoff.png";}
  else {
    //document.getElementById("ledstatus").innerHTML = "led가 현재 켜짐";
    document.getElementById("img").src = "ledon.png";}

  console.log(val)
}