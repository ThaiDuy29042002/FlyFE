var options = {
	series: [{
		name: 'Likes',
		data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 10]
	}],
	chart: {
		height: 350,
		type: 'line',
		toolbar: {
			show: false,
		}
	},
	grid: {
		show: false,
		padding: {
			left: 0,
			right: 0
		}
	},
	stroke: {
		width: 7,
		curve: 'smooth'
	},
	xaxis: {
		type: 'datetime',
		categories: ['1/1/2020', '2/1/2020', '3/1/2020', '4/1/2020', '5/1/2020', '6/1/2020', '7/1/2020', '8/1/2020', '9/1/2020', '10/1/2020', '11/1/2020', '12/1/2020'],
	},
	title: {
		text: 'Report by Month',
		align: 'left',
		style: {
			fontSize: "16px",
			color: '#666'
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'dark',
			gradientToColors: [ '#1b00ff'],
			shadeIntensity: 1,
			type: 'horizontal',
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100, 100, 100]
		},
	},
	markers: {
		size: 4,
		colors: ["#FFA41B"],
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7,
		}
	},
	yaxis: {
		min: -10,
		max: 40,
		title: {
			text: 'Value',
		},
	}
};
var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var options2 = {
	series: [{
		name: 'series1',
		data: [31, 40, 28, 51, 42, 109, 100]
	}, {
		name: 'series2',
		data: [11, 32, 45, 32, 34, 52, 41]
	}],
	chart: {
		height: 350,
		type: 'area',
		toolbar: {
			show: false,
		}
	},
	grid: {
		show: false,
		padding: {
			left: 0,
			right: 0
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth'
	},
	xaxis: {
		type: 'datetime',
		categories: ["2020-09-19T00:00:00.000Z", "2020-09-19T01:30:00.000Z", "2020-09-19T02:30:00.000Z", "2020-09-19T03:30:00.000Z", "2020-09-19T04:30:00.000Z", "2020-09-19T05:30:00.000Z", "2020-09-19T06:30:00.000Z"]
	},
	tooltip: {
		x: {
			format: 'dd/MM/yy HH:mm'
		},
	},
};
var chart = new ApexCharts(document.querySelector("#chart2"), options2);
chart.render();

var options3 = {
	series: [{
		name: 'Net Profit',
		data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
	}, {
		name: 'Revenue',
		data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
	}, {
		name: 'Free Cash Flow',
		data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
	}],
	chart: {
		type: 'bar',
		height: 350,
		toolbar: {
			show: false,
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '25%',
			endingShape: 'rounded'
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	xaxis: {
		categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
	},
	yaxis: {
		title: {
			text: '$(thousands)'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return "$" + val + "thousands"
			}
		}
	}
};
