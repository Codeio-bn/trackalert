class DisplayManager {
    static #ips = [
    	'http://192.168.2.30',
	];

    static getDisplays() {
    	return this.#ips;
    }

    static triggerDisplay(color, ipPos) {
        if (ipPos === 'all') {
            this.#toggleAll(color, ipPos);
            return;
        }

        switch (color) {
        	case 'green':
				this.#sendRequest('green', ipPos)
				break;
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
        $.ajax({
            // Url for testing purposes.
            // url: 'http://localhost/api-test/' + display + '.php',
            url: this.#ips[ipPos] + "/" + display,
            type: "application/json",
            method: 'get',
            success: function(result){
                let buttonColor;

                switch (result[0].color) {
                    case 'green':
                        buttonColor = '#1ca75d';
                        break;
                    case 'blue':
                        buttonColor = '#3d7bf9';
                        break;
                    case 'yellow':
                        buttonColor = '#FFE553';
                        break;
                    case 'red':
                        buttonColor = '#ED4646';
                        break;
                    case 'blank':
                        buttonColor = '#707070';
                        break;
                }

                $('#display' + ipPos).css('border', '5px solid ' + buttonColor)
            }
        })

    	console.log(display, this.#ips[ipPos]);
    //    var xhr = new XMLHttpRequest();
    //    xhr.open("GET", this.#ips[ipPos] + "/" + display, true);
    //    xhr.send();
    }

    static #toggleAll(color, pos) {
        this.#ips.forEach(ip => {
            this.#sendRequest(color, this.#ips.indexOf(ip));
        });
    }
}
