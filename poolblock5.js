// ALL VAR
var maturityValue = 60;
var validValue = 'true';
var netcurrentblock = '';
var netcurrentdiff = '';
var currentdate = '';
var currentts = '';
var lastvalidblock = '';
var lastpoolroundhash = '';

function UpdateNetworkStats(){
	$.getJSON("https://"+yourpool+"/api/network/stats", function(data) {
			currentdate = new Date();
			currentts = currentdate.getTime();
			netcurrentblock = data.height;
			netcurrentdiff = parseInt(data.difficulty);
	PoolBlock();
	UpdatePoolStats();
	});
}

function UpdatePoolStats(){
	$.getJSON("https://"+yourpool+"/api/pool/stats/pplns", function(data) {
			currentroundhash = parseInt(data.pool_statistics.roundHashes);
			currenteffort =  parseInt(((currentroundhash / netcurrentdiff)*100).toFixed(0));
			if (validValue = lastvalidblock){
				currenteffort =  parseInt(((currentroundhash / netcurrentdiff)*100).toFixed(0));}
			else {currenteffort =  parseInt((((currentroundhash + lastpoolroundhash) / netcurrentdiff)*100).toFixed(0));}
		
		if (currenteffort > 100)
			{$("#currenteffort span").html('<font color="red">'+currenteffort+'%</font>');}
		else
			{if (currenteffort > 75 && currenteffort < 101)
				{$("#currenteffort span").html('<font color="#FA8072">'+currenteffort+'%</font>');}
					else
						{$("#currenteffort span").html('<font color="5EFF33">'+currenteffort+'%</font>');}
			}
	});
}

