// local storage key
export const weatherStorageKey: string = "weatherData";

// local storage with expiration > https://gist.github.com/anhang/1096149
export const weatherLocalStorage = {
    save : function(key: any, jsonData: any, expirationMin: number) {
		if(typeof (Storage) === "undefined") { 
            return false; 
        }
		const expirationMS = expirationMin * 60 * 1000;
		const record = { 
            value: JSON.stringify(jsonData), 
            timestamp: new Date().getTime() + expirationMS
        }
		localStorage.setItem(key, JSON.stringify(record));
		return jsonData;
	},
	load : function(key: any) {
		if(typeof (Storage) === "undefined") { 
            return false; 
        }
        const recordStorage = localStorage.getItem(key);
		const record = recordStorage !== null ? JSON.parse(recordStorage) : false;
		if (!record) {
            return false;
        }
		return (new Date().getTime() < record.timestamp && JSON.parse(record.value));
	}
}