# TrackDeck – Admin Dashboard

A simple Admin Dashboard project built using **HTML, CSS, TypeScript, and Chart.js**.
This project was created to practice building a modern dashboard interface and implementing interactive charts using TypeScript.

The dashboard displays analytics data such as **revenue growth, user statistics, notifications, and task completion**.

---

# Demo Login

To access the dashboard, use the following credentials:

**Email**

```
jashjeet99@gmail.com
```

**Password**

```
000
```

After entering these credentials on the login page, the user will be redirected to the dashboard.

This login system is only for demonstration purposes and does not use a backend authentication system.

---

# Dashboard Features

## 1. Statistics Cards

At the top of the dashboard there are statistic cards that display important information:

- Total Users
- Revenue
- Notifications
- Tasks Completed

These cards give a quick overview of the system activity.

---

## 2. Revenue Analytics Chart

The dashboard includes a **Revenue Analytics Line Chart** created using Chart.js.

Features of the revenue chart:

- Smooth curved line chart
- Gradient background
- Weekly / Monthly / Yearly filters
- Dynamic chart updates

When a user clicks on **Weekly, Monthly, or Yearly**, the chart updates using TypeScript.

Example logic used in the project:

```
v.data.labels = weekly.labels
v.data.datasets[0].data = weekly.data
v.update()
```

This updates the chart instantly without reloading the page.

---

## 3. Task Completion Chart

The dashboard also contains a **Doughnut Chart** that shows task progress.

Features:

- Completed vs Pending tasks
- Modern donut chart style
- Custom center text plugin
- Legend displayed at the bottom

A custom plugin is used to display the number of tasks inside the chart.

Example structure:

```
const centerText = {
  id: "centerText",
  beforeDraw(chart) {
    const ctx = chart.ctx
    ctx.fillText("23 Tasks", chart.width / 2, chart.height / 2)
  }
}
```

---

# Technologies Used

This project was built using:

- HTML5
- CSS3
- TypeScript
- Chart.js
- Font Awesome
- Google Fonts

---

# Project Structure

```
Login/
│
├── index.html
├── dashboard.html
│
├── dashboard.css
├── login.css
│
├── dashboard.ts
├── login.ts
├── charts.ts
│
├── dashboard.js
├── login.js
├── charts.js
│
├── logo.png
├── pic.jpg
│
├── tsconfig.json
├── package.json
└── README.md
```

---

# What I Learned

While building this project I learned:

- How to create a dashboard layout
- How to use Chart.js for data visualization
- Creating custom Chart.js plugins
- Updating charts dynamically using TypeScript
- Managing UI interactions with JavaScript
- Structuring frontend projects

---

# Future Improvements

Possible improvements for this project:

- Connect dashboard with real API data
- Improve mobile responsiveness
- Add more charts and analytics
- Add dark mode support
- Implement real authentication system

---

# Author

**Jashjeet Singh**

B.Tech CSBS – 1st Year  
Gyan Ganga Institute of Technology and Sciences

---

# License

This project is open source and available under the MIT License.
