function updateTime()
{
   calculateTime("custom");
}

function calculateTime(theDate)
{
	if (theDate=="custom")
	{
		var customDate= new Date();
        	customDate.setDate($("#day").val());
        	customDate.setMonth($("#month").val()-1);
        	customDate.setYear($("#year").val());
		theDate=customDate
	}
        var times = prayTimes.getTimes(theDate, [-20, 57], 4);
	var list = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
	for(var i in list)
	{
		$("#"+list[i]).html(times[list[i].toLowerCase()]);
	}
}
