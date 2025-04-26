//Переменнаядля денег
money = 0
progress = 0
level = 1
price_click = 1
autoclick = 0

function autocliker(){
	money += autoclick
	reset_money()
}
setInterval(autocliker, 1000);

function auto(){
	if(money>=10){
	autoclick += 1
	money -= 10
	reset_money()
	}else{
		alert("Денег недостаточно")
	}
	
}

levels={
	1:{"click":10, "img":"img/001.png"},
	2:{"click":50, "img":"img/002.png"},
	3:{"click":100, "img":"img/003.png"},
	4:{"click":100, "img":"img/004.png"},
	5:{"click":100, "img":"img/005.png"},
	6:{"click":100, "img":"img/006.png"},
	7:{"click":100, "img":"img/007.png"},
	8:{"click":100, "img":"img/008.png"},
}

$('.personage').on('click',function(){
	money += price_click
	progress += 1
		reset_money()
	if(progress == levels[level]["click"]){
		level+= 1
	    progress = 0
		$('.level__name').text("Уровень"+level)
		$('.personage').attr("src", levels[level]["img"])
	}
	$('.level__progress').css({"width":progress/levels[level]["click"]*100+"%"})
})

function reset_money(){
	if (money<1000){
		$('.money__num').text(money)
	}
	if (money>=1000 && money < 1000000){
		$('.money__num').text( Math.floor(money / 1000)+' тыс.')
	}
	if (money>=1000000 && money < 1000000000){
		$('.money__num').text( Math.floor(money / 1000000)+' мил.')
	}
	if (money>=1000000000 && money < 1000000000000){
		$('.money__num').text( Math.floor(money / 1000000000)+' миллиард.')
	}
}

function money_plus_1(){
	if(money>=50){
	price_click += 1
	money -= 50
	reset_money()
	}else{
		alert("Денег недостаточно")
	}
	
}
function money_x_2(){
	if(money>=0){
	price_click *= 2
	money -= 1500
	reset_money()
	}else{
		alert("Денег недостаточно")
	}
	
}
function money_plus_5(){
	if(money>=50){
	price_click += 5
	money -= 100
	reset_money()
	}else{
		alert("Денег недостаточно")
	}
	
}
function money_plus_10(){
	if(money>=50){
	price_click += 10
	money -= 250
	reset_money()
	}else{
		alert("Денег недостаточно")
	}
	
}
function money_plus_30(){
	if(money>=50){
	price_click += 30
	money -= 500
	reset_money()
	}else{
		alert("Денег недостаточно")
	}
	
}
function money_plus_50(){
	if(money>=50){
	price_click += 50
	money -= 1000
	reset_money()
	}else{
		alert("Денег недостаточно")
	}
	
}