function PoolBlock(){
	$.getJSON("https://"+yourpool+"/api/pool/blocks/pplns?limit=75", function(data) {
		lastvalidblock = data[0].valid;
		lastpoolroundhash = parseInt(data[0].shares);
// MATURITY
		chainHeight = parseInt(netcurrentblock);
		maturity1 = chainHeight - data[60].height;
		maturity2 = chainHeight - data[61].height;
		maturity3 = chainHeight - data[62].height;
		maturity4 = chainHeight - data[63].height;
		maturity5 = chainHeight - data[64].height;
		maturity6 = chainHeight - data[65].height;
		maturity7 = chainHeight - data[66].height;
		maturity8 = chainHeight - data[67].height;
		maturity9 = chainHeight - data[68].height;
		maturity10 = chainHeight - data[69].height;
		maturity11 = chainHeight - data[70].height;
		maturity12 = chainHeight - data[71].height;
		maturity13 = chainHeight - data[72].height;
		maturity14 = chainHeight - data[73].height;
		maturity15 = chainHeight - data[74].height;

		if (validValue = data[60].valid){
			if (maturity1 < maturityValue)
				{$("#maturity1 span").html((maturityValue - maturity1)+' to go');}
			else {$("#maturity1 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity1 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[61].valid){
			if (maturity2 < maturityValue)
				{$("#maturity2 span").html((maturityValue - maturity2)+' to go');}
			else {$("#maturity2 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity2 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[62].valid){
			if (maturity3 < maturityValue)
				{$("#maturity3 span").html((maturityValue - maturity3)+' to go');}
			else {$("#maturity3 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity3 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[63].valid){
			if (maturity4 < maturityValue)
				{$("#maturity4 span").html((maturityValue - maturity4)+' to go');}
			else {$("#maturity4 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity4 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[64].valid){
			if (maturity5 < maturityValue)
				{$("#maturity5 span").html((maturityValue - maturity5)+' to go');}
			else {$("#maturity5 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity5 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[65].valid){
			if (maturity6 < maturityValue)
				{$("#maturity6 span").html((maturityValue - maturity6)+' to go');}
			else {$("#maturity6 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity6 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[66].valid){
			if (maturity7 < maturityValue)
				{$("#maturity7 span").html((maturityValue - maturity7)+' to go');}
			else {$("#maturity7 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity7 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[67].valid){
			if (maturity8 < maturityValue)
				{$("#maturity8 span").html((maturityValue - maturity8)+' to go');}
			else {$("#maturity8 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity8 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[68].valid){
			if (maturity9 < maturityValue)
				{$("#maturity9 span").html((maturityValue - maturity9)+' to go');}
			else {$("#maturity9 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity9 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[69].valid){
			if (maturity10 < maturityValue)
				{$("#maturity10 span").html((maturityValue - maturity10)+' to go');}
			else {$("#maturity10 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity10 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[70].valid){
			if (maturity11 < maturityValue)
				{$("#maturity11 span").html((maturityValue - maturity11)+' to go');}
			else {$("#maturity11 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity11 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[71].valid){
			if (maturity12 < maturityValue)
				{$("#maturity12 span").html((maturityValue - maturity12)+' to go');}
			else {$("#maturity12 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity12 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[72].valid){
			if (maturity13 < maturityValue)
				{$("#maturity13 span").html((maturityValue - maturity13)+' to go');}
			else {$("#maturity13 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity13 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[73].valid){
			if (maturity14 < maturityValue)
				{$("#maturity14 span").html((maturityValue - maturity14)+' to go');}
			else {$("#maturity14 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity14 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}
		if (validValue = data[74].valid){
			if (maturity15 < maturityValue)
				{$("#maturity15 span").html((maturityValue - maturity15)+' to go');}
			else {$("#maturity15 span").html('<i class="material-icons" style="font-size:22px;color:orange;">lock_open</i>');}
		} else {$("#maturity15 span").html('<i class="material-icons" style="font-size:22px;color:black;">lock_open</i>');}

// EFFORT AND COLOR
	coloreffort1 = ((data[60].shares / data[60].diff)*100).toFixed(0);
	coloreffort2 = ((data[61].shares / data[61].diff)*100).toFixed(0);
	coloreffort3 = ((data[62].shares / data[62].diff)*100).toFixed(0);
	coloreffort4 = ((data[63].shares / data[63].diff)*100).toFixed(0);
	coloreffort5 = ((data[64].shares / data[64].diff)*100).toFixed(0);
	coloreffort6 = ((data[65].shares / data[65].diff)*100).toFixed(0);
	coloreffort7 = ((data[66].shares / data[66].diff)*100).toFixed(0);
	coloreffort8 = ((data[67].shares / data[67].diff)*100).toFixed(0);
	coloreffort9 = ((data[68].shares / data[68].diff)*100).toFixed(0);
	coloreffort10 = ((data[69].shares / data[69].diff)*100).toFixed(0);
	coloreffort11 = ((data[70].shares / data[70].diff)*100).toFixed(0);
	coloreffort12 = ((data[71].shares / data[71].diff)*100).toFixed(0);
	coloreffort13 = ((data[72].shares / data[72].diff)*100).toFixed(0);
	coloreffort14 = ((data[73].shares / data[73].diff)*100).toFixed(0);
	coloreffort15 = ((data[74].shares / data[74].diff)*100).toFixed(0);

	if (validValue = data[60].valid){
		if (coloreffort1 > 100)
			{$("#effort1 span").html('<font color="red">'+coloreffort1+'%</font>');}
		else
			{if (coloreffort1 > 75 && coloreffort1 < 101)
				{$("#effort1 span").html('<font color="#FA8072">'+coloreffort1+'%</font>');}
					else
						{$("#effort1 span").html('<font color="5EFF33">'+coloreffort1+'%</font>');}
			}
	} else { $("#effort1 span").html('<font color="black">'+coloreffort1+'%</font>');}
	if (validValue = data[61].valid){
		if (coloreffort2 > 100)
			{$("#effort2 span").html('<font color="red">'+coloreffort2+'%</font>');}
		else
			{if (coloreffort2 > 75 && coloreffort2 < 101)
				{$("#effort2 span").html('<font color="#FA8072">'+coloreffort2+'%</font>');}
					else
						{$("#effort2 span").html('<font color="5EFF33">'+coloreffort2+'%</font>');}
			}
	} else { $("#effort2 span").html('<font color="black">'+coloreffort2+'%</font>');}
	if (validValue = data[62].valid){
		if (coloreffort3 > 100)
			{$("#effort3 span").html('<font color="red">'+coloreffort3+'%</font>');}
		else
			{if (coloreffort3 > 75 && coloreffort3 < 101)
				{$("#effort3 span").html('<font color="#FA8072">'+coloreffort3+'%</font>');}
					else
						{$("#effort3 span").html('<font color="5EFF33">'+coloreffort3+'%</font>');}
			}
	} else { $("#effort3 span").html('<font color="black">'+coloreffort3+'%</font>');}
	if (validValue = data[63].valid){
		if (coloreffort4 > 100)
			{$("#effort4 span").html('<font color="red">'+coloreffort4+'%</font>');}
		else
			{if (coloreffort4 > 75 && coloreffort4 < 101)
				{$("#effort4 span").html('<font color="#FA8072">'+coloreffort4+'%</font>');}
					else
						{$("#effort4 span").html('<font color="5EFF33">'+coloreffort4+'%</font>');}
			}
	} else { $("#effort4 span").html('<font color="black">'+coloreffort4+'%</font>');}
	if (validValue = data[64].valid){
		if (coloreffort5 > 100)
			{$("#effort5 span").html('<font color="red">'+coloreffort5+'%</font>');}
		else
			{if (coloreffort5 > 75 && coloreffort5 < 101)
				{$("#effort5 span").html('<font color="#FA8072">'+coloreffort5+'%</font>');}
					else
						{$("#effort5 span").html('<font color="5EFF33">'+coloreffort5+'%</font>');}
			}
	} else { $("#effort5 span").html('<font color="black">'+coloreffort5+'%</font>');}
	if (validValue = data[65].valid){
		if (coloreffort6 > 100)
			{$("#effort6 span").html('<font color="red">'+coloreffort6+'%</font>');}
		else
			{if (coloreffort6 > 75 && coloreffort6 < 101)
				{$("#effort6 span").html('<font color="#FA8072">'+coloreffort6+'%</font>');}
					else
						{$("#effort6 span").html('<font color="5EFF33">'+coloreffort6+'%</font>');}
			}
	} else { $("#effort6 span").html('<font color="black">'+coloreffort6+'%</font>');}
	if (validValue = data[66].valid){
		if (coloreffort7 > 100)
			{$("#effort7 span").html('<font color="red">'+coloreffort7+'%</font>');}
		else
			{if (coloreffort7 > 75 && coloreffort7 < 101)
				{$("#effort7 span").html('<font color="#FA8072">'+coloreffort7+'%</font>');}
					else
						{$("#effort7 span").html('<font color="5EFF33">'+coloreffort7+'%</font>');}
			}
	} else { $("#effort7 span").html('<font color="black">'+coloreffort7+'%</font>');}
	if (validValue = data[67].valid){
		if (coloreffort8 > 100)
			{$("#effort8 span").html('<font color="red">'+coloreffort8+'%</font>');}
		else
			{if (coloreffort8 > 75 && coloreffort8 < 101)
				{$("#effort8 span").html('<font color="#FA8072">'+coloreffort8+'%</font>');}
					else
						{$("#effort8 span").html('<font color="5EFF33">'+coloreffort8+'%</font>');}
			}
	} else { $("#effort8 span").html('<font color="black">'+coloreffort8+'%</font>');}
	if (validValue = data[68].valid){
		if (coloreffort9 > 100)
			{$("#effort9 span").html('<font color="red">'+coloreffort9+'%</font>');}
		else
			{if (coloreffort9 > 75 && coloreffort9 < 101)
				{$("#effort9 span").html('<font color="#FA8072">'+coloreffort9+'%</font>');}
					else
						{$("#effort9 span").html('<font color="5EFF33">'+coloreffort9+'%</font>');}
			}
	} else { $("#effort9 span").html('<font color="black">'+coloreffort9+'%</font>');}
	if (validValue = data[69].valid){
		if (coloreffort10 > 100)
			{$("#effort10 span").html('<font color="red">'+coloreffort10+'%</font>');}
		else
			{if (coloreffort10 > 75 && coloreffort10 < 101)
				{$("#effort10 span").html('<font color="#FA8072">'+coloreffort10+'%</font>');}
					else
						{$("#effort10 span").html('<font color="5EFF33">'+coloreffort10+'%</font>');}
			}
	} else { $("#effort10 span").html('<font color="black">'+coloreffort10+'%</font>');}
	if (validValue = data[70].valid){
		if (coloreffort11 > 100)
			{$("#effort11 span").html('<font color="red">'+coloreffort11+'%</font>');}
		else
			{if (coloreffort11 > 75 && coloreffort11 < 101)
				{$("#effort11 span").html('<font color="#FA8072">'+coloreffort11+'%</font>');}
					else
						{$("#effort11 span").html('<font color="5EFF33">'+coloreffort11+'%</font>');}
			}
	} else { $("#effort11 span").html('<font color="black">'+coloreffort11+'%</font>');}
	if (validValue = data[71].valid){
		if (coloreffort12 > 100)
			{$("#effort12 span").html('<font color="red">'+coloreffort12+'%</font>');}
		else
			{if (coloreffort12 > 75 && coloreffort12 < 101)
				{$("#effort12 span").html('<font color="#FA8072">'+coloreffort12+'%</font>');}
					else
						{$("#effort12 span").html('<font color="5EFF33">'+coloreffort12+'%</font>');}
			}
	} else { $("#effort12 span").html('<font color="black">'+coloreffort12+'%</font>');}
	if (validValue = data[72].valid){
		if (coloreffort13 > 100)
			{$("#effort13 span").html('<font color="red">'+coloreffort13+'%</font>');}
		else
			{if (coloreffort13 > 75 && coloreffort13 < 101)
				{$("#effort13 span").html('<font color="#FA8072">'+coloreffort13+'%</font>');}
					else
						{$("#effort13 span").html('<font color="5EFF33">'+coloreffort13+'%</font>');}
			}
	} else { $("#effort13 span").html('<font color="black">'+coloreffort13+'%</font>');}
	if (validValue = data[73].valid){
		if (coloreffort14 > 100)
			{$("#effort14 span").html('<font color="red">'+coloreffort14+'%</font>');}
		else
			{if (coloreffort14 > 75 && coloreffort14 < 101)
				{$("#effort14 span").html('<font color="#FA8072">'+coloreffort14+'%</font>');}
					else
						{$("#effort14 span").html('<font color="5EFF33">'+coloreffort14+'%</font>');}
			}
	} else { $("#effort14 span").html('<font color="black">'+coloreffort14+'%</font>');}
	if (validValue = data[74].valid){
		if (coloreffort15 > 100)
			{$("#effort15 span").html('<font color="red">'+coloreffort15+'%</font>');}
		else
			{if (coloreffort15 > 75 && coloreffort15 < 101)
				{$("#effort15 span").html('<font color="#FA8072">'+coloreffort15+'%</font>');}
					else
						{$("#effort15 span").html('<font color="5EFF33">'+coloreffort15+'%</font>');}
			}
	} else { $("#effort15 span").html('<font color="black">'+coloreffort15+'%</font>');}

// HEIGHT
	if (validValue = data[60].valid)
		{$("#height1 span").html((data[60].height).toLocaleString());}
	else {$("#height1 span").html('<font color="black">'+(data[60].height).toLocaleString()+'</font>');}
	if (validValue = data[61].valid)
		{$("#height2 span").html((data[61].height).toLocaleString());}
	else {$("#height2 span").html('<font color="black">'+(data[61].height).toLocaleString()+'</font>');}
	if (validValue = data[62].valid)
		{$("#height3 span").html((data[62].height).toLocaleString());}
	else {$("#height3 span").html('<font color="black">'+(data[62].height).toLocaleString()+'</font>');}
	if (validValue = data[63].valid)
		{$("#height4 span").html((data[63].height).toLocaleString());}
	else {$("#height4 span").html('<font color="black">'+(data[63].height).toLocaleString()+'</font>');}
	if (validValue = data[64].valid)
		{$("#height5 span").html((data[64].height).toLocaleString());}
	else {$("#height5 span").html('<font color="black">'+(data[64].height).toLocaleString()+'</font>');}
	if (validValue = data[65].valid)
		{$("#height6 span").html((data[65].height).toLocaleString());}
	else {$("#height6 span").html('<font color="black">'+(data[65].height).toLocaleString()+'</font>');}
	if (validValue = data[66].valid)
		{$("#height7 span").html((data[66].height).toLocaleString());}
	else {$("#height7 span").html('<font color="black">'+(data[66].height).toLocaleString()+'</font>');}
	if (validValue = data[67].valid)
		{$("#height8 span").html((data[67].height).toLocaleString());}
	else {$("#height8 span").html('<font color="black">'+(data[67].height).toLocaleString()+'</font>');}
	if (validValue = data[68].valid)
		{$("#height9 span").html((data[68].height).toLocaleString());}
	else {$("#height9 span").html('<font color="black">'+(data[68].height).toLocaleString()+'</font>');}
	if (validValue = data[69].valid)
		{$("#height10 span").html((data[69].height).toLocaleString());}
	else {$("#height10 span").html('<font color="black">'+(data[69].height).toLocaleString()+'</font>');}
	if (validValue = data[70].valid)
		{$("#height11 span").html((data[70].height).toLocaleString());}
	else {$("#height11 span").html('<font color="black">'+(data[70].height).toLocaleString()+'</font>');}
	if (validValue = data[71].valid)
		{$("#height12 span").html((data[71].height).toLocaleString());}
	else {$("#height12 span").html('<font color="black">'+(data[71].height).toLocaleString()+'</font>');}
	if (validValue = data[72].valid)
		{$("#height13 span").html((data[72].height).toLocaleString());}
	else {$("#height13 span").html('<font color="black">'+(data[72].height).toLocaleString()+'</font>');}
	if (validValue = data[73].valid)
		{$("#height14 span").html((data[73].height).toLocaleString());}
	else {$("#height14 span").html('<font color="black">'+(data[73].height).toLocaleString()+'</font>');}
	if (validValue = data[74].valid)
		{$("#height15 span").html((data[74].height).toLocaleString());}
	else {$("#height15 span").html('<font color="black">'+(data[74].height).toLocaleString()+'</font>');}

// VALID
	if (validValue = data[60].valid){
		$("#valid1 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid1 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[61].valid){
		$("#valid2 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid2 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[62].valid){
		$("#valid3 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid3 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[63].valid){
		$("#valid4 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid4 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[64].valid){
		$("#valid5 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid5 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[65].valid){
		$("#valid6 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid6 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[66].valid){
		$("#valid7 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid7 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[67].valid){
		$("#valid8 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid8 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[68].valid){
		$("#valid9 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid9 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[69].valid){
		$("#valid10 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid10 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[70].valid){
		$("#valid11 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid11 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[71].valid){
		$("#valid12 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid12 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[72].valid){
		$("#valid13 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid13 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[73].valid){
		$("#valid14 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid14 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}
	if (validValue = data[74].valid){
		$("#valid15 span").html('<i class="material-icons" style="font-size:22px;color:#5EFF33;">done</i>');
	} else {
		$("#valid15 span").html('<i class="material-icons" style="font-size:22px;color:red;">clear</i>');
	}

// TIME FOUND
	date1 = new Date(data[60].ts);
	date2 = new Date(data[61].ts);
	date3 = new Date(data[62].ts);
	date4 = new Date(data[63].ts);
	date5 = new Date(data[64].ts);
	date6 = new Date(data[65].ts);
	date7 = new Date(data[66].ts);
	date8 = new Date(data[67].ts);
	date9 = new Date(data[68].ts);
	date10 = new Date(data[69].ts);
	date11 = new Date(data[70].ts);
	date12 = new Date(data[71].ts);
	date13 = new Date(data[72].ts);
	date14 = new Date(data[73].ts);
	date15 = new Date(data[74].ts);

	datetime1 = date1.toLocaleString();
	datetime2 = date2.toLocaleString();
	datetime3 = date3.toLocaleString();
	datetime4 = date4.toLocaleString();
	datetime5 = date5.toLocaleString();
	datetime6 = date6.toLocaleString();
	datetime7 = date7.toLocaleString();
	datetime8 = date8.toLocaleString();
	datetime9 = date9.toLocaleString();
	datetime10 = date10.toLocaleString();
	datetime11 = date11.toLocaleString();
	datetime12 = date12.toLocaleString();
	datetime13 = date13.toLocaleString();
	datetime14 = date14.toLocaleString();
	datetime15 = date15.toLocaleString();
	
	datets1 = new Date(parseInt(currentts) - parseInt(data[60].ts));
	datets2 = new Date(parseInt(currentts) - parseInt(data[61].ts));
	datets3 = new Date(parseInt(currentts) - parseInt(data[62].ts));
	datets4 = new Date(parseInt(currentts) - parseInt(data[63].ts));
	datets5 = new Date(parseInt(currentts) - parseInt(data[64].ts));
	datets6 = new Date(parseInt(currentts) - parseInt(data[65].ts));
	datets7 = new Date(parseInt(currentts) - parseInt(data[66].ts));
	datets8 = new Date(parseInt(currentts) - parseInt(data[67].ts));
	datets9 = new Date(parseInt(currentts) - parseInt(data[68].ts));
	datets10 = new Date(parseInt(currentts) - parseInt(data[69].ts));
	datets11 = new Date(parseInt(currentts) - parseInt(data[70].ts));
	datets12 = new Date(parseInt(currentts) - parseInt(data[71].ts));
	datets13 = new Date(parseInt(currentts) - parseInt(data[72].ts));
	datets14 = new Date(parseInt(currentts) - parseInt(data[73].ts));
	datets15 = new Date(parseInt(currentts) - parseInt(data[74].ts));
	
	hour1 = datets1.getUTCHours();
	hour2 = datets2.getUTCHours();
	hour3 = datets3.getUTCHours();
	hour4 = datets4.getUTCHours();
	hour5 = datets5.getUTCHours();
	hour6 = datets6.getUTCHours();
	hour7 = datets7.getUTCHours();
	hour8 = datets8.getUTCHours();
	hour9 = datets9.getUTCHours();
	hour10 = datets10.getUTCHours();
	hour11 = datets11.getUTCHours();
	hour12 = datets12.getUTCHours();
	hour13 = datets13.getUTCHours();
	hour14 = datets14.getUTCHours();
	hour15 = datets15.getUTCHours();
	
	minute1 = datets1.getUTCMinutes();
	minute2 = datets2.getUTCMinutes();
	minute3 = datets3.getUTCMinutes();
	minute4 = datets4.getUTCMinutes();
	minute5 = datets5.getUTCMinutes();
	minute6 = datets6.getUTCMinutes();
	minute7 = datets7.getUTCMinutes();
	minute8 = datets8.getUTCMinutes();
	minute9 = datets9.getUTCMinutes();
	minute10 = datets10.getUTCMinutes();
	minute11 = datets11.getUTCMinutes();
	minute12 = datets12.getUTCMinutes();
	minute13 = datets13.getUTCMinutes();
	minute14 = datets14.getUTCMinutes();
	minute15 = datets15.getUTCMinutes();

	if (validValue = data[60].valid)
		{ if ((currentts - date1) >= 86400000 && (currentts - date1) < 172800000) {$("#lbf1 span").html('1 day ago');}
			else { if ((currentts - date1) >= 172800000 && (currentts - date1) < 259200000) {$("#lbf1 span").html('2 days ago');}
				else { if ((currentts - date1) >= 259200000 && (currentts - date1) < 345600000) {$("#lbf1 span").html('3 days ago');}
					else { if ((currentts - date1) >= 345600000) {$("#lbf1 span").html('4 or 4+ days ago');}
						else { if ((currentts - date1) < 3600000) {$("#lbf1 span").html(minute1+' minutes ago');}
							else {$("#lbf1 span").html(hour1+' hours '+minute1+' minutes ago');}
						}
					}
				}
			}	
	}	else { if ((currentts - date1) >= 86400000 && (currentts - date1) < 172800000) {$("#lbf1 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date1) >= 172800000 && (currentts - date1) < 259200000) {$("#lbf1 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date1) >= 259200000 && (currentts - date1) < 345600000) {$("#lbf1 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date1) >= 345600000) {$("#lbf1 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date1) < 3600000) {$("#lbf1 span").html('<font color="black">'+minute1+' minutes ago</font>');}
							else {$("#lbf1 span").html('<font color="black">'+hour1+' hours '+minute1+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[61].valid)
		{ if ((currentts - date2) >= 86400000 && (currentts - date2) < 172800000) {$("#lbf2 span").html('1 day ago');}
			else { if ((currentts - date2) >= 172800000 && (currentts - date2) < 259200000) {$("#lbf2 span").html('2 days ago');}
				else { if ((currentts - date2) >= 259200000 && (currentts - date2) < 345600000) {$("#lbf2 span").html('3 days ago');}
					else { if ((currentts - date2) >= 345600000) {$("#lbf2 span").html('4 or 4+ days ago');}
						else { if ((currentts - date2) < 3600000) {$("#lbf2 span").html(minute2+' minutes ago');}
							else { if ((currentts - date2) < 3600000) {$("#lbf2 span").html('<font color="black">'+minute2+' minutes ago</font>');}
								else {$("#lbf2 span").html(hour2+' hours '+minute2+' minutes ago');}
							}
						}
					}
				}
			}
	}	else { if ((currentts - date2) >= 86400000 && (currentts - date2) < 172800000) {$("#lbf2 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date2) >= 172800000 && (currentts - date2) < 259200000) {$("#lbf2 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date2) >= 259200000 && (currentts - date2) < 345600000) {$("#lbf2 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date2) >= 345600000) {$("#lbf2 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date2) < 3600000) {$("#lbf2 span").html('<font color="black">'+minute2+' minutes ago</font>');}
							else {$("#lbf2 span").html('<font color="black">'+hour2+' hours '+minute2+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[62].valid)
		{ if ((currentts - date3) >= 86400000 && (currentts - date3) < 172800000) {$("#lbf3 span").html('1 day ago');}
			else { if ((currentts - date3) >= 172800000 && (currentts - date3) < 259200000) {$("#lbf3 span").html('2 days ago');}
				else { if ((currentts - date3) >= 259200000 && (currentts - date3) < 345600000) {$("#lbf3 span").html('3 days ago');}
					else { if ((currentts - date3) >= 345600000) {$("#lbf3 span").html('4 or 4+ days ago');}
						else { if ((currentts - date3) < 3600000) {$("#lbf3 span").html(minute3+' minutes ago');}
							else {$("#lbf3 span").html(hour3+' hours '+minute3+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date3) >= 86400000 && (currentts - date3) < 172800000) {$("#lbf3 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date3) >= 172800000 && (currentts - date3) < 259200000) {$("#lbf3 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date3) >= 259200000 && (currentts - date3) < 345600000) {$("#lbf3 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date3) >= 345600000) {$("#lbf3 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date3) < 3600000) {$("#lbf3 span").html('<font color="black">'+minute3+' minutes ago</font>');}
							else {$("#lbf3 span").html('<font color="black">'+hour3+' hours '+minute3+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[63].valid)
		{ if ((currentts - date4) >= 86400000 && (currentts - date4) < 172800000) {$("#lbf4 span").html('1 day ago');}
			else { if ((currentts - date4) >= 172800000 && (currentts - date4) < 259200000) {$("#lbf4 span").html('2 days ago');}
				else { if ((currentts - date4) >= 259200000 && (currentts - date4) < 345600000) {$("#lbf4 span").html('3 days ago');}
					else { if ((currentts - date4) >= 345600000) {$("#lbf4 span").html('4 or 4+ days ago');}
						else { if ((currentts - date4) < 3600000) {$("#lbf4 span").html(minute4+' minutes ago');}
							else {$("#lbf4 span").html(hour4+' hours '+minute4+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date4) >= 86400000 && (currentts - date4) < 172800000) {$("#lbf4 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date4) >= 172800000 && (currentts - date4) < 259200000) {$("#lbf4 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date4) >= 259200000 && (currentts - date4) < 345600000) {$("#lbf4 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date4) >= 345600000) {$("#lbf4 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date4) < 3600000) {$("#lbf4 span").html('<font color="black">'+minute4+' minutes ago</font>');}
							else {$("#lbf4 span").html('<font color="black">'+hour4+' hours '+minute4+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[64].valid)
		{ if ((currentts - date5) >= 86400000 && (currentts - date5) < 172800000) {$("#lbf5 span").html('1 day ago');}
			else { if ((currentts - date5) >= 172800000 && (currentts - date5) < 259200000) {$("#lbf5 span").html('2 days ago');}
				else { if ((currentts - date5) >= 259200000 && (currentts - date5) < 345600000) {$("#lbf5 span").html('3 days ago');}
					else { if ((currentts - date5) >= 345600000) {$("#lbf5 span").html('4 or 4+ days ago');}
						else { if ((currentts - date5) < 3600000) {$("#lbf5 span").html(minute5+' minutes ago');}
							else {$("#lbf5 span").html(hour5+' hours '+minute5+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date5) >= 86400000 && (currentts - date5) < 172800000) {$("#lbf5 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date5) >= 172800000 && (currentts - date5) < 259200000) {$("#lbf5 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date5) >= 259200000 && (currentts - date5) < 345600000) {$("#lbf5 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date5) >= 345600000) {$("#lbf5 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date5) < 3600000) {$("#lbf5 span").html('<font color="black">'+minute5+' minutes ago</font>');}
							else {$("#lbf5 span").html('<font color="black">'+hour5+' hours '+minute5+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[65].valid)
		{ if ((currentts - date6) >= 86400000 && (currentts - date6) < 172800000) {$("#lbf6 span").html('1 day ago');}
			else { if ((currentts - date6) >= 172800000 && (currentts - date6) < 259200000) {$("#lbf6 span").html('2 days ago');}
				else { if ((currentts - date6) >= 259200000 && (currentts - date6) < 345600000) {$("#lbf6 span").html('3 days ago');}
					else { if ((currentts - date6) >= 345600000) {$("#lbf6 span").html('4 or 4+ days ago');}
						else { if ((currentts - date6) < 3600000) {$("#lbf6 span").html(minute6+' minutes ago');}
							else {$("#lbf6 span").html(hour6+' hours '+minute6+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date6) >= 86400000 && (currentts - date6) < 172800000) {$("#lbf6 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date6) >= 172800000 && (currentts - date6) < 259200000) {$("#lbf6 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date6) >= 259200000 && (currentts - date6) < 345600000) {$("#lbf6 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date6) >= 345600000) {$("#lbf6 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date6) < 3600000) {$("#lbf6 span").html('<font color="black">'+minute6+' minutes ago</font>');}
							else {$("#lbf6 span").html('<font color="black">'+hour6+' hours '+minute6+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[66].valid)
		{ if ((currentts - date7) >= 86400000 && (currentts - date7) < 172800000) {$("#lbf7 span").html('1 day ago');}
			else { if ((currentts - date7) >= 172800000 && (currentts - date7) < 259200000) {$("#lbf7 span").html('2 days ago');}
				else { if ((currentts - date7) >= 259200000 && (currentts - date7) < 345600000) {$("#lbf7 span").html('3 days ago');}
					else { if ((currentts - date7) >= 345600000) {$("#lbf7 span").html('4 or 4+ days ago');}
						else { if ((currentts - date7) < 3600000) {$("#lbf7 span").html(minute7+' minutes ago');}
							else {$("#lbf7 span").html(hour7+' hours '+minute7+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date7) >= 86400000 && (currentts - date7) < 172800000) {$("#lbf7 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date7) >= 172800000 && (currentts - date7) < 259200000) {$("#lbf7 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date7) >= 259200000 && (currentts - date7) < 345600000) {$("#lbf7 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date7) >= 345600000) {$("#lbf7 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date7) < 3600000) {$("#lbf7 span").html('<font color="black">'+minute7+' minutes ago</font>');}
							else {$("#lbf7 span").html('<font color="black">'+hour7+' hours '+minute7+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[67].valid)
		{ if ((currentts - date8) >= 86400000 && (currentts - date8) < 172800000) {$("#lbf8 span").html('1 day ago');}
			else { if ((currentts - date8) >= 172800000 && (currentts - date8) < 259200000) {$("#lbf8 span").html('2 days ago');}
				else { if ((currentts - date8) >= 259200000 && (currentts - date8) < 345600000) {$("#lbf8 span").html('3 days ago');}
					else { if ((currentts - date8) >= 345600000) {$("#lbf8 span").html('4 or 4+ days ago');}
						else { if ((currentts - date8) < 3600000) {$("#lbf8 span").html(minute8+' minutes ago');}
							else {$("#lbf8 span").html(hour8+' hours '+minute8+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date8) >= 86400000 && (currentts - date8) < 172800000) {$("#lbf8 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date8) >= 172800000 && (currentts - date8) < 259200000) {$("#lbf8 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date8) >= 259200000 && (currentts - date8) < 345600000) {$("#lbf8 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date8) >= 345600000) {$("#lbf8 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date8) < 3600000) {$("#lbf8 span").html('<font color="black">'+minute8+' minutes ago</font>');}
							else {$("#lbf8 span").html('<font color="black">'+hour8+' hours '+minute8+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[68].valid)
		{ if ((currentts - date9) >= 86400000 && (currentts - date9) < 172800000) {$("#lbf9 span").html('1 day ago');}
			else { if ((currentts - date9) >= 172800000 && (currentts - date9) < 259200000) {$("#lbf9 span").html('2 days ago');}
				else { if ((currentts - date9) >= 259200000 && (currentts - date9) < 345600000) {$("#lbf9 span").html('3 days ago');}
					else { if ((currentts - date9) >= 345600000) {$("#lbf9 span").html('4 or 4+ days ago');}
						else { if ((currentts - date9) < 3600000) {$("#lbf9 span").html(minute9+' minutes ago');}
							else {$("#lbf9 span").html(hour9+' hours '+minute9+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date9) >= 86400000 && (currentts - date9) < 172800000) {$("#lbf9 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date9) >= 172800000 && (currentts - date9) < 259200000) {$("#lbf9 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date9) >= 259200000 && (currentts - date9) < 345600000) {$("#lbf9 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date9) >= 345600000) {$("#lbf9 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date9) < 3600000) {$("#lbf9 span").html('<font color="black">'+minute9+' minutes ago</font>');}
							else {$("#lbf9 span").html('<font color="black">'+hour9+' hours '+minute9+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[69].valid)
		{ if ((currentts - date10) >= 86400000 && (currentts - date10) < 172800000) {$("#lbf10 span").html('1 day ago');}
			else { if ((currentts - date10) >= 172800000 && (currentts - date10) < 259200000) {$("#lbf10 span").html('2 days ago');}
				else { if ((currentts - date10) >= 259200000 && (currentts - date10) < 345600000) {$("#lbf10 span").html('3 days ago');}
					else { if ((currentts - date10) >= 345600000) {$("#lbf10 span").html('4 or 4+ days ago');}
						else { if ((currentts - date10) < 3600000) {$("#lbf10 span").html(minute10+' minutes ago');}
							else {$("#lbf10 span").html(hour10+' hours '+minute10+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date10) >= 86400000 && (currentts - date10) < 172800000) {$("#lbf10 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date10) >= 172800000 && (currentts - date10) < 259200000) {$("#lbf10 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date10) >= 259200000 && (currentts - date10) < 345600000) {$("#lbf10 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date10) >= 345600000) {$("#lbf10 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date10) < 3600000) {$("#lbf10 span").html('<font color="black">'+minute10+' minutes ago</font>');}
							else {$("#lbf10 span").html('<font color="black">'+hour10+' hours '+minute10+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[70].valid)
		{ if ((currentts - date11) >= 86400000 && (currentts - date11) < 172800000) {$("#lbf11 span").html('1 day ago');}
			else { if ((currentts - date11) >= 172800000 && (currentts - date11) < 259200000) {$("#lbf11 span").html('2 days ago');}
				else { if ((currentts - date11) >= 259200000 && (currentts - date11) < 345600000) {$("#lbf11 span").html('3 days ago');}
					else { if ((currentts - date11) >= 345600000) {$("#lbf11 span").html('4 or 4+ days ago');}
						else { if ((currentts - date11) < 3600000) {$("#lbf11 span").html(minute11+' minutes ago');}
							else {$("#lbf11 span").html(hour11+' hours '+minute11+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date11) >= 86400000 && (currentts - date11) < 172800000) {$("#lbf11 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date11) >= 172800000 && (currentts - date11) < 259200000) {$("#lbf11 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date11) >= 259200000 && (currentts - date11) < 345600000) {$("#lbf11 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date11) >= 345600000) {$("#lbf11 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date11) < 3600000) {$("#lbf11 span").html('<font color="black">'+minute11+' minutes ago</font>');}
							else {$("#lbf11 span").html('<font color="black">'+hour11+' hours '+minute11+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[71].valid)
		{ if ((currentts - date12) >= 86400000 && (currentts - date12) < 172800000) {$("#lbf12 span").html('1 day ago');}
			else { if ((currentts - date12) >= 172800000 && (currentts - date12) < 259200000) {$("#lbf12 span").html('2 days ago');}
				else { if ((currentts - date12) >= 259200000 && (currentts - date12) < 345600000) {$("#lbf12 span").html('3 days ago');}
					else { if ((currentts - date12) >= 345600000) {$("#lbf12 span").html('4 or 4+ days ago');}
						else { if ((currentts - date12) < 3600000) {$("#lbf12 span").html(minute12+' minutes ago');}
							else {$("#lbf12 span").html(hour12+' hours '+minute12+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date12) >= 86400000 && (currentts - date12) < 172800000) {$("#lbf12 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date12) >= 172800000 && (currentts - date12) < 259200000) {$("#lbf12 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date12) >= 259200000 && (currentts - date12) < 345600000) {$("#lbf12 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date12) >= 345600000) {$("#lbf12 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date12) < 3600000) {$("#lbf12 span").html('<font color="black">'+minute12+' minutes ago</font>');}
							else {$("#lbf12 span").html('<font color="black">'+hour12+' hours '+minute12+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[72].valid)
		{ if ((currentts - date13) >= 86400000 && (currentts - date13) < 172800000) {$("#lbf13 span").html('1 day ago');}
			else { if ((currentts - date13) >= 172800000 && (currentts - date13) < 259200000) {$("#lbf13 span").html('2 days ago');}
				else { if ((currentts - date13) >= 259200000 && (currentts - date13) < 345600000) {$("#lbf13 span").html('3 days ago');}
					else { if ((currentts - date13) >= 345600000) {$("#lbf13 span").html('4 or 4+ days ago');}
						else { if ((currentts - date13) < 3600000) {$("#lbf13 span").html(minute13+' minutes ago');}
							else {$("#lbf13 span").html(hour13+' hours '+minute13+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date13) >= 86400000 && (currentts - date13) < 172800000) {$("#lbf13 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date13) >= 172800000 && (currentts - date13) < 259200000) {$("#lbf13 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date13) >= 259200000 && (currentts - date13) < 345600000) {$("#lbf13 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date13) >= 345600000) {$("#lbf13 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date13) < 3600000) {$("#lbf13 span").html('<font color="black">'+minute13+' minutes ago</font>');}
							else {$("#lbf13 span").html('<font color="black">'+hour13+' hours '+minute13+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[73].valid)
		{ if ((currentts - date14) >= 86400000 && (currentts - date14) < 172800000) {$("#lbf14 span").html('1 day ago');}
			else { if ((currentts - date14) >= 172800000 && (currentts - date14) < 259200000) {$("#lbf14 span").html('2 days ago');}
				else { if ((currentts - date14) >= 259200000 && (currentts - date14) < 345600000) {$("#lbf14 span").html('3 days ago');}
					else { if ((currentts - date14) >= 345600000) {$("#lbf14 span").html('4 or 4+ days ago');}
						else { if ((currentts - date14) < 3600000) {$("#lbf14 span").html(minute14+' minutes ago');}
							else {$("#lbf14 span").html(hour14+' hours '+minute14+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date14) >= 86400000 && (currentts - date14) < 172800000) {$("#lbf14 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date14) >= 172800000 && (currentts - date14) < 259200000) {$("#lbf14 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date14) >= 259200000 && (currentts - date14) < 345600000) {$("#lbf14 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date14) >= 345600000) {$("#lbf14 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date14) < 3600000) {$("#lbf14 span").html('<font color="black">'+minute14+' minutes ago</font>');}
							else {$("#lbf14 span").html('<font color="black">'+hour14+' hours '+minute14+' minutes ago</font>');}
						}
					}
				}
			}
		}
	if (validValue = data[74].valid)
		{ if ((currentts - date15) >= 86400000 && (currentts - date15) < 172800000) {$("#lbf15 span").html('1 day ago');}
			else { if ((currentts - date15) >= 172800000 && (currentts - date15) < 259200000) {$("#lbf15 span").html('2 days ago');}
				else { if ((currentts - date15) >= 259200000 && (currentts - date15) < 345600000) {$("#lbf15 span").html('3 days ago');}
					else { if ((currentts - date15) >= 345600000) {$("#lbf15 span").html('4 or 4+ days ago');}
						else { if ((currentts - date15) < 3600000) {$("#lbf15 span").html(minute15+' minutes ago');}
							else {$("#lbf15 span").html(hour15+' hours '+minute15+' minutes ago');}
						}
					}
				}
			}
	}	else { if ((currentts - date15) >= 86400000 && (currentts - date15) < 172800000) {$("#lbf15 span").html('<font color="black">1 day ago</font>');}
			else { if ((currentts - date15) >= 172800000 && (currentts - date15) < 259200000) {$("#lbf15 span").html('<font color="black">2 days ago</font>');}
				else { if ((currentts - date15) >= 259200000 && (currentts - date15) < 345600000) {$("#lbf15 span").html('<font color="black">3 days ago</font>');}
					else { if ((currentts - date15) >= 345600000) {$("#lbf15 span").html('<font color="black">4 or 4+ days ago</font>');}
						else { if ((currentts - date15) < 3600000) {$("#lbf15 span").html('<font color="black">'+minute15+' minutes ago</font>');}
							else {$("#lbf15 span").html('<font color="black">'+hour15+' hours '+minute15+' minutes ago</font>');}
						}
					}
				}
			}
		}

	if (validValue = data[60].valid)
		{$("#tf1 span").html(datetime1);}
	else {$("#tf1 span").html('<font color="black">'+datetime1+'</font>');}	
	if (validValue = data[61].valid)
		{$("#tf2 span").html(datetime2);}
	else {$("#tf2 span").html('<font color="black">'+datetime2+'</font>');}
	if (validValue = data[62].valid)
		{$("#tf3 span").html(datetime3);}
	else {$("#tf3 span").html('<font color="black">'+datetime3+'</font>');}
	if (validValue = data[63].valid)
		{$("#tf4 span").html(datetime4);}
	else {$("#tf4 span").html('<font color="black">'+datetime4+'</font>');}
	if (validValue = data[64].valid)
		{$("#tf5 span").html(datetime5);}
	else {$("#tf5 span").html('<font color="black">'+datetime5+'</font>');}
	if (validValue = data[65].valid)
		{$("#tf6 span").html(datetime6);}
	else {$("#tf6 span").html('<font color="black">'+datetime6+'</font>');}
	if (validValue = data[66].valid)
		{$("#tf7 span").html(datetime7);}
	else {$("#tf7 span").html('<font color="black">'+datetime7+'</font>');}
	if (validValue = data[67].valid)
		{$("#tf8 span").html(datetime8);}
	else {$("#tf8 span").html('<font color="black">'+datetime8+'</font>');}
	if (validValue = data[68].valid)
		{$("#tf9 span").html(datetime9);}
	else {$("#tf9 span").html('<font color="black">'+datetime9+'</font>');}
	if (validValue = data[69].valid)
		{$("#tf10 span").html(datetime10);}
	else {$("#tf10 span").html('<font color="black">'+datetime10+'</font>');}
	if (validValue = data[70].valid)
		{$("#tf11 span").html(datetime11);}
	else {$("#tf11 span").html('<font color="black">'+datetime11+'</font>');}
	if (validValue = data[71].valid)
		{$("#tf12 span").html(datetime12);}
	else {$("#tf12 span").html('<font color="black">'+datetime12+'</font>');}
	if (validValue = data[72].valid)
		{$("#tf13 span").html(datetime13);}
	else {$("#tf13 span").html('<font color="black">'+datetime13+'</font>');}
	if (validValue = data[73].valid)
		{$("#tf14 span").html(datetime14);}
	else {$("#tf14 span").html('<font color="black">'+datetime14+'</font>');}
	if (validValue = data[74].valid)
		{$("#tf15 span").html(datetime15);}
	else {$("#tf15 span").html('<font color="black">'+datetime15+'</font>');}

	});
}

function UpdateAllStats(){
	UpdateNetworkStats();
	PoolBlock();
	UpdatePoolStats();
}

// SET TIME TO REFRESH ALL VALUE in SECOND
var time = 10;

$(window).on("load", function() {
	UpdateAllStats();
	setInterval(UpdateAllStats, time * 1000);
});
