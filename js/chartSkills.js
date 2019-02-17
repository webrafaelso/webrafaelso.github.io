
// alert("Javascript is working!");


var ctx = document.getElementById("myChart");
Chart.defaults.scale.ticks.beginAtZero=true;
Chart.defaults.global.legend.display = false;


    var myChart = new Chart(ctx, {
    type: 'radar',
    data:{ 
            labels: ["Responsive UI","Website Design","Image Editing","Web Animation","Database Management","Computer Literate"],
            datasets:[{
                label: 'General Skills Describution',
                data: [80,85,85,80,70,100],
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                borderWidth: 1,
               
                },
            ]
    },
  
      options: {
        responsive: true,
        pointDot:false,
        scaleOverride: true,
        scaleSteps: 4,
        scaleStepWidth: 5,
        scaleStartValue: 0,
        responsive: true,
        maintainAspectRatio:false,
        scale: {
            ticks: {
                 callback: function() {return ""},
                 backdropColor: "rgba(0, 0, 0, 0)"
             }
         }
        
       
        // legend: {
        //     display: false
        // },
      
    }
});
