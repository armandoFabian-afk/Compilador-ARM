
function  capturar(){
	 getData="";
	 //variables del ADD
	 Aux="";
	 array=new Array();
	 temp= new Array();
	 Aux2="";
	

	getData=document.getElementById('textarea1').value;
	array=getData.split('\n');/*contiene las lineas
	de codigo por separado del textarea*/
arraytemp=array;

//variables del ADDI

var out="";


var numpal=0;

	for (var i=0; i < array.length; i ++) {
		Aux=array[i];//arreglo que contiene las lineas de codigo//
		temp= Aux.split(" ");/*corta las instrucciones de
		la linea*/

				numpal+=4;
		
/*el switch checa que instruccion es*/
		switch(temp[0]){
			case "ADD": {		
					console.log("Instruccion: "+ i +" men: "+numpal+ " ADD: tipo R : ");
								 var hexaArray=new Array(); 
						 		 var hexaBase="1112";
						 		 hexaBase=parseInt(hexaBase);
						  		 hexaBase=hexaBase.toString(2);
						  
						 		 
console.log(temp);


							   	 for(var l=1;l<temp.length;l++){
									 Aux2=temp[l].substring(1);
									 Aux2=parseInt(Aux2);
									 Aux2=Aux2.toString(2);
									 hexaArray.push(Aux2);
			
								 }
								 	var dif=0;
								 	var x1=0;

								 	if(hexaArray[2].length==5){
										 hexaBase+=hexaArray[2];
										}else{
											 dif=(5-hexaArray[2].length);
											for( x1=0;x1<dif;x1++){
													hexaBase+="0";
											}
											
											hexaBase+=hexaArray[2];
										}

									hexaBase+="000000";
									if(hexaArray[1].length==5){
											hexaBase+=hexaArray[1]
									}else{

											 dif=(5-hexaArray[1].length);
											for( x1=0;x1<dif;x1++){
													hexaBase+="0";
											}
											hexaBase+=hexaArray[1]
									}

									if (hexaArray[0].length==5) {
										hexaBase+=hexaArray[0];

									}else{
											dif=(5-hexaArray[0].length);
											for( x1=0;x1<dif;x1++){
													hexaBase+="0";
											}
											hexaBase+=hexaArray[0]
									}
								 
								
								 
								 hexaBase=parseInt(hexaBase,2);
								 
								 hexaBase=hexaBase.toString(16);
								 out+=("Instruccion: "+ i +" men: "+numpal+ " ADD: tipo R : "+hexaBase);
								console.log(hexaBase);

									break;
									
			
						}
			
				
			case "ADDI": {console.log("Instruccion", i,"mem ",numpal, "ADDI tipo I");
			out+=("Instruccion", i,"mem ",numpal, "ADDI tipo I");
console.log(temp);
								 var hexaArrayAddi=new Array(); 
						 		 var hexaBaseAddi="580";
						 		 hexaBaseAddi=parseInt(hexaBaseAddi);
						  		 hexaBaseAddi=hexaBaseAddi.toString(2);
						  		// console.log(hexaBaseAddi);
						  		 
						  		for(var l2=1;l2<temp.length;l2++){
									 Aux2=temp[l2].substring(1);
									 Aux2=parseInt(Aux2);
									 Aux2=Aux2.toString(2);
									 hexaArrayAddi.push(Aux2);
			
								 }
								// console.log(hexaArrayAddi);
									var difAddi=0;
								 	var x1Addi=0;
								 		//console.log(hexaArrayAddi);
								 		var signo=(hexaArrayAddi[2]);
								 		
								 		////////////
								 		if(signo.substring(0,1)=="-"){
								 			//console.log(signo);
								 				signo=signo.substring(1,signo.length+1);
								 				signo=parseInt(signo,2);
								 				//console.log(signo);
								 				signo=signo.toString(2);
								 					//console.log(signo);
								 var ComAdosAddi=new Array();

							for(pos=0;pos<signo.length;pos++){
							ComAdosAddi.push(signo.substring(pos,pos+1));
							}
							//console.log(ComAdosAddi);

		
							for(pos=0;pos<ComAdosAddi.length;pos++){
								ComAdosAddi[pos]=parseInt(ComAdosAddi[pos]);
								ComAdosAddi[pos]=Number(!ComAdosAddi[pos]);
								}
								

								var carryAddi=1;
								for(pos=ComAdosAddi.length-1;pos>=0;pos--){
									if(ComAdosAddi[pos]==0&&carryAddi==1){
										ComAdosAddi[pos]=1;
										carryAddi=0;

									}if(ComAdosAddi[pos]==1&&carryAddi==1){
										ComAdosAddi[pos]=0;
										carryAddi=1;
									}if(ComAdosAddi[pos]==1&&carryAddi==0){
										ComAdosAddi[pos]=1;
										carryAddi=0;

									}if(ComAdosAddi[pos]==0&&carryAddi==0){
										ComAdosAddi[pos]=0;
										carryAddi=0;
									}

								}//console.log(ComAdosC);

								var AuxComAdosAddi="";
								for(pos=0;pos<ComAdosAddi.length;pos++){
									AuxComAdosAddi+=ComAdosAddi[pos];
								}

									if(AuxComAdosAddi.length==12){
										 hexaBaseAddi+=AuxComAdosAddi;
										}else{
											 difAddi=(12-AuxComAdosAddi.length);
											for( x1Addi=0;x1Addi<difAddi;x1Addi++){
													hexaBaseAddi+="1";
											}
											
											hexaBaseAddi+=AuxComAdosAddi;
										} //console.log(hexaBaseAddi.toString(2));



							}//////fin compAdos
							else{


								 	if(hexaArrayAddi[2].length==12){
										 hexaBaseAddi+=hexaArrayAddi[2];
										}else{
											 difAddi=(12-hexaArrayAddi[2].length);
											for( x1Addi=0;x1Addi<difAddi;x1Addi++){
													hexaBaseAddi+="0";
											}
											
											hexaBaseAddi+=hexaArrayAddi[2];
										}

									}





/////////////////////////////////////////////////7
									
									if(hexaArrayAddi[1].length==5){
											hexaBaseAddi+=hexaArrayAddi[1]
									}else{

											 difAddi=(5-hexaArrayAddi[1].length);
											for( x1Addi=0;x1Addi<difAddi;x1Addi++){
													hexaBaseAddi+="0";
											}
											hexaBaseAddi+=hexaArrayAddi[1]
									}

									if (hexaArrayAddi[0].length==5) {
										hexaBaseAddi+=hexaArrayAddi[0];

									}else{
											difAddi=(5-hexaArrayAddi[0].length);
											for( x1Addi=0;x1Addi<difAddi;x1Addi++){
													hexaBaseAddi+="0";
											}
											hexaBaseAddi+=hexaArrayAddi[0];
									}
								 
									
				
									hexaBaseAddi=parseInt(hexaBaseAddi,2);
								 	//console.log(hexaBaseAddi.toString(2));
								 	hexaBaseAddi=hexaBaseAddi.toString(16);
									console.log(hexaBaseAddi);
										

			break;
		}
		case "SUB":{console.log("Instruccion", i,"men ",numpal,"SUB tipo R"); 

			out+=("Instruccion", i,"men ",numpal,"SUB tipo R"); 
console.log(temp);
								 var hexaArraySub=new Array(); 
						 		 var hexaBaseSub="1624";
						 		 hexaBaseSub=parseInt(hexaBaseSub);
						  		 hexaBaseSub=hexaBaseSub.toString(2);
						  		 //console.log(hexaBaseSub);
						  		 
						  		for(var l3=1;l3<temp.length;l3++){
									 Aux2=temp[l3].substring(1);
									 Aux2=parseInt(Aux2);
									 Aux2=Aux2.toString(2);
									 hexaArraySub.push(Aux2);
			
								 }
									 var difSub=0;
								 	var x1Sub=0;

								 	if(hexaArraySub[2].length==5){
										 hexaBaseSub+=hexaArraySub[2];
										}else{
											 difSub=(5-hexaArraySub[2].length);
											for( x1Sub=0;x1Sub<difSub;x1Sub++){
													hexaBaseSub+="0";
											}
											
											hexaBaseSub+=hexaArraySub[2];
										}
														hexaBaseSub+="000000";
									
									if(hexaArraySub[1].length==5){
											hexaBaseSub+=hexaArraySub[1]
									}else{

											 difSub=(5-hexaArraySub[1].length);
											for( x1Sub=0;x1Sub<difSub;x1Sub++){
													hexaBaseSub+="0";
											}
											hexaBaseSub+=hexaArraySub[1]
									}

									if (hexaArraySub[0].length==5) {
										hexaBaseSub+=hexaArraySub[0];

									}else{
											difSub=(5-hexaArraySub[0].length);
											for( x1Sub=0;x1Sub<difSub;x1Sub++){
													hexaBaseSub+="0";
											}
											hexaBaseSub+=hexaArraySub[0]
									}
								 
									
				
									hexaBaseSub=parseInt(hexaBaseSub,2);
								 	//console.log(hexaBaseSub.toString(2));
								 	hexaBaseSub=hexaBaseSub.toString(16);
									console.log(hexaBaseSub);
									break;

				}
			case "STUR":{console.log("Instruccion", i,"men ",numpal, " STUR tipo D");
				out+=("Instruccion", i,"men ",numpal, " STUR tipo D");
console.log(temp);
					 			 var hexaArrayStur=new Array(); 
						 		 var hexaBaseStur="1984";
						 		 hexaBaseStur=parseInt(hexaBaseStur);
						  		 hexaBaseStur=hexaBaseStur.toString(2);
						  		 
						  		 
						  		for(var l4=1;l4<temp.length;l4++){
						  			
									Aux2=temp[l4].substring(1);
								    if(l4==2){
										Aux2=temp[l4].substring(2);
									}else if(l4==3){
										Aux2=temp[l4].substring(1,Aux2.length);
										var tempo=parseInt(Aux2);
										tempo=tempo*8;
										Aux2=tempo;

									}
									 
									 Aux2=parseInt(Aux2);
									
									 Aux2=Aux2.toString(2);
									  
									 hexaArrayStur.push(Aux2);
									
								 }

								  	var difStur=0;
								 	var x1Stur=0;
								 	//console.log(hexaArrayStur);
								 	if(hexaArrayStur[2].length==9){
										 hexaBaseStur+=hexaArrayStur[2];
										}else{
											 difStur=(9-hexaArrayStur[2].length);
											for( x1Stur=0;x1Stur<difStur;x1Stur++){
													hexaBaseStur+="0";
											}
											
											hexaBaseStur+=hexaArrayStur[2];
										}
									hexaBaseStur+="00";
									
									if(hexaArrayStur[1].length==5){
											hexaBaseStur+=hexaArrayStur[1]
									}else{

											 difStur=(5-hexaArrayStur[1].length);
											for( x1Stur=0;x1Stur<difStur;x1Stur++){
													hexaBaseStur+="0";
											}
											hexaBaseStur+=hexaArrayStur[1]
									}

									if (hexaArrayStur[0].length==5) {
										hexaBaseStur+=hexaArrayStur[0];

									}else{
											difStur=(5-hexaArrayStur[0].length);
											for( x1Stur=0;x1Stur<difStur;x1Stur++){
													hexaBaseStur+="0";
											}
											hexaBaseStur+=hexaArrayStur[0]
									}
								 
									
				
									hexaBaseStur=parseInt(hexaBaseStur,2);
								 	//console.log(hexaBaseStur.toString(2));
								 	hexaBaseStur=hexaBaseStur.toString(16);
									console.log(hexaBaseStur);
									




			 break;
			}

			case "LDUR":{ console.log("Instruccion", i,"men ",numpal, " LDUR tipo D");
				out+=("Instruccion", i,"men ",numpal, " LDUR tipo D");
console.log(temp);
					 			 var hexaArrayLdur=new Array(); 
						 		 var hexaBaseLdur="1986";
						 		 hexaBaseLdur=parseInt(hexaBaseLdur);
						  		 hexaBaseLdur=hexaBaseLdur.toString(2);
						  		 
						  		 
						  		for(var l5=1;l5<temp.length;l5++){
						  			
									Aux2=temp[l5].substring(1);
								    if(l5==2){
										Aux2=temp[l5].substring(2);
									}else if(l5==3){
										Aux2=temp[l5].substring(1,Aux2.length);
										var tempo1=parseInt(Aux2);
										tempo1=tempo1*8;
										Aux2=tempo1;

									}
									 
									 Aux2=parseInt(Aux2);
									
									 Aux2=Aux2.toString(2);
									  
									 hexaArrayLdur.push(Aux2);
									
								 }

								  	var difLdur=0;
								 	var x1Ldur=0;
								 	//console.log(hexaArrayLdur);
								 	if(hexaArrayLdur[2].length==9){
										 hexaBaseLdur+=hexaArrayLdur[2];
										}else{
											 difLdur=(9-hexaArrayLdur[2].length);
											for( x1Ldur=0;x1Ldur<difLdur;x1Ldur++){
													hexaBaseLdur+="0";
											}
											
											hexaBaseLdur+=hexaArrayLdur[2];
										}
									hexaBaseLdur+="00";
									
									if(hexaArrayLdur[1].length==5){
											hexaBaseLdur+=hexaArrayLdur[1]
									}else{

											 difLdur=(5-hexaArrayLdur[1].length);
											for( x1Ldur=0;x1Ldur<difLdur;x1Ldur++){
													hexaBaseLdur+="0";
											}
											hexaBaseLdur+=hexaArrayLdur[1]
									}

									if (hexaArrayLdur[0].length==5) {
										hexaBaseLdur+=hexaArrayLdur[0];

									}else{
											difLdur=(5-hexaArrayLdur[0].length);
											for( x1Ldur=0;x1Ldur<difLdur;x1Ldur++){
													hexaBaseLdur+="0";
											}
											hexaBaseLdur+=hexaArrayLdur[0]
									}
								 
									
				
									hexaBaseLdur=parseInt(hexaBaseLdur,2);
								// 	console.log(hexaBaseLdur.toString(2));
								 	hexaBaseLdur=hexaBaseLdur.toString(16);
									console.log(hexaBaseLdur);
										break;	
 
											

		}
			case "CBNZ":{console.log("Instruccion", i,"men ",numpal, " CNBZ tipo CB");
				out+=("Instruccion", i,"men ",numpal, " CNBZ tipo CB");
console.log(temp);
					 			 var hexaArrayCbnz=new Array(); 
						 		 var hexaBaseCbnz="181";
						 		 hexaBaseCbnz=parseInt(hexaBaseCbnz);
						  		 hexaBaseCbnz=hexaBaseCbnz.toString(2);
						  		 
						  		 
						  	
						  			
									Aux2=temp[1].substring(1);
									Aux2=parseInt(Aux2);
									Aux2=Aux2.toString(2);
									hexaArrayCbnz.push(Aux2);
									var Aux2Cbnz=temp[2];
									Aux2Cbnz+=":"
									
									var tempCbnzArray=new Array();
									var CbnzAux="";
									var tempCbnzArrayCopia=new Array();

						for(var pos=0;pos<arraytemp.length;pos++){
							CbnzAux=arraytemp[pos];
							tempCbnzArray=CbnzAux.split(" ");
							
							tempCbnzArrayCopia.push(tempCbnzArray[0]);
							
						}
							
						var contaLine=0;
						var band=0;
						for(pos=i;pos<tempCbnzArrayCopia.length;pos++){
							if(tempCbnzArrayCopia[pos]==Aux2Cbnz){
								band=1;
								break;
							}
							contaLine++;
						}	

						
						contaLine=contaLine.toString(2);
						if(band==1){
						if(contaLine.length==19){
							hexaBaseCbnz+=contaLine;
						}else{
							
							
						for(pos=0;pos<(19-contaLine.length);pos++){
							hexaBaseCbnz+="0";
						}contaLine=contaLine.toString(2);
						 hexaBaseCbnz+=contaLine;
					}

						

					if(hexaArrayCbnz.length==5){
							hexaBaseCbnz+=hexaArrayCbnz[0];
						}else{

						for(pos=0;pos<(5- hexaArrayCbnz[0].length);pos++){
							hexaBaseCbnz+="0";
						}hexaBaseCbnz+=hexaArrayCbnz[0];
					}

					
						
						
						hexaBaseCbnz=parseInt(hexaBaseCbnz,2);
						
						hexaBaseCbnz=hexaBaseCbnz.toString(16);
						
							console.log(hexaBaseCbnz);
						}
			
//salto negativo
						if(band==0){
							contaLine=0;
							for(pos=i;pos>-1;pos--){
								if(tempCbnzArrayCopia[pos]==Aux2Cbnz){
									break;
								}
								contaLine++;
							}

							
							contaLine=contaLine.toString(2);
							//console.log(contaLine);
							var ComAdos=new Array();

							for(pos=0;pos<contaLine.length;pos++){
							ComAdos.push(contaLine.substring(pos,pos+1));
							}
		

							var ComAdosNumeric= new Array();

							for(pos=0;pos<ComAdos.length;pos++){
								ComAdos[pos]=parseInt(ComAdos[pos]);
								ComAdos[pos]=Number(!ComAdos[pos]);
								}
								

								var carry=1;
								for(pos=ComAdos.length-1;pos>=0;pos--){
									if(ComAdos[pos]==0&&carry==1){
										ComAdos[pos]=1;
										carry=0;

									}if(ComAdos[pos]==1&&carry==1){
										ComAdos[pos]=0;
										carry=1;
									}if(ComAdos[pos]==1&&carry==0){
										ComAdos[pos]=1;
										carry=0;

									}if(ComAdos[pos]==0&&carry==0){
										ComAdos[pos]=0;
										carry=0;
									}

								}//console.log(ComAdos);

								var AuxComAdos="";
								for(pos=0;pos<ComAdos.length;pos++){
									AuxComAdos+=ComAdos[pos];
								}

								AuxComAdos=AuxComAdos.toString(2);
								
								dif=AuxComAdos.length;
								if(dif==19){
									hexaBaseCbnz+=AuxComAdos;
								}else{
									for(pos=0;pos<(19-dif);pos++){
										hexaBaseCbnz+="0";
									}hexaBaseCbnz+=AuxComAdos;
								}
								//console.log(hexaBaseCbnz);
								if(hexaArrayCbnz[0].length==5){
									hexaBaseCbnz+=hexaArrayCbnz[0];

								}else{
									for(pos=0;pos<(5-hexaArrayCbnz[0].length);pos++){
										hexaBaseCbnz+="0";
									}hexaBaseCbnz+=hexaArrayCbnz[0];

								}//console.log(hexaBaseCbnz);
								hexaBaseCbnz=parseInt(hexaBaseCbnz,2);
								console.log(hexaBaseCbnz.toString(16));

						}break;
			}

			case "CBZ":{ console.log("Instruccion", i,"men ",numpal, " CBZ tipo CB");
				out+=("Instruccion", i,"men ",numpal, " CBZ tipo CB");
console.log(temp);
					 			 var hexaArrayCbz=new Array(); 
						 		 var hexaBaseCbz="180";
						 		 hexaBaseCbz=parseInt(hexaBaseCbz);
						  		 hexaBaseCbz=hexaBaseCbz.toString(2);
						  		 
						  		 
						  	
						  			
									Aux2=temp[1].substring(1);
									Aux2=parseInt(Aux2);
									Aux2=Aux2.toString(2);
									hexaArrayCbz.push(Aux2);
									var Aux2Cbz=temp[2];
									Aux2Cbz+=":"
									
									var tempCbzArray=new Array();
									var CbzAux="";
									var tempCbzArrayCopia=new Array();

						for(var pos=0;pos<arraytemp.length;pos++){
							CbzAux=arraytemp[pos];
							tempCbzArray=CbzAux.split(" ");
							
							tempCbzArrayCopia.push(tempCbzArray[0]);
							
						}
							
						var contaLinec=0;
						var bandc=0;
						for(pos=i;pos<tempCbzArrayCopia.length;pos++){
							if(tempCbzArrayCopia[pos]==Aux2Cbz){
								bandc=1;
								break;
							}
							contaLinec++;
						}	

						
						contaLinec=contaLinec.toString(2);
						if(bandc==1){
						if(contaLinec.length==19){
							hexaBaseCbz+=contaLinec;
						}else{
							
							
						for(pos=0;pos<(19-contaLinec.length);pos++){
							hexaBaseCbz+="0";
						}contaLinec=contaLinec.toString(2);
						 hexaBaseCbz+=contaLinec;
					}

						

					if(hexaArrayCbz.length==5){
							hexaBaseCbz+=hexaArrayCbz[0];
						}else{

						for(pos=0;pos<(5- hexaArrayCbz[0].length);pos++){
							hexaBaseCbz+="0";
						}hexaBaseCbz+=hexaArrayCbz[0];
					}

					
						
						
						hexaBaseCbz=parseInt(hexaBaseCbz,2);
						
						hexaBaseCbz=hexaBaseCbz.toString(16);
						
						console.log(hexaBaseCbz);

						}
			
//salto negativo
						if(bandc==0){
							contaLinec=0;
							for(pos=i;pos>-1;pos--){
								if(tempCbzArrayCopia[pos]==Aux2Cbz){
									break;
								}
								contaLinec++;
							}

							
							contaLinec=contaLinec.toString(2);
							//console.log(contaLinec);
							var ComAdosC=new Array();

							for(pos=0;pos<contaLinec.length;pos++){
							ComAdosC.push(contaLinec.substring(pos,pos+1));
							}
		

							var ComAdosNumeric= new Array();

							for(pos=0;pos<ComAdosC.length;pos++){
								ComAdosC[pos]=parseInt(ComAdosC[pos]);
								ComAdosC[pos]=Number(!ComAdosC[pos]);
								}
								

								var carryc=1;
								for(pos=ComAdosC.length-1;pos>=0;pos--){
									if(ComAdosC[pos]==0&&carryc==1){
										ComAdosC[pos]=1;
										carryc=0;

									}if(ComAdosC[pos]==1&&carryc==1){
										ComAdosC[pos]=0;
										carryc=1;
									}if(ComAdosC[pos]==1&&carryc==0){
										ComAdosC[pos]=1;
										carryc=0;

									}if(ComAdosC[pos]==0&&carryc==0){
										ComAdosC[pos]=0;
										carryc=0;
									}

								}//console.log(ComAdosC);

								var AuxComAdosc="";
								for(pos=0;pos<ComAdosC.length;pos++){
									AuxComAdosc+=ComAdosC[pos];
								}

								AuxComAdosc=AuxComAdosc.toString(2);
								
								var difc=AuxComAdosc.length;
								if(difc==19){
									hexaBaseCbz+=AuxComAdosc;
								}else{
									for(pos=0;pos<(19-difc);pos++){
										hexaBaseCbz+="1";
									}hexaBaseCbz+=AuxComAdosc;
								}
								//console.log(hexaBaseCbz);
								if(hexaArrayCbz[0].length==5){
									hexaBaseCbz+=hexaArrayCbz[0];

								}else{
									for(pos=0;pos<(5-hexaArrayCbz[0].length);pos++){
										hexaBaseCbz+="0";
									}hexaBaseCbz+=hexaArrayCbz[0];

								}//console.log(hexaBaseCbz);
								hexaBaseCbz=parseInt(hexaBaseCbz,2);
								console.log(hexaBaseCbz.toString(16));

						}break;
					}
		case "BL":{ 
			console.log("Instruccion", i,"men ",numpal, " BL tipo B");
			out+=("Instruccion", i,"men ",numpal, " BL tipo B");
console.log(temp);
					 			 var hexaArrayBl=new Array(); 
						 		 var hexaBaseBl="37";
						 		 hexaBaseBl=parseInt(hexaBaseBl);
						  		 hexaBaseBl=hexaBaseBl.toString(2);
						  		 
						  		 
						  			
						  			
									Aux2=temp[0]
									//console.log(Aux2);
									
									hexaArrayBl.push(Aux2);
									var Aux2Bl=temp[1];
									Aux2Bl+=":";
									//console.log(Aux2Bl);
									
									var tempBlArray=new Array();
									var BlAux="";
									var tempBlArrayCopia=new Array();

						for(var pos=0;pos<arraytemp.length;pos++){
							BlAux=arraytemp[pos];
							tempBlArray=BlAux.split(" ");
							
							tempBlArrayCopia.push(tempBlArray[0]);
							
						}
							
						var contaLineBl=1;
						var bandBl=0;
						for(pos=i;pos<tempBlArrayCopia.length;pos++){
							if(tempBlArrayCopia[pos]==Aux2Bl){
								bandBl=1;
								break;
							}
							contaLineBl++;
						}	
							//console.log(tempBlArrayCopia[pos]);
						
						contaLineBl=contaLineBl.toString(2);
						//console.log(contaLineBl);
						if(bandBl==1){
							if(contaLineBl.length==26){
								hexaBaseBl+=contaLineBl;
							}else{
							
							
								for(pos=0;pos<(26-contaLineBl.length);pos++){
								hexaBaseBl+="0";
								}
							contaLineBl=contaLineBl.toString(2);
							hexaBaseBl+=contaLineBl;
							//console.log(hexaBaseBl);
						

						hexaBaseBl=parseInt(hexaBaseBl,2);
						hexaBaseBl=hexaBaseBl.toString(16);
						console.log(hexaBaseBl);
						}
					}
						
						if(bandBl==0){
							contaLineBl=0;
							for(pos=i;pos>=0;pos--){
								if(tempBlArrayCopia[pos]==Aux2Bl){
									break;
								}
								contaLineBl++;
							} //console.log(contaLineBl);

							
							contaLineBl=contaLineBl.toString(2);
							//console.log(contaLineBl);
							var ComAdosBl=new Array();

							for(pos=0;pos<contaLineBl.length;pos++){
								ComAdosBl.push(contaLineBl.substring(pos,pos+1));
							}
		
								//console.log(ComAdosBl);
							

							for(pos=0;pos<ComAdosBl.length;pos++){
								ComAdosBl[pos]=parseInt(ComAdosBl[pos]);
								ComAdosBl[pos]=Number(!ComAdosBl[pos]);
								}//console.log(ComAdosBl);
								
								
								var carryBl=1;
								for(pos=(ComAdosBl.length)-1;pos>=0;pos--){
									if(ComAdosBl[pos]==0&&carryBl==1){
										ComAdosBl[pos]=1;
										carryBl=0;

									}if(ComAdosBl[pos]==1&&carryBl==1){
										ComAdosBl[pos]=0;
										carryBl=1;
									}if(ComAdosBl[pos]==1&&carryBl==0){
										ComAdosBl[pos]=1;
										carryBl=0;

									}if(ComAdosBl[pos]==0&&carryBl==0){
										ComAdosBl[pos]=0;
										carryBl=0;
									}

								}//console.log(ComAdosBl);

								var AuxComAdosBl="";
								for(pos=0;pos<ComAdosBl.length;pos++){
									AuxComAdosBl+=ComAdosBl[pos];
								}

								AuxComAdosBl=AuxComAdosBl.toString(2);
								//console.log(AuxComAdosBl);
								var difBl=AuxComAdosBl.length;

								if(difBl==26){
									hexaBaseBl+=AuxComAdosBl;
								}else{
									if(AuxComAdosBl.substring(0,1)=="1"){
									for(pos=0;pos<(26-difBl);pos++){
										hexaBaseBl+="1";
									}hexaBaseBl+=AuxComAdosBl;
								}else{
									for(pos=0;pos<(26-difBl);pos++){
										hexaBaseBl+="0";
									}hexaBaseBl+=AuxComAdosBl;}
							}//console.log(hexaBaseBl);
								
								
								//console.log(hexaBaseBl);
								hexaBaseBl=parseInt(hexaBaseBl,2);

								console.log(hexaBaseBl.toString(16));

					}

						break;

		}

			case "AND":{console.log("Instruccion", i,"men ",numpal, " AND tipo R"); 
				out+=("Instruccion", i,"men ",numpal, " AND tipo R"); 
					console.log(temp);
					 var hexaArrayAnd=new Array(); 
						 		 var hexaBaseAnd="1104";
						 		 hexaBaseAnd=parseInt(hexaBaseAnd);
						  		 hexaBaseAnd=hexaBaseAnd.toString(2);
						  
						 		 



							   	 for(var lAnd=1;lAnd<temp.length;lAnd++){
									 Aux2=temp[lAnd].substring(1);
									 Aux2=parseInt(Aux2);
									 Aux2=Aux2.toString(2);
									 hexaArrayAnd.push(Aux2);
			
								 }
								 //console.log(hexaArrayAnd);
								 	var difAnd=0;
								 	var x1And=0;

								 	if(hexaArrayAnd[2].length==5){
										 hexaBaseAnd+=hexaArrayAnd[2];
										}else{
											 difAnd=(5-hexaArrayAnd[2].length);
											for( x1And=0;x1And<difAnd;x1And++){
													hexaBaseAnd+="0";
											}
											
											hexaBaseAnd+=hexaArrayAnd[2];
										}

									hexaBaseAnd+="000000";
									if(hexaArrayAnd[1].length==5){
											hexaBaseAnd+=hexaArrayAnd[1]
									}else{

											 difAnd=(5-hexaArrayAnd[1].length);
											for( x1And=0;x1And<difAnd;x1And++){
													hexaBaseAnd+="0";
											}
											hexaBaseAnd+=hexaArrayAnd[1]
									}

									if (hexaArrayAnd[0].length==5) {
										hexaBaseAnd+=hexaArrayAnd[0];

									}else{
											difAnd=(5-hexaArrayAnd[0].length);
											for( x1And=0;x1And<difAnd;x1And++){
													hexaBaseAnd+="0";
											}
											hexaBaseAnd+=hexaArrayAnd[0]
									}
								 
								
								 
								 hexaBaseAnd=parseInt(hexaBaseAnd,2);
								// console.log(hexaBaseAnd.toString(2));
								 hexaBaseAnd=hexaBaseAnd.toString(16);
								console.log(hexaBaseAnd);
								
		break;
		}



		
							
			case "BR": {console.log("Instruccion", i,"men ",numpal, " BR tipo R");

				out+=("Instruccion", i,"men ",numpal, " BR tipo R");
console.log(temp);

					 			 var hexaArrayBr=new Array(); 
						 		 var hexaBaseBr="107";
						 		 hexaBaseBr=parseInt(hexaBaseBr);
						  		 hexaBaseBr=hexaBaseBr.toString(2);
						  		// console.log(hexaBaseBr);
						  	
						  			
									Aux2=temp[1].substring(1);
									
								
									Aux2=parseInt(Aux2);
									//Aux2=Aux2*4;
									Aux2=Aux2.toString(2);
									//console.log(Aux2);
						
							
							if(Aux2.length==25){
								hexaBaseBr+=Aux2;
							}
							else{
								for(pos=0;pos<(25-Aux2.length);pos++){
									hexaBaseBr+="0";
									//console.log(hexaBaseBr);
								}hexaBaseBr+=Aux2;
			
							}//console.log(hexaBaseBr);
							hexaBaseBr=parseInt(hexaBaseBr,2);
							hexaBaseBr=hexaBaseBr.toString(16);
							console.log(hexaBaseBr);

						

					
			

			break;
		}
			case "B":{console.log("Instruccion", i,"men ",numpal, " B tipo B");
				out+=("Instruccion", i,"men ",numpal, " B tipo B");
console.log(temp);
				 var hexaArrayB=new Array(); 
						 		 var hexaBaseB="5";
						 		 hexaBaseB=parseInt(hexaBaseB);
						  		 hexaBaseB=hexaBaseB.toString(2);
						  		 
						  		 
						  			
						  			
									Aux2=temp[0]
									//console.log(Aux2);
									
									hexaArrayB.push(Aux2);
									var Aux2B=temp[1];
									Aux2B+=":";
									//console.log(Aux2Bl);
									
									var tempBArray=new Array();
									var BAux="";
									var tempBArrayCopia=new Array();

						for(var pos=0;pos<arraytemp.length;pos++){
							BAux=arraytemp[pos];
							tempBArray=BAux.split(" ");
							
							tempBArrayCopia.push(tempBArray[0]);
							
						}
							
						var contaLineB=1;
						var bandB=0;
						for(pos=0;pos<tempBArrayCopia.length;pos++){
							if(tempBArrayCopia[pos]==Aux2B){
								bandB=1;
								break;
							}
							contaLineB++;
						}	
							//console.log(tempBlArrayCopia[pos]);
						
						contaLineB=contaLineB.toString(2);
						//console.log(contaLineBl);
						if(bandB==1){
							if(contaLineB.length==26){
								hexaBaseB+=contaLineB;
							}else{
							
							
								for(pos=0;pos<(26-contaLineB.length);pos++){
								hexaBaseB+="0";
								}
							contaLineB=contaLineB.toString(2);
							hexaBaseB+=contaLineB;
							//console.log(hexaBaseBl);
						

						hexaBaseB=parseInt(hexaBaseB,2);
						hexaBaseB=hexaBaseB.toString(16);
						console.log(hexaBaseB);
						}
					}
						
						if(bandB==0){
							contaLineB=0;
							for(pos=i;pos>=0;pos--){
								if(tempBArrayCopia[pos]==Aux2B){
									break;
								}
								contaLineB++;
							} //console.log(contaLineBl);

							
							contaLineB=contaLineB.toString(2);
							//console.log(contaLineBl);
							var ComAdosB=new Array();

							for(pos=0;pos<contaLineB.length;pos++){
								ComAdosBl.push(contaLineB.substring(pos,pos+1));
							}
		
								//console.log(ComAdosBl);
							

							for(pos=0;pos<ComAdosB.length;pos++){
								ComAdosB[pos]=parseInt(ComAdosB[pos]);
								ComAdosB[pos]=Number(!ComAdosB[pos]);
								}//console.log(ComAdosBl);
								
								
								var carryB=1;
								for(pos=(ComAdosB.length)-1;pos>=0;pos--){
									if(ComAdosB[pos]==0&&carryB==1){
										ComAdosB[pos]=1;
										carryB=0;

									}if(ComAdosB[pos]==1&&carryB==1){
										ComAdosB[pos]=0;
										carryB=1;
									}if(ComAdosB[pos]==1&&carryB==0){
										ComAdosB[pos]=1;
										carryB=0;

									}if(ComAdosB[pos]==0&&carryB==0){
										ComAdosB[pos]=0;
										carryB=0;
									}

								}//console.log(ComAdosBl);

								var AuxComAdosB="";
								for(pos=0;pos<ComAdosBl.length;pos++){
									AuxComAdosB+=ComAdosBl[pos];
								}

								AuxComAdosB=AuxComAdosBl.toString(2);
								//console.log(AuxComAdosBl);
								var difB=AuxComAdosBl.length;

								if(difB==26){
									hexaBaseB+=AuxComAdosB;
								}else{
									if(AuxComAdosB.substring(0,1)=="1"){
									for(pos=0;pos<(26-difB);pos++){
										hexaBaseB+="1";
									}hexaBaseB+=AuxComAdosB;
								}else{
									for(pos=0;pos<(26-difB);pos++){
										hexaBaseB+="0";
									}hexaBaseB+=AuxComAdosB;}
							}//console.log(hexaBaseBl);
								
								
								//console.log(hexaBaseBl);
								hexaBaseB=parseInt(hexaBaseB,2);

								console.log(hexaBaseB.toString(16));

					}




			break;
						



			 }
		
	}


//////////////////
//////////////////7
/////////////////
	////////////////7
	if(temp[0]!="ADD"&&temp[0]!="SUB"&&temp[0]!="ADDI"&&temp[0]!="SUBI"&&
		temp[0]!="STUR"&&temp[0]!="LDUR"&&temp[0]!="B"&&temp[0]!="BR"&&temp[0]!="BL"&&
		temp[0]!="CBNZ"&&temp[0]!="CBZ"&&temp[0]!="AND"){

				//console.log(temp);
				switch(temp[1]){

					case "ADD": {
						var hexaArrayx=new Array(); 
						 		 var hexaBasex="1112";
						 		 hexaBasex=parseInt(hexaBasex);
						  		 hexaBasex=hexaBasex.toString(2);
						  
						 		 console.log("Instruccion", i,"men ",numpal, " ADD tipo R");
console.log(temp);


							   	 for(var lx=2;lx<temp.length;lx++){
									 Aux2=temp[lx].substring(1);
									 Aux2=parseInt(Aux2);
									 Aux2=Aux2.toString(2);
									 hexaArrayx.push(Aux2);
			
								 }//console.log(hexaArrayx);
								 	var difx=0;
								 	var x1x=0;

								 	if(hexaArrayx[2].length==5){
										 hexaBasex+=hexaArrayx[2];
										}else{
											 difx=(5-hexaArrayx[2].length);
											for( x1x=0;x1x<difx;x1x++){
													hexaBasex+="0";
											}
											
											hexaBasex+=hexaArrayx[2];
										}

									hexaBasex+="000000";
									if(hexaArrayx[1].length==5){
											hexaBasex+=hexaArrayx[1]
									}else{

											 difx=(5-hexaArrayx[1].length);
											for( x1x=0;x1x<difx;x1x++){
													hexaBasex+="0";
											}
											hexaBasex+=hexaArray[1]
									}

									if (hexaArrayx[0].length==5) {
										hexaBasex+=hexaArrayx[0];

									}else{
											difx=(5-hexaArrayx[0].length);
											for( x1x=0;x1x<difx;x1x++){
													hexaBasex+="0";
											}
											hexaBasex+=hexaArrayx[0]
									}
								 //console.log(hexaBasex);
								
								 
								 hexaBasex=parseInt(hexaBasex,2);
								 
								 hexaBasex=hexaBasex.toString(16);
								console.log(hexaBasex);
									break;
									
			
						}
			
				
			case "ADDI": {console.log("Instruccion", i,"men ",numpal, " ADDI tipo I");
console.log(temp);
								 var hexaArrayAddix=new Array(); 
						 		 var hexaBaseAddix="580";
						 		 hexaBaseAddix=parseInt(hexaBaseAddix);
						  		 hexaBaseAddix=hexaBaseAddix.toString(2);
						  		// console.log(hexaBaseAddi);
						  		 
						  		for(var l2x=2;l2x<temp.length;l2x++){
									 Aux2=temp[l2x].substring(1);
									 Aux2=parseInt(Aux2);
									 Aux2=Aux2.toString(2);
									 hexaArrayAddix.push(Aux2);
			
								 }
								 //console.log(hexaArrayAddix);
									var difAddix=0;
								 	var x1Addix=0;
								 		//console.log(hexaArrayAddi);
								 		var signox=(hexaArrayAddix[2]);
								 		//console.log(signox);
								 		
								 		////////////
								 		if(signox.substring(0,1)=="-"){
								 			//console.log(signo);
								 				signox=signox.substring(1,signox.length+1);
								 				signox=parseInt(signox,2);
								 				//console.log(signox);
								 				signox=signox.toString(2);
								 					//console.log(signo);
								 var ComAdosAddix=new Array();

							for(pos=0;pos<signox.length;pos++){
							ComAdosAddix.push(signox.substring(pos,pos+1));
							}
							//console.log(ComAdosAddi);

		
							for(pos=0;pos<ComAdosAddix.length;pos++){
								ComAdosAddix[pos]=parseInt(ComAdosAddix[pos]);
								ComAdosAddix[pos]=Number(!ComAdosAddix[pos]);
								}
								

								var carryAddix=1;
								for(pos=ComAdosAddix.length-1;pos>=0;pos--){
									if(ComAdosAddix[pos]==0&&carryAddix==1){
										ComAdosAddix[pos]=1;
										carryAddix=0;

									}if(ComAdosAddix[pos]==1&&carryAddix==1){
										ComAdosAddix[pos]=0;
										carryAddix=1;
									}if(ComAdosAddix[pos]==1&&carryAddix==0){
										ComAdosAddix[pos]=1;
										carryAddix=0;

									}if(ComAdosAddix[pos]==0&&carryAddix==0){
										ComAdosAddix[pos]=0;
										carryAddix=0;
									}

								}//console.log(ComAdosC);

								var AuxComAdosAddix="";
								for(pos=0;pos<ComAdosAddix.length;pos++){
									AuxComAdosAddix+=ComAdosAddix[pos];
								}

									if(AuxComAdosAddix.length==12){
										 hexaBaseAddix+=AuxComAdosAddix;
										}else{
											 difAddix=(12-AuxComAdosAddix.length);
											for( x1Addix=0;x1Addix<difAddix;x1Addix++){
													hexaBaseAddix+="1";
											}
											
											hexaBaseAddix+=AuxComAdosAddix;
										} //console.log(hexaBaseAddix.toString(2));



							}//////fin compAdos
							else{


								 	if(hexaArrayAddix[2].length==12){
										 hexaBaseAddix+=hexaArrayAddix[2];
										}else{
											 difAddix=(12-hexaArrayAddix[2].length);
											for( x1Addix=0;x1Addix<difAddix;x1Addix++){
													hexaBaseAddix+="0";
											}
											
											hexaBaseAddix+=hexaArrayAddix[2];
										}

									}





/////////////////////////////////////////////////7
									
									if(hexaArrayAddix[1].length==5){
											hexaBaseAddix+=hexaArrayAddix[1]
									}else{

											 difAddix=(5-hexaArrayAddix[1].length);
											for( x1Addix=0;x1Addix<difAddix;x1Addix++){
													hexaBaseAddix+="0";
											}
											hexaBaseAddix+=hexaArrayAddix[1]
									}

									if (hexaArrayAddix[0].length==5) {
										hexaBaseAddix+=hexaArrayAddix[0];

									}else{
											difAddix=(5-hexaArrayAddix[0].length);
											for( x1Addix=0;x1Addix<difAddix;x1Addix++){
													hexaBaseAddix+="0";
											}
											hexaBaseAddix+=hexaArrayAddix[0];
									}
								 
									
				
									hexaBaseAddix=parseInt(hexaBaseAddix,2);
								 	//console.log(hexaBaseAddi.toString(2));
								 	hexaBaseAddix=hexaBaseAddix.toString(16);
									console.log(hexaBaseAddix);
										

			break;
		}
		case "SUB":{console.log("Instruccion", i,"men ",numpal, " SUB tipo R"); 
console.log(temp);
								 var hexaArraySubx=new Array(); 
						 		 var hexaBaseSubx="1624";
						 		 hexaBaseSubx=parseInt(hexaBaseSubx);
						  		 hexaBaseSubx=hexaBaseSubx.toString(2);
						  		 //console.log(hexaBaseSubx);
						  		 
						  		for(var l3x=2;l3x<temp.length;l3x++){
									 Aux2=temp[l3x].substring(1);
									 Aux2=parseInt(Aux2);
									 Aux2=Aux2.toString(2);
									 hexaArraySubx.push(Aux2);
			
								 }
									 var difSubx=0;
								 	var x1Subx=0;

								 	if(hexaArraySubx[2].length==5){
										 hexaBaseSubx+=hexaArraySubx[2];
										}else{
											 difSubx=(5-hexaArraySubx[2].length);
											for( x1Subx=0;x1Subx<difSubx;x1Subx++){
													hexaBaseSubx+="0";
											}
											
											hexaBaseSubx+=hexaArraySubx[2];
										}
														hexaBaseSubx+="000000";
									
									if(hexaArraySubx[1].length==5){
											hexaBaseSubx+=hexaArraySubx[1]
									}else{

											 difSubx=(5-hexaArraySubx[1].length);
											for( x1Subx=0;x1Subx<difSubx;x1Subx++){
													hexaBaseSubx+="0";
											}
											hexaBaseSubx+=hexaArraySubx[1]
									}

									if (hexaArraySubx[0].length==5) {
										hexaBaseSubx+=hexaArraySubx[0];

									}else{
											difSubx=(5-hexaArraySubx[0].length);
											for( x1Subx=0;x1Subx<difSubx;x1Subx++){
													hexaBaseSubx+="0";
											}
											hexaBaseSubx+=hexaArraySubx[0]
									}
								 
									
				
									hexaBaseSubx=parseInt(hexaBaseSubx,2);
								 	//console.log(hexaBaseSub.toString(2));
								 	hexaBaseSubx=hexaBaseSubx.toString(16);
									console.log(hexaBaseSubx);
									break;

				}
			case "STUR":{console.log("Instruccion", i,"men ",numpal, " STUR tipo D");
console.log(temp);
					 			 var hexaArraySturx=new Array(); 
						 		 var hexaBaseSturx="1984";
						 		 hexaBaseSturx=parseInt(hexaBaseSturx);
						  		 hexaBaseSturx=hexaBaseSturx.toString(2);
						  		 
						  		 
						  		for(var l4x=2;l4x<temp.length;l4x++){
						  			
									Aux2=temp[l4x].substring(1);
								    if(l4x==3){
										Aux2=temp[l4x].substring(2);
									}else if(l4x==4){
										Aux2=temp[l4x].substring(1,Aux2.length);
										var tempox=parseInt(Aux2);
										tempox=tempox*8;
										Aux2=tempox;

									}
									 
									 Aux2=parseInt(Aux2);
									
									 Aux2=Aux2.toString(2);
									  
									 hexaArraySturx.push(Aux2);
									
								 }

								  	var difSturx=0;
								 	var x1Sturx=0;
								 	//console.log(hexaArraySturx);
								 	
								 	if(hexaArraySturx[2].length==9){
										 hexaBaseSturx+=hexaArraySturx[2];
										}else{
											 difSturx=(9-hexaArraySturx[2].length);
											for( x1Sturx=0;x1Sturx<difSturx;x1Sturx++){
													hexaBaseSturx+="0";
											}
											
											hexaBaseSturx+=hexaArraySturx[2];
										}

									hexaBaseSturx+="00";
									//console.log(hexaArraySturx[1]);
									if(hexaArraySturx[1].length==5){
											hexaBaseSturx+=hexaArraySturx[1]
									}else{

											 difSturx=(5-hexaArraySturx[1].length);
											for( x1Sturx=0;x1Sturx<difSturx;x1Sturx++){
													hexaBaseSturx+="0";
											}
											hexaBaseSturx+=hexaArraySturx[1]
									}

									if (hexaArraySturx[0].length==5) {
										hexaBaseSturx+=hexaArraySturx[0];

									}else{
											difSturx=(5-hexaArraySturx[0].length);
											for( x1Sturx=0;x1Sturx<difSturx;x1Sturx++){
													hexaBaseSturx+="0";
											}
											hexaBaseSturx+=hexaArraySturx[0]
									}
								 	//console.log(hexaBaseSturx);
									
				
									hexaBaseSturx=parseInt(hexaBaseSturx,2);
								 	//console.log(hexaBaseStur.toString(2));
								 	hexaBaseSturx=hexaBaseSturx.toString(16);
									console.log(hexaBaseSturx);
									




			 break;
			}

			case "LDUR":{ console.log("Instruccion", i,"men ",numpal, " LDUR tipo D");
console.log(temp);
					 			 var hexaArrayLdurx=new Array(); 
						 		 var hexaBaseLdurx="1986";
						 		 hexaBaseLdurx=parseInt(hexaBaseLdurx);
						  		 hexaBaseLdurx=hexaBaseLdurx.toString(2);
						  		 
						  		 
						  		for(var l5x=2;l5x<temp.length;l5x++){
						  			
									Aux2=temp[l5x].substring(1);
								    if(l5x==3){
										Aux2=temp[l5x].substring(2);
									}else if(l5x==4){
										Aux2=temp[l5x].substring(1,Aux2.length);
										var tempo1x=parseInt(Aux2);
										tempo1x=tempo1x*8;
										Aux2=tempo1x;

									}
									 
									 Aux2=parseInt(Aux2);
									
									 Aux2=Aux2.toString(2);
									  
									 hexaArrayLdurx.push(Aux2);
									
								 }

								  	var difLdurx=0;
								 	var x1Ldurx=0;
								 	//console.log(hexaArrayLdur);
								 	if(hexaArrayLdurx[2].length==9){
										 hexaBaseLdurx+=hexaArrayLdurx[2];
										}else{
											 difLdurx=(9-hexaArrayLdurx[2].length);
											for( x1Ldurx=0;x1Ldurx<difLdurx;x1Ldurx++){
													hexaBaseLdurx+="0";
											}
											
											hexaBaseLdurx+=hexaArrayLdurx[2];
										}
									hexaBaseLdurx+="00";
									
									if(hexaArrayLdurx[1].length==5){
											hexaBaseLdurx+=hexaArrayLdurx[1]
									}else{

											 difLdurx=(5-hexaArrayLdurx[1].length);
											for( x1Ldurx=0;x1Ldurx<difLdurx;x1Ldurx++){
													hexaBaseLdurx+="0";
											}
											hexaBaseLdurx+=hexaArrayLdurx[1]
									}

									if (hexaArrayLdurx[0].length==5) {
										hexaBaseLdurx+=hexaArrayLdurx[0];

									}else{
											difLdurx=(5-hexaArrayLdurx[0].length);
											for( x1Ldurx=0;x1Ldurx<difLdurx;x1Ldurx++){
													hexaBaseLdurx+="0";
											}
											hexaBaseLdurx+=hexaArrayLdurx[0]
									}
								 
									
				
									hexaBaseLdurx=parseInt(hexaBaseLdurx,2);
								// 	console.log(hexaBaseLdur.toString(2));
								 	hexaBaseLdurx=hexaBaseLdurx.toString(16);
									console.log(hexaBaseLdurx);
										break;	
 
											

		}
			case "CBNZ":{console.log("Instruccion", i,"men ",numpal, " CBNZ tipo CB");
console.log(temp);
					 			 var hexaArrayCbnzx=new Array(); 
						 		 var hexaBaseCbnzx="181";
						 		 hexaBaseCbnzx=parseInt(hexaBaseCbnzx);
						  		 hexaBaseCbnzx=hexaBaseCbnzx.toString(2);
						  		 
						  		 
						  	
						  			
									Aux2=temp[2].substring(1);
									Aux2=parseInt(Aux2);
									Aux2=Aux2.toString(2);
									hexaArrayCbnzx.push(Aux2);
									var Aux2Cbnzx=temp[3];
									Aux2Cbnzx+=":"
									//console.log(Aux2Cbnzx);
									var tempCbnzArrayx=new Array();
									var CbnzAuxx="";
									var tempCbnzArrayCopiax=new Array();

						for(var pos=0;pos<arraytemp.length;pos++){
							CbnzAuxx=arraytemp[pos];
							tempCbnzArrayx=CbnzAuxx.split(" ");
							
							tempCbnzArrayCopiax.push(tempCbnzArrayx[0]);
							
						}//console.log(tempCbnzArrayCopiax);
							
						var contaLinex=0;
						var bandx=0;
						for(pos=i;pos<tempCbnzArrayCopiax.length;pos++){
							if(tempCbnzArrayCopiax[pos]==Aux2Cbnzx){
								bandx=1;
								break;
							}
							contaLinex++;
						}	//console.log(contaLinex);

						
						contaLinex=contaLinex.toString(2);
						if(bandx==1){
						if(contaLinex.length==19){
							hexaBaseCbnzx+=contaLinex;
						}else{
							
							
						for(pos=0;pos<(19-contaLinex.length);pos++){
							hexaBaseCbnzx+="0";
						}contaLinex=contaLinex.toString(2);
						 hexaBaseCbnzx+=contaLinex;
					}

						
//console.log(hexaArrayCbnzx);
					if(hexaArrayCbnzx.length==5){
							hexaBaseCbnzx+=hexaArrayCbnzx[0];
						}else{

						for(pos=0;pos<(5- hexaArrayCbnzx[0].length);pos++){
							hexaBaseCbnzx+="0";
						}hexaBaseCbnzx+=hexaArrayCbnzx[0];
					}

					
						
						
						hexaBaseCbnzx=parseInt(hexaBaseCbnzx,2);
						
						hexaBaseCbnzx=hexaBaseCbnzx.toString(16);
						
							console.log(hexaBaseCbnzx);
						}
			
//salto negativo
						if(bandx==0){
							contaLinex=0;
							for(pos=i;pos>-1;pos--){
								if(tempCbnzArrayCopiax[pos]==Aux2Cbnzx){
									break;
								}
								contaLinex++;
							}

							
							contaLinex=contaLinex.toString(2);
							//console.log(contaLine);
							var ComAdosx=new Array();

							for(pos=0;pos<contaLinex.length;pos++){
							ComAdosx.push(contaLinex.substring(pos,pos+1));
							}
		

							var ComAdosNumericx= new Array();

							for(pos=0;pos<ComAdosx.length;pos++){
								ComAdosx[pos]=parseInt(ComAdosx[pos]);
								ComAdosx[pos]=Number(!ComAdosx[pos]);
								}
								

								var carryx=1;
								for(pos=ComAdosx.length-1;pos>=0;pos--){
									if(ComAdosx[pos]==0&&carryx==1){
										ComAdosx[pos]=1;
										carryx=0;

									}if(ComAdosx[pos]==1&&carryx==1){
										ComAdosx[pos]=0;
										carryx=1;
									}if(ComAdosx[pos]==1&&carryx==0){
										ComAdosx[pos]=1;
										carryx=0;

									}if(ComAdosx[pos]==0&&carryx==0){
										ComAdosx[pos]=0;
										carryx=0;
									}

								}//console.log(ComAdos);

								var AuxComAdosx="";
								for(pos=0;pos<ComAdosx.length;pos++){
									AuxComAdosx+=ComAdosx[pos];
								}

								AuxComAdosx=AuxComAdosx.toString(2);
								
								difx=AuxComAdosx.length;
								if(difx==19){
									hexaBaseCbnzx+=AuxComAdosx;
								}else{
									for(pos=0;pos<(19-difx);pos++){
										hexaBaseCbnzx+="0";
									}hexaBaseCbnzx+=AuxComAdosx;
								}
								//console.log(hexaBaseCbnz);
								if(hexaArrayCbnzx[0].length==5){
									hexaBaseCbnzx+=hexaArrayCbnzx[0];

								}else{
									for(pos=0;pos<(5-hexaArrayCbnzx[0].length);pos++){
										hexaBaseCbnzx+="0";
									}hexaBaseCbnzx+=hexaArrayCbnzx[0];

								}//console.log(hexaBaseCbnz);
								hexaBaseCbnzx=parseInt(hexaBaseCbnzx,2);
								console.log(hexaBaseCbnzx.toString(16));

						}break;
			}

			case "CBZ":{ console.log("Instruccion", i,"men ",numpal, " CBZ tipo CB");
console.log(temp);
					 			 var hexaArrayCbzx=new Array(); 
						 		 var hexaBaseCbzx="180";
						 		 hexaBaseCbzx=parseInt(hexaBaseCbzx);
						  		 hexaBaseCbzx=hexaBaseCbzx.toString(2);
						  		 
						  		 
						  	
						  			
									Aux2=temp[2].substring(1);
									Aux2=parseInt(Aux2);
									Aux2=Aux2.toString(2);
									hexaArrayCbzx.push(Aux2);
									var Aux2Cbzx=temp[3];
									Aux2Cbzx+=":"
									
									var tempCbzArrayx=new Array();
									var CbzAuxx="";
									var tempCbzArrayCopiax=new Array();

						for(var pos=0;pos<arraytemp.length;pos++){
							CbzAuxx=arraytemp[pos];
							tempCbzArrayx=CbzAuxx.split(" ");
							
							tempCbzArrayCopiax.push(tempCbzArrayx[0]);
							
						}
							
						var contaLinecx=0;
						var bandcx=0;
						for(pos=i;pos<tempCbzArrayCopiax.length;pos++){
							if(tempCbzArrayCopiax[pos]==Aux2Cbzx){
								bandcx=1;
								break;
							}
							contaLinecx++;
						}	

						
						contaLinecx=contaLinecx.toString(2);
					if(bandcx==1){
						if(contaLinecx.length==19){
							hexaBaseCbzx+=contaLinecx;
						}else{
							
							
						for(pos=0;pos<(19-contaLinecx.length);pos++){
							hexaBaseCbzx+="0";
						}contaLinecx=contaLinecx.toString(2);
						 hexaBaseCbzx+=contaLinecx;
					}

						//console.log(hexaArrayCbzx);

					if(hexaArrayCbzx[0].length==5){
							hexaBaseCbzx+=hexaArrayCbzx[0];
						}else{

						for(pos=0;pos<(5- hexaArrayCbzx[0].length);pos++){
							hexaBaseCbzx+="0";
						}hexaBaseCbzx+=hexaArrayCbzx[0];
					}

					
						
						
						hexaBaseCbzx=parseInt(hexaBaseCbzx,2);
						
						hexaBaseCbzx=hexaBaseCbzx.toString(16);
						
						//console.log(hexaBaseCbzx);

						}
			
//salto negativo
						if(bandcx==0){
							contaLinecx=0;
							for(pos=i;pos>-1;pos--){
								if(tempCbzArrayCopiax[pos]==Aux2Cbzx){
									break;
								}
								contaLinecx++;
							}

							
							contaLinecx=contaLinecx.toString(2);
							//console.log(contaLinec);
							var ComAdosCx=new Array();

							for(pos=0;pos<contaLinecx.length;pos++){
							ComAdosCx.push(contaLinecx.substring(pos,pos+1));
							}
		

							var ComAdosNumericx= new Array();

							for(pos=0;pos<ComAdosCx.length;pos++){
								ComAdosCx[pos]=parseInt(ComAdosCx[pos]);
								ComAdosCx[pos]=Number(!ComAdosCx[pos]);
								}
								

								var carrycx=1;
								for(pos=ComAdosCx.length-1;pos>=0;pos--){
									if(ComAdosCx[pos]==0&&carrycx==1){
										ComAdosCx[pos]=1;
										carrycx=0;

									}if(ComAdosCx[pos]==1&&carrycx==1){
										ComAdosCx[pos]=0;
										carrycx=1;
									}if(ComAdosCx[pos]==1&&carrycx==0){
										ComAdosCx[pos]=1;
										carrycx=0;

									}if(ComAdosCx[pos]==0&&carrycx==0){
										ComAdosCx[pos]=0;
										carrycx=0;
									}

								}//console.log(ComAdosC);

								var AuxComAdoscx="";
								for(pos=0;pos<ComAdosCx.length;pos++){
									AuxComAdoscx+=ComAdosCx[pos];
								}

								AuxComAdoscx=AuxComAdoscx.toString(2);
								
								var difcx=AuxComAdoscx.length;
								if(difcx==19){
									hexaBaseCbzx+=AuxComAdoscx;
								}else{
									for(pos=0;pos<(19-difcx);pos++){
										hexaBaseCbzx+="1";
									}hexaBaseCbzx+=AuxComAdoscx;
								}
								//console.log(hexaArrayCbzx);
								if(hexaArrayCbzx[0].length==5){
									hexaBaseCbzx+=hexaArrayCbzx[0];

								}else{
									for(pos=0;pos<(5-hexaArrayCbzx[0].length);pos++){
										hexaBaseCbzx+="0";
									}hexaBaseCbzx+=hexaArrayCbzx[0];

								}//console.log(hexaBaseCbz);
								hexaBaseCbzx=parseInt(hexaBaseCbzx,2);
								console.log(hexaBaseCbzx.toString(16));

						}break;
					}
		case "BL":{ console.log("Instruccion", i,"men ",numpal, " BL tipo B");  
console.log(temp);
					 			 var hexaArrayBlx=new Array(); 
						 		 var hexaBaseBlx="37";
						 		 hexaBaseBlx=parseInt(hexaBaseBlx);
						  		 hexaBaseBlx=hexaBaseBlx.toString(2);
						  		 
						  		 
						  			
						  			
									Aux2=temp[1]
									//console.log(Aux2);
									
									hexaArrayBlx.push(Aux2);
									var Aux2Blx=temp[2];
									Aux2Blx+=":";
									console.log(Aux2Blx);
									
									var tempBlArrayx=new Array();
									var BlAuxx="";
									var tempBlArrayCopiax=new Array();

						for(var pos=0;pos<arraytemp.length;pos++){
							BlAuxx=arraytemp[pos];
							tempBlArrayx=BlAuxx.split(" ");
							
							tempBlArrayCopiax.push(tempBlArrayx[0]);
							
						}
							
						var contaLineBlx=1;
						var bandBlx=0;
						for(pos=i;pos<tempBlArrayCopiax.length;pos++){
							if(tempBlArrayCopiax[pos]==Aux2Blx){
								bandBlx=1;
								break;
							}
							contaLineBlx++;
						}	
							//console.log(tempBlArrayCopia[pos]);
						
						contaLineBlx=contaLineBlx.toString(2);
						//console.log(contaLineBl);
						if(bandBlx==1){
							if(contaLineBlx.length==26){
								hexaBaseBlx+=contaLineBlx;
							}else{
							
							
								for(pos=0;pos<(26-contaLineBlx.length);pos++){
								hexaBaseBlx+="0";
								}
							contaLineBlx=contaLineBlx.toString(2);
							hexaBaseBlx+=contaLineBlx;
							//console.log(hexaBaseBl);
						

						hexaBaseBlx=parseInt(hexaBaseBlx,2);
						hexaBaseBlx=hexaBaseBlx.toString(16);
						console.log(hexaBaseBlx);
						}
					}
						
						if(bandBlx==0){
							contaLineBlx=0;
							for(pos=i;pos>=0;pos--){
								if(tempBlArrayCopiax[pos]==Aux2Blx){
									break;
								}
								contaLineBlx++;
							} //console.log(contaLineBl);

							
							contaLineBlx=contaLineBlx.toString(2);
							//console.log(contaLineBl);
							var ComAdosBlx=new Array();

							for(pos=0;pos<contaLineBlx.length;pos++){
								ComAdosBlx.push(contaLineBlx.substring(pos,pos+1));
							}
		
								//console.log(ComAdosBl);
							

							for(pos=0;pos<ComAdosBlx.length;pos++){
								ComAdosBlx[pos]=parseInt(ComAdosBlx[pos]);
								ComAdosBlx[pos]=Number(!ComAdosBlx[pos]);
								}//console.log(ComAdosBl);
								
								
								var carryBlx=1;
								for(pos=(ComAdosBlx.length)-1;pos>=0;pos--){
									if(ComAdosBlx[pos]==0&&carryBlx==1){
										ComAdosBlx[pos]=1;
										carryBlx=0;

									}if(ComAdosBlx[pos]==1&&carryBlx==1){
										ComAdosBlx[pos]=0;
										carryBlx=1;
									}if(ComAdosBlx[pos]==1&&carryBlx==0){
										ComAdosBlx[pos]=1;
										carryBlx=0;

									}if(ComAdosBlx[pos]==0&&carryBlx==0){
										ComAdosBlx[pos]=0;
										carryBlx=0;
									}

								}//console.log(ComAdosBl);

								var AuxComAdosBlx="";
								for(pos=0;pos<ComAdosBlx.length;pos++){
									AuxComAdosBlx+=ComAdosBlx[pos];
								}

								AuxComAdosBlx=AuxComAdosBlx.toString(2);
								//console.log(AuxComAdosBl);
								var difBlx=AuxComAdosBlx.length;

								if(difBlx==26){
									hexaBaseBlx+=AuxComAdosBlx;
								}else{
									if(AuxComAdosBlx.substring(0,1)=="1"){
									for(pos=0;pos<(26-difBlx);pos++){
										hexaBaseBlx+="1";
									}hexaBaseBlx+=AuxComAdosBlx;
								}else{
									for(pos=0;pos<(26-difBlx);pos++){
										hexaBaseBlx+="0";
									}hexaBaseBlx+=AuxComAdosBlx;}
							}//console.log(hexaBaseBl);
								
								
								//console.log(hexaBaseBl);
								hexaBaseBlx=parseInt(hexaBaseBlx,2);

								console.log(hexaBaseBlx.toString(16));

					}

						break;

		}

			case "AND":{console.log("Instruccion", i,"men ",numpal, "AND tipo R"); 
			console.log(temp);
					 			 var hexaArrayAndx=new Array(); 
						 		 var hexaBaseAndx="1104";
						 		 hexaBaseAndx=parseInt(hexaBaseAndx);
						  		 hexaBaseAndx=hexaBaseAndx.toString(2);
						  
						 		 



							   	 for(var lAndx=2;lAndx<temp.length;lAndx++){
									 Aux2=temp[lAndx].substring(1);
									 Aux2=parseInt(Aux2);
									 Aux2=Aux2.toString(2);
									 hexaArrayAndx.push(Aux2);
			
								 }
								 console.log(hexaArrayAndx);
								 	var difAndx=0;
								 	var x1Andx=0;

								 	if(hexaArrayAndx[2].length==5){
										 hexaBaseAndx+=hexaArrayAndx[2];
										}else{
											 difAndx=(5-hexaArrayAddix[2].length);
											for( x1AndX=0;x1Andx<difAndX;x1Andx++){
													hexaBaseAndx+="0";
											}
											
											hexaBaseAndx+=hexaArrayAndx[2];
										}

									hexaBaseAndx+="000000";
									if(hexaArrayAndx[1].length==5){
											hexaBaseAndx+=hexaArrayAndx[1]
									}else{

											 difAndx=(5-hexaArrayAndx[1].length);
											for( x1Andx=0;x1Andx<difAndx;x1AndX++){
													hexaBaseAndx+="0";
											}
											hexaBaseAndx+=hexaArrayAndx[1]
									}

									if (hexaArrayAndx[0].length==5) {
										hexaBaseAndx+=hexaArrayAndx[0];

									}else{
											difAndx=(5-hexaArrayAndx[0].length);
											for( x1Andx=0;x1Andx<difAndx;x1AndX++){
													hexaBaseAndx+="0";
											}
											hexaBaseAndx+=hexaArrayAndx[0]
									}
								 
								
								 
								 hexaBaseAndx=parseInt(hexaBaseAndx,2);
								// console.log(hexaBaseAnd.toString(2));
								 hexaBaseAndx=hexaBaseAndx.toString(16);
								console.log(hexaBaseAndx);
								
		break;
		}



		
							
			case "BR": {console.log("Instruccion", i,"men ",numpal, " BR tipo R");

console.log(temp);
					 			 var hexaArrayBrx=new Array(); 
						 		 var hexaBaseBrx="107";
						 		 hexaBaseBrx=parseInt(hexaBaseBrx);
						  		 hexaBaseBrx=hexaBaseBrx.toString(2);
						  		// consolex.log(hexaBaseBr);
						  	
						  			
									Aux2=temp[2].substring(1);
									
								
									Aux2=parseInt(Aux2);
									//Aux2=Aux2*4;
									Aux2=Aux2.toString(2);
									//console.log(Aux2);
						
							
							if(Aux2.length==25){
								hexaBaseBrx+=Aux2;
							}
							else{
								for(pos=0;pos<(25-Aux2.length);pos++){
									hexaBaseBrx+="0";
									//console.log(hexaBaseBr);
								}hexaBaseBrx+=Aux2;
			
							}//console.log(hexaBaseBr);
							hexaBaseBrx=parseInt(hexaBaseBrx,2);
							hexaBaseBrx=hexaBaseBrx.toString(16);
							console.log(hexaBaseBrx);

						

					
			

			break;
		}
			case "B":{console.log("Instruccion", i,"men ",numpal, " B tipo B");
console.log(temp);
				 var hexaArrayBx=new Array(); 
						 		 var hexaBaseBx="5";
						 		 hexaBaseBx=parseInt(hexaBaseBx);
						  		 hexaBaseBx=hexaBaseBx.toString(2);
						  		 
						  		 
						  			
						  			
									Aux2=temp[1]
									
									hexaArrayBx.push(Aux2);
									var Aux2Bx=temp[2];
									Aux2Bx+=":";
									//console.log(Aux2Bx);
									
									var tempBArrayx=new Array();
									var BAuxx="";
									var tempBArrayCopiax=new Array();

						for(var pos=0;pos<arraytemp.length;pos++){
							BAuxx=arraytemp[pos];
							tempBArrayx=BAuxx.split(" ");
							
							tempBArrayCopiax.push(tempBArrayx[0]);
							
						}
							
						var contaLineBx=0;
						var bandBx=0;
						for(pos=0;pos<tempBArrayCopiax.length;pos++){
							if(tempBArrayCopiax[pos]==Aux2Bx){
								bandBx=1;
								break;
							}
							contaLineBx++;
						}	
							//console.log(tempBlArrayCopia[pos]);
						
						contaLineBx=contaLineBx.toString(2);
						//console.log(contaLineBl);
						if(bandBx==1){
							if(contaLineBx.length==26){
								hexaBaseBx+=contaLineBx;
							}else{
							
							
								for(pos=0;pos<(26-contaLineBx.length);pos++){
								hexaBaseBx+="0";
								}
							contaLineBx=contaLineBx.toString(2);
							hexaBaseBx+=contaLineBx;
							//console.log(hexaBaseBl);
						

						hexaBaseBx=parseInt(hexaBaseBx,2);
						hexaBaseBx=hexaBaseBx.toString(16);
						console.log(hexaBaseBx);
						}
					}
						
						if(bandBx==0){
							contaLineBx=0;
							for(pos=i;pos>=0;pos--){
								if(tempBArrayCopiax[pos]==Aux2Bx){
									break;
								}
								contaLineBx++;
							} //console.log(contaLineBl);

							
							contaLineBx=contaLineBx.toString(2);
							//console.log(contaLineBl);
							var ComAdosBx=new Array();

							for(pos=0;pos<contaLineBx.length;pos++){
								ComAdosBx.push(contaLineBx.substring(pos,pos+1));
							}
		
								//console.log(ComAdosBl);
							

							for(pos=0;pos<ComAdosBx.length;pos++){
								ComAdosBx[pos]=parseInt(ComAdosBx[pos]);
								ComAdosBx[pos]=Number(!ComAdosBx[pos]);
								}//console.log(ComAdosBl);
								
								
								var carryBx=1;
								for(pos=(ComAdosBx.length)-1;pos>=0;pos--){
									if(ComAdosBx[pos]==0&&carryBx==1){
										ComAdosBx[pos]=1;
										carryBx=0;

									}if(ComAdosBx[pos]==1&&carryBx==1){
										ComAdosBx[pos]=0;
										carryBx=1;
									}if(ComAdosBx[pos]==1&&carryBx==0){
										ComAdosBx[pos]=1;
										carryBx=0;

									}if(ComAdosBx[pos]==0&&carryBx==0){
										ComAdosBx[pos]=0;
										carryBx=0;
									}

								}//console.log(ComAdosBl);

								var AuxComAdosBx="";
								for(pos=0;pos<ComAdosBx.length;pos++){
									AuxComAdosBx+=ComAdosBx[pos];
								}

								AuxComAdosBx=AuxComAdosBx.toString(2);
								//console.log(AuxComAdosBl);
								var difBx=AuxComAdosBx.length;

								if(difBx==26){
									hexaBaseBx+=AuxComAdosBx;
								}else{
									if(AuxComAdosBx.substring(0,1)=="1"){
									for(pos=0;pos<(26-difBx);pos++){
										hexaBaseBx+="1";
									}hexaBaseBx+=AuxComAdosBx;
								}else{
									for(pos=0;pos<(26-difBx);pos++){
										hexaBaseBx+="0";
									}hexaBaseBx+=AuxComAdosBx;}
							}//console.log(hexaBaseBl);
								
								
								//console.log(hexaBaseBl);
								hexaBaseBx=parseInt(hexaBaseBx,2);

								console.log(hexaBaseBx.toString(16));

					}




			break;
						



			 }
		


				}


				//console.log(temp);
	}
		/*se resetea el vector que guarda la linea
		de codigo*/
			var j=temp.length;

			for (var n=0;n<j;n++){
				temp.pop();
				
			}
		

	
	}
	document.getElementById("textarea2").innerHTML=out+"\n";
}

