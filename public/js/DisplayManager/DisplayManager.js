class DisplayManager {
    static #ips = [
    	'http://192.168.0.134',
    	'http://192.168.0.178',
	];

    static getDisplays() {
    	return this.#ips;
    }

    static triggerDisplay(color, ipPos) {
        if (color === 'all' && ipPos === 'all') {
            this.#toggleLastLap();
            return;
        }

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
        console.log(display);
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
    }

    static #toggleLastLap() {
        this.#ips.forEach(ip => {
            this.#sendRequest('green', this.#ips.indexOf(ip))
            this.#sendRequest('blue', this.#ips.indexOf(ip))
            this.#sendRequest('yellow', this.#ips.indexOf(ip))
            this.#sendRequest('red', this.#ips.indexOf(ip))
        });
    }

    static #toggleAll(color, pos) {
        this.#ips.forEach(ip => {
            this.#sendRequest(color, this.#ips.indexOf(ip));
        });
    }
}