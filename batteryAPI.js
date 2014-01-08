/**
 * Battery API
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
batteryAPI =
{
	battery: false,
	init: function()
	{
		// get the battery
		battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

		// redefine core battery
		if(battery != 'undefined') batteryAPI.battery = battery;
	},

	/**
	 * Is charging
	 *
	 * @return bool
	 */
	isCharging: function()
	{
		return (batteryAPI.isSupported()) ? batteryAPI.battery.charging : false;
	},

	/**
	 * Is supported
	 *
	 * @return bool
	 */
	isSupported: function()
	{
		return !!(batteryAPI.battery);
	},

	/**
	 * Get charging time
	 *
	 * @return float
	 */
	getChargingTime: function()
	{
		return (batteryAPI.isSupported()) ? batteryAPI.battery.chargingTime : 0;	
	},

	/**
	 * Get discharging time
	 *
	 * @return float
	 */
	getDischargingTime: function()
	{
		return (batteryAPI.isSupported()) ? batteryAPI.battery.dischargingTime : 0;	
	},

	/**
	 * Get level
	 *
	 * @return float
	 */
	getLevel: function()
	{
		return (batteryAPI.isSupported()) ? batteryAPI.battery.level : 0;	
	}
}

$(batteryAPI.init);
