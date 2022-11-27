//✔
textbar = document.getElementById('text-bar');
const dropDown = document.querySelector('.drop-down');
timeDrop = document.getElementById('time-drop');
lengthDrop = document.getElementById('length-drop');
temperatureDrop = document.getElementById('temperature-drop');
weightDrop = document.getElementById('weight-drop');
currencyDrop = document.getElementById('currency-drop');
percentageDrop = document.getElementById('percentage-drop')
timeCard = document.getElementById('time-card');
lengthCard = document.getElementById('length-card');
temperatureCard = document.getElementById('temperature-card');
weightCard = document.getElementById('weight-card');
currencyCard = document.getElementById('currency-card');
percentageCard = document.getElementById('percentage-card');

xbuttons = document.querySelectorAll(".x-container-class");

resultContainer = document.querySelectorAll(".result-container");
convert = document.getElementById('convert-button')
percentageInputMax = document.getElementById('percentage-input-max');
percentageInputChosen = document.getElementById('percentage-input-chosen');

let bife = 0;
let names = [];
let percentage = false;

const dropDownFlexs = document.querySelectorAll('.drop-down-flex');

dropDownFlexs.forEach((ele) => 
{
	const dropElements = Array.from(ele.children);
	dropElements.forEach((dropelement) => 
	{
		  
		  dropelement.addEventListener('click', () => {
		  element = dropelement.children[0];
		  if (bife != 2)
		  {
		  	element.textContent += '✔';
			  bife += 1;
			  console.log(element);

		  }

		})
	});
});

function delete_bife (dropDownFlexs) {
		dropDownFlexs.forEach((ele) => 
		{
			dropElements = Array.from(ele.children);
			dropElements.forEach((dropelement) => 
			{
				  element = dropelement.children[0];
				  content = element.innerHTML;

				  if(content.includes('✔') == true)
				  {

				  	newString = content.replaceAll("✔", "");
				  	element.innerHTML = newString;
				  }



				})
			})
		}

function get_names (dropDownFlexs) {

	dropDownFlexs.forEach((ele) => 
	{
		dropElements = Array.from(ele.children);
		dropElements.forEach((dropelement) => 
		{
			  element = dropelement.children[0];
			  content = element.innerHTML;

			  if(content.includes('✔') == true && content.includes('✔✔') == false)
			  {
			  	names.push(content);
			  }
			  if(content.includes('✔✔') == true)
			  {
			  	
			  	let tempOrary = content.replaceAll("✔", "");

			  	tempOrary += '✔';
			  	temporary = tempOrary;

			  	names.push(tempOrary);
			  	names.push(temporary);

			  }



			})
		})
	}

