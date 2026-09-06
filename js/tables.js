var tables = {
    eua: [
        { pid: '169', name: 'S&P 500' },
        { pid: '166', name: 'NASDAQ' },
        { pid: '172', name: 'DOW JONES' },
        { pid: '27-7503', name: 'VIX' }
    ],
    commodities: [
        { pid: '8833', name: 'WTI OIL' },
        { pid: '8830', name: 'GOLD' },
        { pid: '8831', name: 'COBRE' },
        { pid: '8836', name: 'BCOM' }
    ],
    dx: [
        { pid: '8839', name: 'DX' },
        { pid: '2111', name: 'USD/EUR' },
        { pid: '2123', name: 'USD/JPY' },
        { pid: '2124', name: 'USD/GBP' },
        { pid: '2126', name: 'USD/CAD' },
        { pid: '2119', name: 'USD/SEK' },
        { pid: '2138', name: 'USD/CHF' }
    ],
    europa: [
        { pid: '178', name: 'STOXX 600' },
        { pid: '179', name: 'REINO UNIDO' },
        { pid: '172', name: 'ALEMANHA' },
        { pid: '175', name: 'MILÃO' },
        { pid: '177', name: 'MADRI' }
    ],
    brasil: [
        { pid: '2103', name: 'USD/BRL' },
        { pid: '941612', name: 'INDFUT' },
        { pid: '1138885', name: 'BRL10Y' },
        { pid: '1177002', name: 'CDS5YBRL' }
    ],
    emergentes: [
        { pid: '2103', name: 'USD/BRL' },
        { pid: '2112', name: 'USD/MXN' },
        { pid: '2186', name: 'USD/ZAR' },
        { pid: '2288', name: 'USD/CNY' },
        { pid: '2273', name: 'USD/TRY' },
        { pid: '2190', name: 'USD/INR' },
        { pid: '2175', name: 'USD/RUB' },
        { pid: '2272', name: 'USD/HUF' },
        { pid: '2268', name: 'USD/PLN' },
        { pid: '2258', name: 'USD/CZK' },
        { pid: '2271', name: 'USD/IDR' }
    ],
    latam: [
        { pid: '2103', name: 'USD/BRL' },
        { pid: '2158', name: 'USD/ARS' },
        { pid: '2164', name: 'USD/CLP' },
        { pid: '2170', name: 'USD/COP' },
        { pid: '2232', name: 'USD/PEN' },
        { pid: '2256', name: 'USD/PYG' },
        { pid: '2255', name: 'USD/UYU' },
        { pid: '2254', name: 'USD/BOB' }
    ],
    curva: [
        { pid: '23701', name: 'US2Y' },
        { pid: '23703', name: 'US10Y' },
        { pid: '23705', name: 'US30Y' }
    ],
    dolar: [
        { pid: '2253', name: 'USD/CRC' },
        { pid: '2252', name: 'USD/DOP' },
        { pid: '2251', name: 'USD/HNL' },
        { pid: '2250', name: 'USD/HTG' },
        { pid: '2249', name: 'USD/JMD' },
        { pid: '2248', name: 'USD/NIO' },
        { pid: '2247', name: 'USD/SVC' },
        { pid: '2246', name: 'USD/DKK' },
        { pid: '2245', name: 'USD/NOK' },
        { pid: '2244', name: 'USD/EGP' },
        { pid: '2243', name: 'USD/NGN' },
        { pid: '2242', name: 'USD/HKD' },
        { pid: '2241', name: 'USD/ILS' },
        { pid: '2240', name: 'USD/KRW' },
        { pid: '2239', name: 'USD/PHP' },
        { pid: '2238', name: 'USD/SGD' },
        { pid: '2237', name: 'USD/THB' },
        { pid: '2236', name: 'USD/TWD' },
        { pid: '2235', name: 'USD/AUD' },
        { pid: '2234', name: 'USD/NZD' },
        { pid: '2233', name: 'USD/CUP' },
        { pid: '2231', name: 'USD/PAB' },
        { pid: '2230', name: 'USD/MYR' }
    ],
    cryptos: [
        { pid: '945629', name: 'BTC/USD' },
        { pid: '1057391', name: 'ETH/USD' }
    ]
};

var pid_arr = [];

function buildTable(tableName, data) {
    var tableBody = $('#' + tableName + '-table');
    tableBody.empty();
    
    data.forEach(function(item) {
        pid_arr.push(item.pid);
        var row = '<tr class="pid-' + item.pid + '-line">' +
            '<td class="pid-' + item.pid + '-ativo">' + item.name + '</td>' +
            '<td class="pid-' + item.pid + '-percentil"><div class="demo-container"><div class="progress-bar progress-bar-value"></div></div></td>' +
            '<td class="pid-' + item.pid + '-pcp">0,00%</td>' +
            '<td class="pid-' + item.pid + '-last">0,00</td>' +
            '</tr>';
        tableBody.append(row);
    });

    summary.initSummary('#' + tableName + '-table', data);
}

$(document).ready(function() {
    $.each(tables, function(key, value) {
        buildTable(key, value);
    });
});
