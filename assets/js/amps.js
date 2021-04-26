var chart;

function requestdata() {
    var requests = $.get('/current_data');
    var tm = requests.done(function(result) {
        var series = chart.series[0],
            shift = series.data.length > 20;
        char.series[0].addpoint(result, true, shift);

        setTimeout(requestData, 2000);
    });
}
$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'data-container',
            defaultSeriesType: 'spline',
            events: {
                load: requestData
            }
        },
        title: {
            text: 'live Amps Data'
        },
        xAxis: {
            type: 'DateTime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxpadding: 0.2,
            tittle: {
                text: 'live Amps Data',
                margin: 80
            }
        },
        series: [{
            name: 'Random data',
            data: []
        }]
    });
});