function convert_items(name01, name02, value) {

	switch (name01)
	{
			case 'Seconds✔':
			    switch (name02)
			    {
			    	case 'Seconds✔':
			    		result = value;
			    		break;
			    	case 'Minutes✔':
			    		result = value / 60;
			    		break;
			    	case 'Hours✔':
			    		result = value / 3600;
			    		break;
			    	case 'Days✔':
			    		result = value / (3600 * 24);
			    		break;
			    	case 'Weeks✔':
			    		result = value / (3600 * (24 * 7));
			    		break;
			    	case 'Months✔':
			    		result = value / (3600 * (24 * 30));
			    		break;
			    	case 'Years✔':
			    		result = value / (3600 * (24 * 365));
			    		break;

			    }
			    break;
			case 'Minutes✔':
			    switch (name02)
			    {
			    	case 'Seconds✔':
			    		result = value * 60;
			    		break;
			   		case 'Minutes✔':
			    		result = value;
			    		break;
			    	case 'Hours✔':
			    		result = value / 60;
			    		break;
			    	case 'Days✔':
			    		result = value / (60 * 24);
			    		break;
			    	case 'Weeks✔':
			    		result = value / (60 * (24 * 7));
			    		break;
			    	case 'Months✔':
			    		result = value / (60 * (24 * 30));
			    		break;
			    	case 'Years✔':
			    		result = value / (60 * (24 * 365));
			    		break;

			    }
			    break;
			case 'Hours✔':
			    switch (name02)
			    {
			    	case 'Seconds✔':
			    		result = value * 3600;
			    		break;
			   		case 'Minutes✔':
			    		result = value * 60;
			    		break;
			    	case 'Hours✔':
			    		result = value;
			    		break;
			    	case 'Days✔':
			    		result = value / 24;
			    		break;
			    	case 'Weeks✔':
			    		result = value / (24 * 7);
			    		break;
			    	case 'Months✔':
			    		result = value / (24 * 30);
			    		break;
			    	case 'Years✔':
			    		result = value / (24 * 365);
			    		break;

			    }
			    break;
		  case 'Days✔':
			    switch (name02)
			    {
			    	case 'Seconds✔':
			    		result = value * (3600 * 24);
			    		break;
			   		case 'Minutes✔':
			    		result = value * (60 * 24);
			    		break;
			    	case 'Hours✔':
			    		result = value * 24;
			    		break;
			    	case 'Days✔':
			    		result = value;
			    		break;
			    	case 'Weeks✔':
			    		result = value / 7;
			    		break;
			    	case 'Months✔':
			    		result = value / 30;
			    		break;
			    	case 'Years✔':
			    		result = value / 365;
			    		break;

			    }
			    break;

			case 'Weeks✔':
			    switch (name02)
			    {
			    	case 'Seconds✔':
			    		result = value * (3600 * 24 * 7);
			    		break;
			   		case 'Minutes✔':
			    		result = value * (60 * 24 * 7);
			    		break;
			    	case 'Hours✔':
			    		result = value * (24 * 7);
			    		break;
			    	case 'Days✔':
			    		result = value * 7;
			    		break;
			    	case 'Weeks✔':
			    		result = value;
			    		break;
			    	case 'Months✔':
			    		result = value / 4.34812141;
			    		break;
			    	case 'Years✔':
			    		result = value / 52;
			    		break;

			    }
			    break;
		case 'Months✔':
	    switch (name02)
	    {
	    	case 'Seconds✔':
	    		result = value * (3600 * 24 * 30);
	    		break;
	   		case 'Minutes✔':
	    		result = value * (60 * 24 * 30);
	    		break;
	    	case 'Hours✔':
	    		result = value * (24 * 30);
	    		break;
	    	case 'Days✔':
	    		result = value * 30;
	    		break;
	    	case 'Weeks✔':
	    		result = value * 4.34812141;
	    		break;
	    	case 'Months✔':
	    		result = value;
	    		break;
	    	case 'Years✔':
	    		result = value / 12;
	    		break;
	    }

	  case 'Years✔':
	    switch (name02)
	    {
	    	case 'Seconds✔':
	    		result = value * (3600 * 24 * 30 * 12);
	    		break;
	   		case 'Minutes✔':
	    		result = value * (60 * 24 * 30 * 12);
	    		break;
	    	case 'Hours✔':
	    		result = value * (24 * 30 * 12);
	    		break;
	    	case 'Days✔':
	    		result = value * 30 * 12;
	    		break;
	    	case 'Weeks✔':
	    		result = value * 4 * 12;
	    		break;
	    	case 'Months✔':
	    		result = value * 12;
	    		break;
	    	case 'Years✔':
	    		result = value;
	    		break;

	    }
    break;

	case 'Centimeter✔':
			
			switch (name02)
			{
				case "Centimeter✔":
				    result = value;
				    break;
			
				case 'Meter✔':
				    result = value / 100;
				    break;
				
				case 'Kilometer✔':
				    result = value / (100 * 1000);
				    break;

				case 'Foot✔':
				    result = value * 30.48;
				    break;

				case 'Inch✔':
				    result = value / 2.54;
				    break;
				
				case 'Mile✔':
				    result = value / 160934.4;
				    break;

				case 'Micrometer✔':
				    result = value * 10000;
				    break;
			}
			break;
		    
	case 'Meter✔':
			switch (name02)
			{
				case "Centimeter✔":
				    result = value * 100;
				    break;
			
				case 'Meter✔':
				    result = value;
				    break;
				
				case 'Kilometer✔':
				    result = value / 1000;
				    break;

				case 'Foot✔':
				    result = value * 3.280839895;
				    break;

				case 'Inch✔':
				    result = value * 39.37007874;
				    break;
				
				case 'Mile✔':
				    result = value / 1609.344;
				    break;

				case 'Micrometer✔':
				    result = value * 1000000;
				    break;
			}
			break;

	case 'Kilometer✔':

			switch (name02)
			{
				case "Centimeter✔":
				    result = value * (100 * 1000);
				    break;
			
				case 'Meter✔':
				    result = value * 1000;
				    break;
				
				case 'Kilometer✔':
				    result = value;
				    break;

				case 'Foot✔':
				    result = value * 3280.839895;
				    break;

				case 'Inch✔':
				    result = value * 39370.07874;
				    break;
				
				case 'Mile✔':
				    result = value / 1.609344;
				    break;

				case 'Micrometer✔':
				    result = value * 1000000000;
				    break;
			}
			break;
	

		case 'Foot✔':

			switch (name02)
			{
				case "Centimeter✔":
				    result = value / 30.48;
				    break;
			
				case 'Meter✔':
				    result = value / 3.280839895;
				    break;
				
				case 'Kilometer✔':
				    result = value / 3280.839895;
				    break;

				case 'Foot✔':
				    result = value;
				    break;

				case 'Inch✔':
				    result = value * 12;
				    break;
				
				case 'Mile✔':
				    result = value / 5280;
				    break;

				case 'Micrometer✔':
				    result = value * 304800;
				    break;
			}
			break;


		case 'Inch✔':

			switch (name02)
			{
				case "Centimeter✔":
				    result = value * 2.54;
				    break;
			
				case 'Meter✔':
				    result = value / 39.37007874;
				    break;
				
				case 'Kilometer✔':
				    result = value / 39370.07874;
				    break;

				case 'Foot✔':
				    result = value / 12;
				    break;

				case 'Inch✔':
				    result = value;
				    break;
				
				case 'Mile✔':
				    result = value / 63360;
				    break;

				case 'Micrometer✔':
				    result = value * 25400;
				    break;
			}
			break;



		case 'Mile✔':

			switch (name02)
			{
				case "Centimeter✔":
				    result = value * 160934.4;
				    break;
			
				case 'Meter✔':
				    result = value * 1609.344;
				    break;
				
				case 'Kilometer✔':
				    result = value * 1.609344;
				    break;

				case 'Foot✔':
				    result = value * 5280;
				    break;

				case 'Inch✔':
				    result = value * 63360;
				    break;
				
				case 'Mile✔':
				    result = value;
				    break;

				case 'Micrometer✔':
				    result = value * 1609344000;
				    break;
			}
			break;



		case 'Micrometer✔':

			switch (name02)
			{
				case "Centimeter✔":
				    result = value / 10000;
				    break;
			
				case 'Meter✔':
				    result = value / 1000000;
				    break;
				
				case 'Kilometer✔':
				    result = value / 1000000000;
				    break;

				case 'Foot✔':
				    result = value / 304800;
				    break;

				case 'Inch✔':
				    result = value / 25400;
				    break;
				
				case 'Mile✔':
				    result = value / 1609344000;
				    break;

				case 'Micrometer✔':
				    result = value;
				    break;
			}
			break;




		case 'Celsius✔':

			switch (name02)
			{
				case "Celsius✔":
				    result = value;
				    break;
			
				case 'Fahrenheit✔':
				    result = value * 1.8 + 32;
				    break;
				
				case 'Kelvin✔':
				    result = value + 273.15;
				    break;
			}
			break;


		case 'Fahrenheit✔':

			switch (name02)
			{
				case "Celsius✔":
				    result = (value - 32) * (5/9);
				    break;
			
				case 'Fahrenheit✔':
				    result = value;
				    break;
				
				case 'Kelvin✔':
				    result = (value - 32) * (5 / 9) + 273.15;
				    break;
			}
			break;




		case 'Kelvin✔':

			switch (name02)
			{
				case "Celsius✔":
				    result = value - 273.15;
				    break;
			
				case 'Fahrenheit✔':
				    result = 1.8 * (value-273) + 32;
				    break;
				
				case 'Kelvin✔':
				    result = value;
				    break;
			}
			break;


		case 'Kilogram✔':

			switch (name02)
			{
				case "Kilogram✔":
				    result = value;
				    break;
			
				case 'Gram✔':
				    result = value * 1000;
				    break;
				
				case 'Milligram✔':
				    result = value * 1000000;
				    break;

				case 'Pound✔':
				    result = value * 2.2046244202;
				    break;

				case 'Ounce✔':
				    result = value * 35.273990723;
				    break;

				case 'Carrat✔':
				    result = value * 5000;
				    break;
			}
			break;

	case 'Gram✔':

			switch (name02)
			{
				case "Kilogram✔":
				    result = value / 1000;
				    break;
			
				case 'Gram✔':
				    result = value;
				    break;
				
				case 'Milligram✔':
				    result = value * 1000;
				    break;

				case 'Pound✔':
				    result = value / 453.592;
				    break;

				case 'Ounce✔':
				    result = value / 28.3495;
				    break;

				case 'Carrat✔':
				    result = value * 5;
				    break;
			}
			break;				

	case 'Milligram✔':

			switch (name02)
			{
				case "Kilogram✔":
				    result = value / 1000000;
				    break;
			
				case 'Gram✔':
				    result = value / 1000;
				    break;
				
				case 'Milligram✔':
				    result = value;
				    break;

				case 'Pound✔':
				    result = value / 453592;
				    break;

				case 'Ounce✔':
				    result = value / 28349.5;
				    break;

				case 'Carrat✔':
				    result = value / 200;
				    break;
			}
			break;			


	case 'Pound✔':

			switch (name02)
			{
				case "Kilogram✔":
				    result = value / 2.2046244202;
				    break;
			
				case 'Gram✔':
				    result = value * 453.592;
				    break;
				
				case 'Milligram✔':
				    result = value * 453592;
				    break;

				case 'Pound✔':
				    result = value;
				    break;

				case 'Ounce✔':
				    result = value * 16;
				    break;

				case 'Carrat✔':
				    result = value * 2267.96;
				    break;
			}
			break;

	case 'Ounce✔':

			switch (name02)
			{
				case "Kilogram✔":
				    result = value / 35.273990723;
				    break;
			
				case 'Gram✔':
				    result = value * 28.3495;
				    break;
				
				case 'Milligram✔':
				    result = value * 28349.5;
				    break;

				case 'Pound✔':
				    result = value / 16;
				    break;

				case 'Ounce✔':
				    result = value;
				    break;

				case 'Carrat✔':
				    result = value * 141.7475;
				    break;
			}
			break;	

	case 'Carrat✔':

			switch (name02)
			{
				case "Kilogram✔":
				    result = value / 5000;
				    break;
			
				case 'Gram✔':
				    result = value / 5;
				    break;
				
				case 'Milligram✔':
				    result = value * 200;
				    break;

				case 'Pound✔':
				    result = value / 2267.96;
				    break;

				case 'Ounce✔':
				    result = value / 141.7475;
				    break;

				case 'Carrat✔':
				    result = value;
				    break;
			}
			break;

	case 'USD✔':

			switch (name02)
			{
				case "USD✔":
				    result = value;
				    break;
			
				case 'EUR✔':
				    result = value * 0.9602;
				    break;
				
				case 'GBP✔':
				    result = value * 0.827062;
				    break;

				case 'JPY✔':
				    result = value * 139.12501514;
				    break;

				case 'CNY✔':
				    result = value * 7.17445;
				    break;

				case 'BTC✔':
				    result = value * 0.0000604831;
				    break;

				case 'MDL✔':
				    result = value * 19.236397;
				    break;

				case 'RON✔':
				    result = value * 4.7312;
				    break;

				case 'RUB✔':
				    result = value * 60.500002;
				    break;
			}
			break;	

	case 'EUR✔':

			switch (name02)
			{
				case "USD✔":
				    result = value * 1.041449698;
				    break;
			
				case 'EUR✔':
				    result = value;
				    break;
				
				case 'GBP✔':
				    result = value * 0.8613434701;
				    break;

				case 'JPY✔':
				    result = value * 144.891705;
				    break;

				case 'CNY✔':
				    result = value * 7.4718287857;
				    break;

				case 'BTC✔':
				    result = value * 0.0000629901;
				    break;

				case 'MDL✔':
				    result = value * 20.033739846;
				    break;

				case 'RON✔':
				    result = value * 4.9273068111;
				    break;

				case 'RUB✔':
				    result = value * 63.007708811;
				    break;
			}
			break;	


	case 'GBP✔':

			switch (name02)
			{
				case "USD✔":
				    result = value * 1.2090991969;
				    break;
			
				case 'EUR✔':
				    result = value * 1.1609770489;
				    break;
				
				case 'GBP✔':
				    result = value;
				    break;

				case 'JPY✔':
				    result = value * 168.21594408;
				    break;

				case 'CNY✔':
				    result = value * 8.6746217333;
				    break;

				case 'BTC✔':
				    result = value * 0.0000731301;
				    break;

				case 'MDL✔':
				    result = value * 23.258712164;
				    break;

				case 'RON✔':
				    result = value * 5.7204901205;
				    break;

				case 'RUB✔':
				    result = value * 73.150503832;
				    break;
			}
			break;

	case 'JPY✔':

			switch (name02)
			{
				case "USD✔":
				    result = value * 0.00718778;
				    break;
			
				case 'EUR✔':
				    result = value * 0.0069017063;
				    break;
				
				case 'GBP✔':
				    result = value * 0.0059447397;
				    break;

				case 'JPY✔':
				    result = value;
				    break;

				case 'CNY✔':
				    result = value * 0.0515683682;
				    break;

				case 'BTC✔':
				    result = value / 2300228.3156;
				    break;

				case 'MDL✔':
				    result = value * 0.1382669894;
				    break;

				case 'RON✔':
				    result = value * 0.0340068247;
				    break;

				case 'RUB✔':
				    result = value * 0.4348607038;
				    break;
			}
			break;

	case 'CNY✔':

			switch (name02)
			{
				case "USD✔":
				    result = value * 0.1393835067;
				    break;
			
				case 'EUR✔':
				    result = value * 0.1338360432;
				    break;
				
				case 'GBP✔':
				    result = value * 0.1152788019;
				    break;

				case 'JPY✔':
				    result = value * 19.391732487;
				    break;

				case 'CNY✔':
				    result = value;
				    break;

				case 'BTC✔':
				    result = value * 0.0000084304;
				    break;

				case 'MDL✔':
				    result = value * 2.6812364711;
				    break;

				case 'RON✔':
				    result = value * 0.6594512471;
				    break;

				case 'RUB✔':
				    result = value * 8.4327024371;
				    break;
			}
			break;

	case 'BTC✔':

			switch (name02)
			{
				case "USD✔":
				    result = value * 16533.53506;
				    break;
			
				case 'EUR✔':
				    result = value * 15875.500365;
				    break;
				
				case 'GBP✔':
				    result = value * 13674.258574;
				    break;

				case 'JPY✔':
				    result = value * 2300228.3156;
				    break;

				case 'CNY✔':
				    result = value * 118619.02061;
				    break;

				case 'BTC✔':
				    result = value;
				    break;

				case 'MDL✔':
				    result = value * 318045.64423;
				    break;

				case 'RON✔':
				    result = value * 78223.461076;
				    break;

				case 'RUB✔':
				    result = value * 1000278.9042;
				    break;
			}
			break;

	case 'MDL✔':

			switch (name02)
			{
				case "USD✔":
				    result = value * 0.051984787;
				    break;
			
				case 'EUR✔':
				    result = value * 0.0499157924;
				    break;
				
				case 'GBP✔':
				    result = value * 0.0429946419;
				    break;

				case 'JPY✔':
				    result = value * 7.2323842734;
				    break;

				case 'CNY✔':
				    result = value * 0.3729622548;
				    break;

				case 'BTC✔':
				    result = value * 0.0000031442;
				    break;

				case 'MDL✔':
				    result = value;
				    break;

				case 'RON✔':
				    result = value * 0.2459504241;
				    break;

				case 'RUB✔':
				    result = value * 3.1450797153;
				    break;
			}
			break;

	case 'RON✔':

			switch (name02)
			{
				case "USD✔":
				    result = value * 0.2113628678;
				    break;
			
				case 'EUR✔':
				    result = value * 0.2029506256;
				    break;
				
				case 'GBP✔':
				    result = value * 0.1748101961;
				    break;

				case 'JPY✔':
				    result = value * 29.405862179;
				    break;

				case 'CNY✔':
				    result = value * 1.5164123267;
				    break;

				case 'BTC✔':
				    result = value * 0.0000127839;
				    break;

				case 'MDL✔':
				    result = value * 4.0658600355;
				    break;

				case 'RON✔':
				    result = value;
				    break;

				case 'RUB✔':
				    result = value * 12.787453923;
				    break;
			}
			break;

	case 'RUB✔':

			switch (name02)
			{
				case "USD✔":
				    result = value * 0.0165289251;
				    break;
			
				case 'EUR✔':
				    result = value * 0.0158710739;
				    break;
				
				case 'GBP✔':
				    result = value * 0.0136704458;
				    break;

				case 'JPY✔':
				    result = value * 2.2995869511;
				    break;

				case 'CNY✔':
				    result = value * 0.1185859465;
				    break;

				case 'BTC✔':
				    result = value / 1000278.9042;
				    break;

				case 'MDL✔':
				    result = value * 0.3179569647;
				    break;

				case 'RON✔':
				    result = value * 0.0782016503;
				    break;

				case 'RUB✔':
				    result = value;
				    break;
			}
			break;

		default:

			if(percentage == false)
			{
				result = 'Error';
			}
			
		    
	
	
	}

	return result;
}


