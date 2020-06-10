$('#start').click(function () {
    funky = setInterval(function () {
        getChart();
    }, 3000);
    $('#chartContainer').show();
});

$('#stop').click(function () {
    clearInterval(funky);
    $('#chartContainer').hide();
});

//For Creating object of Chart with the customized options
var chart = new CanvasJS.Chart("chartContainer", {

    background: "#fbf9fa",
    animationEnabled: true,
    animationDuration: 3000,
    zoomEnabled: true,
    exportEnabled: true,
    zoomType: "xy",
    title: {
        text: "Optical Spectrum Analyzer"
    },
    axisX: {
        title: "Wavelength(M)",
        valueFormatString: "#.000 e+0",
    },
    axisY: {
        title: "Signal(DBM)",
        includeZero: false,
    },
    data: [{
        type: "line",
        dataPoints: []
    }]
});

//Fetch the data from API and Inject into Chart as datapoints
var getChart = function () {
    var requests = $.get('/start');
    var tm = requests.done(function (result) {
        chart.options.data[0].dataPoints = [];
        var xVal = result[0];
        var yVal = result[1];
        for (var i = 0; i < xVal.length; i = i + 10) {
            chart.options.data[0].dataPoints.push({
                x: xVal[i],
                y: yVal[i]
            })
        }
        chart.render();

    });
}

$("#submitButton").on("click", function () {
    var form = $("#traceForm");
    var url = form.attr('action');
    var min = $("#minLimit").val();
    var max = $("#maxLimit").val();
    $.ajax({
        type: "GET",
        dataType: "json",
        data: {
            'minLimit': min,
            'maxLimit': max
        },
        url: url,
        success: function (data) {
            console.log(data);
            var singleChart = new CanvasJS.Chart("singleChart", {
                background: "#fbf9fa",
                animationEnabled: true,
                animationDuration: 3000,
                zoomEnabled: true,
                exportEnabled: true,
                zoomType: "xy",
                title: {
                    text: "Optical Spectrum Analyzer"
                },
                axisX: {
                    title: "Wavelength(M)",
                    valueFormatString: "#.000 e+0",
                },
                axisY: {
                    title: "Signal(DBM)",
                    includeZero: false,
                },
                data: [{
                    type: "line",
                    dataPoints: []
                }]
            });

            var xVal = data['xdata'];
            var yVal = data['ydata'];
            for (var i = 0; i < xVal.length; i = i + 2) {
                singleChart.options.data[0].dataPoints.push({
                    x: xVal[i],
                    y: yVal[i]
                })
            }
            singleChart.render();


            $('#singleChart').show();
        }
    });
});


$('#singleTrace').on("click", function () {
    var singleChart = new CanvasJS.Chart("singleChart", {
        background: "#fbf9fa",
        animationEnabled: true,
        animationDuration: 3000,
        zoomEnabled: true,
        exportEnabled: true,
        zoomType: "xy",
        title: {
            text: "Optical Spectrum Analyzer"
        },
        axisX: {
            title: "Wavelength(M)",
            valueFormatString: "#.000 e+0",
        },
        axisY: {
            title: "Signal(DBM)",
            includeZero: false,
        },
        data: [{
            type: "line",
            dataPoints: []
        }]
    });

    var requests = $.get('/start');
    var t = requests.done(function (res) {
        var xVal = res[0];
        var yVal = res[1];
        for (var i = 0; i < xVal.length; i = i + 10) {
            singleChart.options.data[0].dataPoints.push({
                x: xVal[i],
                y: yVal[i]
            })
        }
        singleChart.render();

    });
    $('#singleChart').show();
});