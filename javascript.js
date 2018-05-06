var decimal=0;
var N=0;
var M=0;
var op=-1;
var flag=1;
var just_equals=0;
/*
0-addition
1-subtraction
2-multiplication
3-division
*/
function display(x){
	if(just_equals==1){
		N=0;
		M=0;
		decimal=0;
		flag=1;
		just_equals=0;
	}
	if(flag==1){
		if(decimal>=1){
			var tmp=1;
			var i=0;
			for(i=1; i<=decimal; i++){
				tmp=tmp/10;
			}
			N=N+(x*tmp);
			decimal++;
		}
		else{
			N=(N*10)+x;
		}
		document.getElementById("screen").innerHTML=N;
	}
	else{
		if(decimal>=1){
                                    var tmp=1;
                                    var i=0;
                                    for(i=1; i<=decimal; i++){
                                            tmp=tmp/10;
                                    }
                                    M=M+(x*tmp);
                                    decimal++;
                            }
		else{
			M=(M*10)+x;
		}
		document.getElementById("screen").innerHTML=M;
	}
}
function floatt(){
	document.getElementById("screen").innerHTML+=".";
	decimal=1;
}
function c(){
	flag=1;
	N=0;
	M=0;
	op=-1;
	decimal=0;
	display(0);
}
function equals(){
	var ans=N+M;
	var itws=0;
	if(op==0){
		ans=N+M;
	}
	else if(op==1){
		ans=N-M;
	}
	else if(op==2){
		ans=N*M;
	}
	else if(op==3){
		if(M==0){
			itws=1;
		}
		ans=N/M;
	}
	else{
		ans=N;
	}
	if(itws==1){
		N=0;
		M=0;
		decimal=0;
		flag=1;
		document.getElementById("screen").innerHTML="error";
	}
	else{

		N=0;
		M=0;
		decimal=0;
		flag=1;
		op=-1;
		display(ans);
		just_equals=1;
		M=0;
		flag=2;
	}
}
function operator(OP){
	if(just_equals==1){
		just_equals=0;
	}
	flag=2;
	op=OP;
	var v="";
	if(op==0){
		v="+";
	}
	else if(op==1){
		v="-";
	}
	else if(op==2){
		v="*";
	}
	else{
		v="/";
	}
	decimal=0;
	document.getElementById("screen").innerHTML=v;
}