function update_result (result) {
		resultContainer.forEach(item => 
		{
			item.innerHTML = result;
			item.classList.add('active');

		});
}
function clean_result() {
		resultContainer.forEach(item => 
		{
			item.innerHTML = '';
			item.classList.add('active');

		});
}
function clean_names (names) {
	names.pop();
	names.pop();
	names.pop();
	names.pop();
	names.pop();
	names.pop();
	names.pop();
	names.pop();
	names.pop();
	names.pop();
	names.pop();
}

convert.onclick = function()
{
	let result;
	let value = textbar.value;
	let max = percentageInputMax.value;
	let chosen = percentageInputChosen.value;

	

	if(max != '' && chosen != '')
	{

		result = parseFloat((chosen * 100) / max).toFixed(1);
		result = `${result}%`;
		percentage = true;
		update_result(result);

	}

	

	get_names(dropDownFlexs);

	firstElement = names[0];
	secondElement = names[1];

	if(percentage == false)
	{
			result = convert_items(firstElement, secondElement, value);
			// result = Math.floor(result * 100) / 100;
			 result = result.toFixed(5);
	}


	update_result(result)
	bife = 0;
	delete_bife(dropDownFlexs);
	clean_names(names);
	textbar.value = '';
	percentageInputMax.value = '';
	percentageInputChosen.value = '';
	percentage = false;

}


