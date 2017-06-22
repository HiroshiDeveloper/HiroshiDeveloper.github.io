var width = $(window).width();
var size;

if (width >= 768)
{
	size = 8;
}
else if (width > 480 && width < 768)
{
	size = 6;
}else
{
	size = 6;
}
		
var chart = AmCharts.makeChart( "chartdiv", {
	"type": "radar",	
	"theme": "light",
	"fontSize" : size,
	"dataProvider": [
		{
		    "country": "AWS",
		    "litres": 100
	    }, {
		    "country": "HTML",
		    "litres": 100
	    }, {
		    "country": "CSS",
		    "litres": 100
	    },{
		    "country": "javascript",
		    "litres": 100
	    },{
		    "country": "C",
		    "litres": 100
		},{
		    "country": "C++",
		    "litres": 50
		},{
		    "country": "C#",
		    "litres": 40
		},{
		    "country": "Wordpress",
		    "litres": 100
	    },{
		    "country": "Illustrator\nPhotoshop",
		    "litres": 80
	    },{
		    "country": "ObjectiveC",
		    "litres": 70
		},{
		    "country": "Java\nAndroid",
		    "litres": 70
		},{
		    "country": "PHP",
		    "litres": 100
		},{
		    "country": "Python",
		    "litres": 100
		},{
		    "country": "MySQL\nPostgress",
		    "litres": 100
		} ],
	"valueAxes": [ {
		    "axisTitleOffset": 20,
		    "minimum": 0,
		    "maximum": 100,
		    "axisAlpha": 0.15
	  	} ],
	"startDuration": 2,
	"graphs": [ {
	    	"balloonText": "[[value]] ",
	    	"bullet": "round",
	    	"fillAlphas": 0.3,
	    	"valueField": "litres",
	    	"fillColors": "#8F8F8F",
	    	"lineColor": "#8F8F8F",
	  	} ],
	"categoryField": "country",
	"export": {
	    	"enabled": true
	  	}
} );