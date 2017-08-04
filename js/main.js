var Main = {
    onLoad: function() {
        widgetAPI.sendReadyEvent();    
        /**
         * JavaScript code Here!
         */
        client.connect(options);
        this.init();
    },
    reload: function(){
        window.setTimeout(function () {
            location.reload(true);
        }, 1000);
    },
    keyDown: function() {            // Key handler
        var keyCode = event.keyCode;
        toast("Key code: " + keyCode);
        log("Key code: " + keyCode);

        switch (keyCode) {
            case tvKey.KEY_LEFT:
                moverSlider(-1);
                break;
            case tvKey.KEY_RIGHT:
                moverSlider(1);
                break;
            case tvKey.KEY_UP:
                break;
            case tvKey.KEY_DOWN:
                break;
            case tvKey.KEY_ENTER:
                break;

            case 31:
                this.showDeviceInformations();
                break;
            case 108:
                this.reload();
                break;

            case tvKey.KEY_PLAY:
                moverSlider(100);
                break;
            case tvKey.KEY_STOP:
                moverSlider(0);
                break;
            case tvKey.KEY_PAUSE:
                moverSlider(0);
                break;
            case tvKey.KEY_FF:
                moverSlider(1);
                break;
            case tvKey.KEY_REW:
                moverSlider(-1);
                break;
            
            case tvKey.KEY_RETURN:
                $('#modal_info').modal('close');
                widgetAPI.blockNavigation(event);
                // Not terminated
                break;
            case tvKey.KEY_EXIT:
                // Terminated by force
                break;
            default:
                break;
        }
    },
    plugin: false,
    pluginNetwork: false,
    pluginNNavi: false,
    pluginObjectTV: false,
    timezoneOffset: 0,
    fileSystemObj: false,
    oldSystemObj: false,
    isOffline: false,
    statusOK: '',
    statusError: 'ERROR',
    TvAppVersion: "0.0.1",
    init: function() {
        this.plugin = document.getElementById('pluginFilesystem');
        this.plugin.Open('FileSystem', '0001', 'FileSystem');
        this.pluginNetwork = document.getElementById('pluginNetwork');
        this.pluginNetwork.Open('Network', '0001', 'Network');
        this.pluginNNavi = document.getElementById('pluginNNavi');
        this.pluginNNavi.Open('NNavi', '0007', 'NNavi');
        this.pluginObjectTV = document.getElementById('pluginObjectTV');
        this.pluginObjectTV.Open('TV', '0003', 'TV');
        this.timezoneOffset = this.pluginObjectTV.Execute("GetTimeZone_Offset");
        this.fileSystemObj = new FileSystem();
        this.oldSystemObj = document.getElementById('FilesystemPlugin');
        this.pluginNNavi.Execute("SetBannerState", 8);
        log('init done');
        return true
    },
    getMacAddress: function() {
        return this.pluginNetwork.Execute("GetMAC", "1")
    },
    getActiveType: function() {
        var cType = this.pluginNetwork.Execute("GetActiveType")
            , networkType = 'unknown';
        if (cType == 1)
            networkType = 'wired';
        if (cType == 0)
            networkType = 'wireless';
        if (cType == -1)
            networkType = 'no active connection';
        return networkType
    },
    getDUID: function() {
        var mac = this.getMacAddress()
            , fwv = this.getFirmwareVersion()
            , rec = this.pluginNNavi.Execute("GetRemoconType")
            , strip = MD5(fwv + rec)
            , duid = strip.substr(0, 8) + '-' + strip.substr(9, 4) + '-' + strip.substr(14, 4) + '-' + strip.substr(19, 4) + '-' + mac;
        return duid
    },
    getFirmwareVersion: function() {
        return this.pluginNNavi.Execute("GetFirmware")
    },
    getModel: function() {
        return 'SMART-TV-' + this.pluginNNavi.Execute("GetFirmware")
    },
    getModelVersion: function() {
        return this.pluginNNavi.Execute("GetFirmware")
    },
    getUsedSpace: function() {
        var size = parseInt(this.plugin.Execute('GetUsedSize'));
        if (size < 0)
            size = -size;
        return size
    },
    getUsedSize: function() {
        return this.parseSize(this.getUsedSpace())
    },
    getFreeSpace: function() {
        var size = parseInt(this.plugin.Execute('GetFreeSize'));
        if (size < 0)
            size = -size;
        return size
    },
    getFreeSize: function() {
        return this.parseSize(this.getFreeSpace())
    },
    getTotalSpace: function() {
        var size = parseInt(this.plugin.Execute('GetTotalSize'));
        if (size < 0)
            size = -size;
        return size
    },
    getTotalSize: function() {
        return this.parseSize(this.getTotalSpace())
    },
    parseSize: function(byte) {
        byte = parseInt(byte);
        if (byte < 0)
            byte = -byte;
        var extension = 'B';
        if (byte > 1024) {
            byte = byte / 1024;
            extension = 'KB'
        }
        ;if (byte > 1024) {
            byte = byte / 1024;
            extension = 'MB'
        }
        ;if (byte > 1024) {
            byte = byte / 1024;
            extension = 'GB'
        }
        ;if (extension != 'B')
            byte = Math.round(byte * 100) / 100;
        return byte + ' ' + extension
    },
    infoBox: {
        addInfo: function(id, label, value) {
            var box = $('#wrapper' + id)
              , rowClass = '';
            if (box.length == 0) {
                if (this.oddOrEven) {
                    this.oddOrEven = false;
                    rowClass = 'odd'
                } else {
                    this.oddOrEven = true;
                    rowClass = 'even'
                }
                ;$('#infoBox').append('<div id="wrapper' + id + '" class="wrapper ' + rowClass + '"><span class="label">' + label + ':</span>&nbsp;&nbsp;<span id="value' + id + '"><b>' + value + '</b></span><div class="clear"></div></div>')
            } else {
                $('#wrapper' + id + ' span.label').first().text(label);
                $('#value' + id).html(value)
            }
        },
        updateStatus: function(id, statusText) {
            var status = $('#value' + id + '').addClass(statusText)
        },
        updateValue: function(id, valueText) {
            $('#value' + id + '').html(valueText)
        }
    },
    systemInfo: {
        plugins: {
            pluginCPUSef: null,
            pluginRAMSef: null,
            pluginRBTSef: null,
            pluginUPTSef: null
        },
        getInfo: function() {
            if (!$('#modal_info').is(':visible'))
                return true;
            if (Main.systemInfo.plugins.pluginCPUSef == null)
                Main.systemInfo.initPlugins();
            Main.systemInfo.plugins.pluginCPUSef.Execute("getCPUUsage", '');
            Main.systemInfo.plugins.pluginRAMSef.Execute("getRamUsage", '');
            Main.systemInfo.plugins.pluginUPTSef.Execute("getSystemUpTime", '');
            setTimeout('Main.systemInfo.getInfo()', 1e3)
        },        
        initPlugins: function() {
            Main.systemInfo.plugins.pluginCPUSef = document.getElementById('pluginCPUobjectSef');
            Main.systemInfo.plugins.pluginRAMSef = document.getElementById('pluginRAMobjectSef');
            Main.systemInfo.plugins.pluginUPTSef = document.getElementById('pluginUPTobjectSef');
            Main.systemInfo.plugins.pluginCPUSef.OnEvent = CPUSef_OnEvent;
            Main.systemInfo.plugins.pluginRAMSef.OnEvent = RAMSef_OnEvent;
            Main.systemInfo.plugins.pluginUPTSef.OnEvent = UPTSef_OnEvent;
            Main.systemInfo.plugins.pluginCPUSef.Open("LFD", "1.000", "LFD");
            Main.systemInfo.plugins.pluginRAMSef.Open("LFD", "1.000", "LFD");
            Main.systemInfo.plugins.pluginUPTSef.Open("LFD", "1.000", "LFD")
        }
    },
    showDeviceInformations: function() {
        if ($('#modal_info').is(':visible')) {
            $('#modal_info').modal('close');
            return true
        }
        ;$('#modal_info').modal('open');
        var tmpVal = false;
        tmpVal = (this.isOffline) ? 'Offline' : 'Online';
        this.infoBox.addInfo('OnlineStatusApp', 'Current online status', tmpVal);
        tmpVal = (this.isOffline) ? this.statusError : this.statusOK;
        this.infoBox.updateStatus('OnlineStatusApp', tmpVal);
        this.infoBox.addInfo('LocalAppVersion', 'App version', this.TvAppVersion);
        this.infoBox.addInfo('PlayerId', 'Device ID', this.getDUID());
        tmpVal = (tmpVal.length == 36) ? this.statusOK : this.statusError;
        this.infoBox.updateStatus('PlayerId', tmpVal);
        this.infoBox.addInfo('ExternalIP', 'External IP address', '');
        tmpVal = this.getActiveType();
        this.infoBox.addInfo('NetworkType', 'Active network connection', tmpVal);
        if (tmpVal == 'wired' || tmpVal == 'wireless') {
            this.infoBox.updateStatus('NetworkType', this.statusOK)
        } else
            this.infoBox.updateStatus('NetworkType', this.statusError);
        this.infoBox.addInfo('MacAddress', 'MAC address', this.getMacAddress());
        this.infoBox.addInfo('TvModel', 'Model', this.getModelVersion());
        tmpVal = this.getFirmwareVersion();
        if (tmpVal != this.getModelVersion())
            this.infoBox.addInfo('FirmwareVersion', 'Firmware version', tmpVal);
        var fwv = this.pluginNNavi.Execute("GetSystemVersion", 0)
          , rec = this.pluginNNavi.Execute("GetSystemVersion", 1);
        this.infoBox.addInfo('LEEUMversion', 'LEEUM Platform version', fwv);
        this.infoBox.addInfo('COMPversion', 'COMP version', rec);
        this.infoBox.addInfo('SizeTotal', 'Total space', this.getTotalSize());
        this.infoBox.addInfo('UsedTotal', 'Used space', this.getUsedSize());
        this.infoBox.addInfo('FreeTotal', 'Free space', this.getFreeSize());
        Main.systemInfo.getInfo();
    },
};
function RAMSef_OnEvent(eventType, param1, param2) {
    Main.infoBox.addInfo('RAMusage', 'RAM usage', eventType + ' % ')
}
function CPUSef_OnEvent(eventType, param1, param2) {
    Main.infoBox.addInfo('CPUusage', 'CPU usage', eventType + ' % ')
}
function UPTSef_OnEvent(eventType, param1, param2) {
    if (eventType > 0)
        Main.infoBox.addInfo('UPTusage', 'Up time', toHHMMSS(eventType))
}
function moverSlider(move) {
    switch (move) {
        case -1:
            // Previous slide
            $('.slider').slider('prev');
            break;
        case 1:
            // Next slide
            $('.slider').slider('next');
            break;
        case 0:
            // Pause slider
            $('.slider').slider('pause');
            break;
        case 100:
            // Start slider
            $('.slider').slider('start');
            break;
    }
};

var MD5 = function(string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits))
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4)
            return ( lResult ^ 0x80000000 ^ lX8 ^ lY8) ;
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return ( lResult ^ 0xC0000000 ^ lX8 ^ lY8)
            } else
                return ( lResult ^ 0x40000000 ^ lX8 ^ lY8)
        } else
            return ( lResult ^ lX8 ^ lY8)
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z)
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z))
    }
    function H(x, y, z) {
        return ( x ^ y ^ z)
    }
    function I(x, y, z) {
        return ( y ^ (x | (~z)))
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b)
    }
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b)
    }
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b)
    }
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b)
    }
    function ConvertToWordArray(string) {
        var lWordCount, lMessageLength = string.length, lNumberOfWords_temp1 = lMessageLength + 8, lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64, lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16, lWordArray = Array(lNumberOfWords - 1), lBytePosition = 0, lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++
        }
        ;lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray
    }
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2)
        }
        ;return WordToHexValue
    }
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c)
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128)
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128)
            }
        }
        ;return utftext
    }
    ;var x = Array(), k, AA, BB, CC, DD, a, b, c, d, S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD)
    }
    ;var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase()
};
