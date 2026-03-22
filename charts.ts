declare var Chart: any;

const canvas = document.getElementById("myChart")! as HTMLCanvasElement;  // Revenue chart
const ctx = canvas.getContext("2d");

const taskCanvas = document.getElementById("myChart2")! as HTMLCanvasElement;   // Doughnut chart
const taskCtx = taskCanvas.getContext("2d");                

// Revenue chart
const gradient = ctx!.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(54,162,235,0.4)");     // Gradient fill
gradient.addColorStop(1, "rgba(54,162,235,0)");

let v = new Chart(ctx!, {
  type: "line",

  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],

    datasets: [
      {
        label: "Revenue",
        data: [500, 900, 1500, 3500, 5420],

        borderColor: "#2A7BE4",
        backgroundColor: gradient,

        tension: 0.4,     // smooth curve
        fill: true,

        pointRadius: 5,
        pointBackgroundColor: "#2A7BE4"
      }
    ]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        display: false
      }
    },

    scales: {
        x: {
            grid: {
                display: false
            }
        },

        y: {
        beginAtZero: true
      }
    }
  }
});

// doughnut chart
const centerText = {
  id: "centerText",

  beforeDraw(chart: any) {

    const ctx = chart.ctx;          // ceter plugin of text

    ctx.font = "35px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";

    ctx.fillText("23 Tasks", chart.width / 2, chart.height / 2);
  }
};


new Chart(taskCtx!, {
  type: "doughnut",

  data: {
    labels: ["Completed", "Pending"],

    datasets: [
      {
        label: "Tasks",

        data: [23, 8], // completed , pending

        backgroundColor: [
          "#6C5CE7", // purple
          "#F39C12"  // orange
        ],

        borderWidth: 0
      }
    ]
  },

  plugins: [centerText],

  options: {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom"
      }
    },

    cutout: "70%" // makes it look like modern donut chart
  }
});

/// revenue chart buttons
let revChartBtns = document.querySelectorAll(".pd");
interface chartI {
  labels: string[];
  data: number[];
}

// weekly chart update
let weekly:chartI = {labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun],
              data: [200,300,450,400,600,1000,1230],

};

revChartBtns[0]!.addEventListener('click', (): void => {
  revChartBtns[0]!.classList.add("buttonColor");
  revChartBtns[1]!.classList.remove("buttonColor");
  revChartBtns[2]!.classList.remove("buttonColor");

  v.data.labels = weekly.labels;
  v.data.datasets[0].data = weekly.data;
  v.update();
  return;
});

//Monthly chart update
let monthly:chartI = {
  labels: ["Jan", "Feb", "Mar"],
              data: [3200,7800,7600],
};

revChartBtns[1]!.addEventListener('click', (): void => {
  revChartBtns[1]!.classList.add("buttonColor");
  revChartBtns[0]!.classList.remove("buttonColor");
  revChartBtns[2]!.classList.remove("buttonColor");

  v.data.labels = monthly.labels;
  v.data.datasets[0].data = monthly.data;
  v.update();
  return;
});

//Yearly chart update
let yearly:chartI = {
              labels: ["2022", "2023", "2024", "2025", "2026"],
              data: [400,3500,6600,7800,8160],
}

revChartBtns[2]!.addEventListener('click', (): void => {
  revChartBtns[2]!.classList.add("buttonColor");
  revChartBtns[1]!.classList.remove("buttonColor");
  revChartBtns[0]!.classList.remove("buttonColor");

  v.data.labels = yearly.labels;
  v.data.datasets[0].data = yearly.data;
  v.update();
  return;
});

// When page loads charts refresh and sets to weekly
(function loadChart(): void {
  v.data.labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun];
  v.data.datasets[0].data = [200,300,450,400,600,1000,1230];
  v.update();

  revChartBtns[0]!.classList.add("buttonColor");
  revChartBtns[1]!.classList.remove("buttonColor");
  revChartBtns[2]!.classList.remove("buttonColor");
  return;
}) ();

// Done and Dusted
