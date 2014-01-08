/**
 * Battery API test
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
batteryAPITest =
{
	init: function()
	{
		if(batteryAPI.isSupported())
		{
			// test some properties
			console.warn("Battery charging: ", batteryAPI.isCharging()); // true
			console.warn("Battery level: ", batteryAPI.getLevel()); // 0.58
			console.warn("Battery discharging time: ", batteryAPI.getDischargingTime());
	
			// bind event for charging change
			battery.addEventListener("chargingchange", function(e)
			{
				console.warn("Battery charge change: ", batteryAPI.isCharging());
			}, false);
	
			// bind event for charging time change
			battery.addEventListener("chargingtimechange", function(e)
			{
				console.warn("Battery charge time change: ", batteryAPI.getChargingTime());
			}, false);
	
			// bind event for discharging time change
			battery.addEventListener("dischargingtimechange", function(e)
			{
				console.warn("Battery discharging time change: ", batteryAPI.getDischargingTime());
			}, false);
	
			// bind event for battery level change
			battery.addEventListener("levelchange", function(e)
			{
				console.warn("Battery level change: ", batteryAPI.getLevel());
			}, false);
		}
		else
		{
			console.warn('Can\'t use Battery API');
		}
	}
}

$(batteryAPITest.init);
