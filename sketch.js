
var num_us;
var num_ca;
var num_sf;
var table;
var years;
var rect_length = 0;
var rect_length1 = 0;
var rect_length2 = 0;
var barWidth = 20;
var barMargin = 10;
function preload(){
  table = loadTable("data.csv", "header");
}
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //noLoop();  
  loadData();
  frameRate(40);

}

function draw() {
  // put drawing code here
  background('#283149');
  textSize(28);
  //textAlign(CENTER);
  fill('#F6F6E9');
  textFont('Impact');
  text("Real Gross Rent History for US, California and San Francisco, 2005-2015",200,100);
  fill('#F6F6E9');
  textSize(20);
  text("US Median",150,600);
  text("California",550,600);
  text("San Francisco",950,600);
  for (var e = 0; e < num_us.length;e++) {
    push();
    fill("#E8FFC1");
    noStroke();
    translate(50,90);
    if (rect_length<num_us[e]/5){
      rect_length += 1;
      rect(50,90+e*(barWidth+barMargin),rect_length,barWidth);
    }else{
      rect(50,90+e*(barWidth+barMargin),num_us[e]/5,barWidth);
    }
    
    fill("#D7EEF2");
    textSize(15);
    text(years[e],250,90+e*(barWidth+barMargin)+barWidth/2);
    pop();  
  }
  for (var a = 0; a<num_ca.length;a++){
    push();
    fill("#A5ECD7");
    translate(230,90);
    if (rect_length1<num_ca[a]/5){
      rect_length1 += 1;
      rect(230,90+a*(barWidth+barMargin),rect_length1,barWidth);
    }else{
      rect(230,90+a*(barWidth+barMargin),num_ca[a]/5,barWidth);
    }

    fill("#D7EEF2");
    textSize(15);
    text(years[a],500,90+a*(barWidth+barMargin)+barWidth/2);
    pop(); 
  }
  for (var b = 0; b<num_sf.length;b++){
    push();
    fill("#51ADCF");
    translate(420,90);
    if (rect_length2<num_sf[b]/5){
      rect_length2 += 1;
      rect(420,90+b*(barWidth+barMargin),rect_length2,barWidth);
    }else{
      rect(420,90+b*(barWidth+barMargin),num_sf[b]/5,barWidth);
    }

    fill("#D7EEF2");
    textSize(15);
    text(years[b],750,90+b*(barWidth+barMargin)+barWidth/2);
    pop(); 
  }
  
}

function loadData(){
  num_us = [];
  num_ca = [];
  num_sf = [];
  years = [];
  for (var i = 0; i <table.getRowCount();i++){
    var row = table.getRow(i);
    num_us[i] = Number(row.get("us median"));
    num_ca[i]=Number(row.get("california median"));
    num_sf[i] = Number(row.get("san francisco median"));
    years[i] = row.get("year");
    
  }
}