function remove_all (timeDrop, lengthDrop, temperatureDrop, weightDrop, currencyDrop, percentageDrop) {
	
	timeDrop.classList.remove('active');
  	lengthDrop.classList.remove('active');
  	temperatureDrop.classList.remove('active');
  	weightDrop.classList.remove('active');
  	currencyDrop.classList.remove('active');
  	percentageDrop.classList.remove('active');
}

xbuttons.forEach(item => 
{
	item.addEventListener('click', function handleClick()
	{
		remove_all(timeDrop, lengthDrop, temperatureDrop, weightDrop, currencyDrop, percentageDrop);
	})
})

timeCard.addEventListener('click', function handleClick() {

  if(timeDrop.classList.contains('active') == false)
  {

  	remove_all(timeDrop, lengthDrop, temperatureDrop, weightDrop, currencyDrop, percentageDrop);
  	timeDrop.classList.add('active');
  }
  else
  {
  	timeDrop.classList.remove('active');
  }
  bife = 0;
  delete_bife(dropDownFlexs);
  clean_result();
  
});

lengthCard.addEventListener('click', function handleClick() {

  if(lengthDrop.classList.contains('active') == false)
  {
  	remove_all(timeDrop, lengthDrop, temperatureDrop, weightDrop, currencyDrop, percentageDrop);
  	lengthDrop.classList.add('active');
  }
  else
  {
  	lengthDrop.classList.remove('active');
  }
  bife = 0;
  delete_bife(dropDownFlexs);
  clean_result();
  
}); //temperatureDrop

