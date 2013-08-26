/**
 * jsFrontend Battery API test
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
jsFrontendBatteryAPITest =
{
	init: function()
	{
		if(jsFrontendBatteryAPI.isSupported())
		{
			// test some properties
			console.warn("Battery charging: ", jsFrontendBatteryAPI.isCharging()); // true
			console.warn("Battery level: ", jsFrontendBatteryAPI.getLevel()); // 0.58
			console.warn("Battery discharging time: ", jsFrontendBatteryAPI.getDischargingTime());
	
			// bind event for charging change
			battery.addEventListener("chargingchange", function(e)
			{
				console.warn("Battery charge change: ", jsFrontendBatteryAPI.isCharging());
			}, false);
	
			// bind event for charging time change
			battery.addEventListener("chargingtimechange", function(e)
			{
				console.warn("Battery charge time change: ", jsFrontendBatteryAPI.getChargingTime());
			}, false);
	
			// bind event for discharging time change
			battery.addEventListener("dischargingtimechange", function(e)
			{
				console.warn("Battery discharging time change: ", jsFrontendBatteryAPI.getDischargingTime());
			}, false);
	
			// bind event for battery level change
			battery.addEventListener("levelchange", function(e)
			{
				console.warn("Battery level change: ", jsFrontendBatteryAPI.getLevel());
			}, false);
		}
		else
		{
			console.warn('Can\'t use Battery API');
		}
	}
}

$(jsFrontendBatteryAPITest.init);
