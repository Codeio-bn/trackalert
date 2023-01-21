class DisplayManager {
    static #ips = [
    	'http://192.168.2.30',
    	'http://192.168.2.32'
	];

    static getDisplays() {
    	return this.#ips;
    }

    static triggerDisplay(color, ipPos) {
        switch (color) {
            case 'blue':
                this.#sendRequest('blue', ipPos)
                break;
            case 'yellow':
                this.#sendRequest('yellow', ipPos)
                break;
            case 'red':
                this.#sendRequest('red', ipPos)
                break;
            case 'blank':
            default:
                this.#sendRequest('blank', ipPos)
                break;
        }
    }

    static #sendRequest(display, ipPos) {
    	console.log(display, this.#ips[ipPos]);
//        var xhr = new XMLHttpRequest();
//        xhr.open("GET", this.#ips + "/" + display, true);
//        xhr.send();
    }
}