temperatureCard.addEventListener('click', function handleClick() {

  if(temperatureDrop.classList.contains('active') == false)
  {
  	remove_all(timeDrop, lengthDrop, temperatureDrop, weightDrop, currencyDrop, percentageDrop);
  	temperatureDrop.classList.add('active');
  }
  else
  {
  	temperatureDrop.classList.remove('active');
  }
  bife = 0;
  delete_bife(dropDownFlexs);
  clean_result();
  
});

weightCard.addEventListener('click', function handleClick() {

  if(weightDrop.classList.contains('active') == false)
  {
  	remove_all(timeDrop, lengthDrop, temperatureDrop, weightDrop, currencyDrop, percentageDrop);
  	weightDrop.classList.add('active');
  }
  else
  {
  	weightDrop.classList.remove('active');
  }
  bife = 0;
  delete_bife(dropDownFlexs);
  clean_result();
});

currencyCard.addEventListener('click', function handleClick() {

  if(currencyCard.classList.contains('active') == false)
  {
  	remove_all(timeDrop, lengthDrop, temperatureDrop, weightDrop, currencyDrop, percentageDrop);
  	currencyDrop.classList.add('active');
  }
  else
  {
  	currencyCard.classList.remove('active');
  }
  bife = 0;
  delete_bife(dropDownFlexs);
  clean_result();
});

percentageCard.addEventListener('click', function handleClick() {

  if(percentageDrop.classList.contains('active') == false)
  {
  	remove_all(timeDrop, lengthDrop, temperatureDrop, weightDrop, currencyDrop, percentageDrop);
  	percentageDrop.classList.add('active');
  }
  else
  {
  	percentageDrop.classList.remove('active');
  }
  bife = 0;
  delete_bife(dropDownFlexs);
  clean_result();
});


