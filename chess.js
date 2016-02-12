d=document;spl=0;off_board=120;
fenteile=[];clicked=[];pieces=[]; // Speichert die Bilder 
board=[]; // Das Brett
var pieces=new Array()
for (y=0;y<15;y++){
	pieces[y]=new Image(300,300);
	pieces[y].src=y+".png";
}
function getrandomexercise()
			{
				selnum=Math.floor(Math.random() * (fenarray.length-1));
				selfen=expandfen(fenarray[selnum] );
			}
function flipboard(black)
{
	if (black)
	{
					var h="";
					for (i=63;i>=0;i--)h=h+selfen.charAt(i);
						selfen=h;
					for (i=1;i<9;i++)
						document.getElementById('L'+(9-i)).innerHTML=""+i;
					for (i=1;i<9;i++)
						document.getElementById('a'+(9-i)).innerHTML=""+String.fromCharCode(i-1+"a".charCodeAt(0));
					for (i=0;i<9;i++)
						d.getElementById('a'+i).style.backgroundColor="#777777";
					
				}
				else
				{
					for (i=1;i<9;i++)
						document.getElementById('L'+i).innerHTML=""+i;
						for (i=1;i<9;i++)
					document.getElementById('a'+(i)).innerHTML=""+String.fromCharCode(i-1+"a".charCodeAt(0));
					for (i=0;i<9;i++)
						d.getElementById('a'+i).style.backgroundColor="#dddddd";
				}
}
function B(it){ //clicked square
clicked[it]=1-clicked[it];
y=Math.floor(it/10);
x=it % 10;
if ( clicked[it])
	d.getElementById("Z"+it).style.backgroundColor=((x+(y))&1?"#FFaaaa":"#FFbbbb");
else
d.getElementById("Z"+it).style.backgroundColor=((x+(y))&1?"#888888":"#cccccc");
getsquares();
}
function getsquares()
{
gs="";

		for (j=0;j<8;j++)for (i=0;i<8;i++)
			if (clicked[(i+2)*10+1+j]) gs=gs+String.fromCharCode(97+j)+(i+1);
				if (gs==eval) 
				{
			
					score=(eval.length/2)*(count*score+60000/(Date.now()-startzeit))/((eval.length/2)*count+1);
		
					startmemory();			
				}
}
function refresh(){ 
    for (var z=0;z<off_board;z++){
		clicked[z]=0;
		if(board[z]<16)
			Bim(z,board[z],1);
    }
	d.getElementById("Z24").style.backgroundColor="blue";
	for (y=90;y>10;y-=10)
            for(x=0;x<10;x++) if(x&&x<9) d.getElementById("Z"+(y+x)).style.backgroundColor=((x+(y/10))&1?"#888888":"#cccccc");
}

function Bim(img,src,swap){
   if (A || img!='pih'){
		if (swap){
			img="i"+img;
		}
	d.images[img].src=pieces[src].src;
    }
}

function expandfen(fen){
	fen=fen.replace(/\s+/g," ")
	fenteile=fen.split(" ");
	fen=fenteile[0].replace(/\//g,"") //alle / rausschmeißen
	fen=fen.replace(/9/g,"18");fen=fen.replace(/8/g,"17");fen=fen.replace(/7/g,"16")
	fen=fen.replace(/6/g,"15");fen=fen.replace(/5/g,"14");fen=fen.replace(/4/g,"13")
	fen=fen.replace(/3/g,"12");fen=fen.replace(/2/g,"11")
	return fen;
}

function setfen(fen){
	fen= expandfen(fen);
	fen=fen.replace(/1/g,String.fromCharCode(0));fen=fen.replace(/P/g,String.fromCharCode(1));
	fen=fen.replace(/R/g,String.fromCharCode(2));fen=fen.replace(/N/g,String.fromCharCode(3));
	fen=fen.replace(/B/g,String.fromCharCode(4));fen=fen.replace(/Q/g,String.fromCharCode(5));
	fen=fen.replace(/K/g,String.fromCharCode(6));fen=fen.replace(/p/g,String.fromCharCode(9));
	fen=fen.replace(/r/g,String.fromCharCode(10));fen=fen.replace(/n/g,String.fromCharCode(11));
	fen=fen.replace(/b/g,String.fromCharCode(12));fen=fen.replace(/q/g,String.fromCharCode(13));
	fen=fen.replace(/k/g,String.fromCharCode(14));
	for (i=0;i<8;i++)
		for (j=0;j<8;j++)
			board[(i+2)*10+1+j]=fen.charCodeAt(64-(i+1)*8+j)
}

function table(){
	A=E=d.all;
	if (!E)event=0; //else errors in onmouseover.
	DOM=d.getElementsByTagName || null;
	if (DOM||E){
	  d.write("<img src='0.png' id='pih' name='pih' width='25' height='25' alt='' />");
	  A= (E||d.getElementsByTagName("img"));
	  itch=A["pih"].style;
	 }
		html='<form name=fred><center><table border=1>'
		for (y=90;y>10;y-=10){
			html+='<tr><td id="L'  +(y-10)/10+ '" '+ ">"+(y-10)/10+"</td>";
			for(x=0;x<10;x++){
				z=y+x;
				if(x&&x<9){
					html+=('<td id="Z'+z+ '"><a href="#" onclick="B('+z+');return false"><img src=0.gif width=40 height=40 name=i'+z+' border=0></a></td>\n')
	//+'" class=' + 
				}
			}
			html+='</tr>\n'
		}
		html+='<tr><td id="a0">&nbsp;</td><td align="center" id="a1">a</td><td align="center" id="a2">b</td><td align="center" id="a3">c</td><td align="center" id="a4">d</td><td align="center" id="a5">e</td><td align="center" id="a6">f</td><td align="center" id="a7">g</td><td align="center" id="a8">h</td>';
		html+='</table></center></form>';
		d.write(html);
		refresh(0);
}
