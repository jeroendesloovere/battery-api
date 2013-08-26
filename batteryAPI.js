/**
 * jsFrontend Battery API
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
jsFrontendBatteryAPI =
{
	battery: false,
	init: function()
	{
		// get the battery
		battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

		// redefine core battery
		if(battery != 'undefined') jsFrontendBatteryAPI.battery = battery;
	},

	/**
	 * Is charging
	 *
	 * @return bool
	 */
	isCharging: function()
	{
		return (jsFrontendBatteryAPI.isSupported()) ? jsFrontendBatteryAPI.battery.charging : false;
	},

	/**
	 * Is supported
	 *
	 * @return bool
	 */
	isSupported: function()
	{
		return !!(jsFrontendBatteryAPI.battery);
	},

	/**
	 * Get charging time
	 *
	 * @return float
	 */
	getChargingTime: function()
	{
		return (jsFrontendBatteryAPI.isSupported()) ? jsFrontendBatteryAPI.battery.chargingTime : 0;	
	},

	/**
	 * Get discharging time
	 *
	 * @return float
	 */
	getDischargingTime: function()
	{
		return (jsFrontendBatteryAPI.isSupported()) ? jsFrontendBatteryAPI.battery.dischargingTime : 0;	
	},

	/**
	 * Get level
	 *
	 * @return float
	 */
	getLevel: function()
	{
		return (jsFrontendBatteryAPI.isSupported()) ? jsFrontendBatteryAPI.battery.level : 0;	
	}
}

$(jsFrontendBatteryAPI.init);
