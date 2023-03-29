// Categories Links 
$('.link').click(function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('open');
  $(this).parent().siblings().removeClass('open');
});


$('document').ready(function() {
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active');
    $('.navigation').toggleClass('active')
  });
});

$('document').ready(function() {
  $('.navigation').click(function() {
  });
});
/*

// Accrodian Menu 

$(function(){
  var Accrodian = function(el, multiple){
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.find('.link');
    links.on('click',{el: this.el, multiple: this.multiple},this.dropdown);
    Accrodian.prototype.dropdown = function(e){
      var $el = e.data.el;
      $this = $(this);
      $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('open');
      console.log($this.parent());
    
      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      }
    }
    
  }
  var accrodian = new Accrodian($('#accrodian'),false);
});

*/





// Chat Js First Chat JavaScript
/*
Type to search
Chart.js
Introduction
Getting Started
Installation
Integration
Usage
General
Accessibility
Responsive
Pixel Ratio
Interactions
Events
Modes
Options
Colors
Fonts
Performance
Configuration
Animations
Layout
Legend
Title
Tooltip
Elements
Charts
Line
Bar
Radar
Doughnut & Pie
Polar Area
Bubble
Scatter
Area
Mixed
Axes
Cartesian
Category
Linear
Logarithmic
Time
Radial
Linear
Labelling
Styling
Developers
Chart.js API
Updating Charts
Plugins
New Charts
New Axes
Contributing
Additional Notes
Comparison Table
Popular Extensions
License
Published with GitBook
Chart.js
slack

Installation
You can download the latest version of Chart.js from the GitHub releases or use a Chart.js CDN. Detailed installation instructions can be found on the installation page.

Creating a Chart
It's easy to get started with Chart.js. All that's required is the script included in your page along with a single <canvas> node to render the chart.

In this example, we create a bar chart for a single dataset and render that in our


*/

var ctx1 = document.getElementById('eChart1').getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Mens', 'Womens', 'Electricals', 'Food', 'Furniture', 'Jewlery'],
    datasets: [{
      label: 'Category Sales',
      data: [12, 17, 3, 15, 10, 5],
      backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
      borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
      borderWidth: 1
        }]
  },
  options: {
    scales: {
      disable: 'true'
    },
    title: {
      fontSize: 25
    },
    legend: {

      disable: 'true',
      labels: {
        fontColor: '#d3d3d3'
      }
    },
    layout: {
      padding: {
        top: '3px',
        bottom: '3px'
      }
    }
  }
});




var ctx2 = document.getElementById('eChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'doughnut',

  data: {
    labels: ['T-Shirts', 'Traks', 'Casulas', 'Watchs'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5],
      backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
      borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
      borderWidth: 1
        }]
  },
  options: {
    scales: {
      disable: 'true'
    },
    title: {
      fontSize: 25
    },
    legend: {
      position: 'bottom',
      labels: {
        fontColor: '#d3d3d3'
      }
    },
    layout: {
      padding: {
        top: '3px',
        bottom: '3px'
      }
    }
  }
});