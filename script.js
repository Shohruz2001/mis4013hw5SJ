// Function 1: Display a Chart using ECharts
function displayChart() {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option = {
        title: {
            text: 'Sample ECharts Data'
        },
        tooltip: {},
        xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
            {
                type: 'bar',
                data: [5, 20, 36, 10, 10]
            }
        ]
    };
    myChart.setOption(option);
}
displayChart();

// Function 2: Form Validation
function validateForm() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('formMessage');
    if (email.includes('@')) {
        message.textContent = 'Valid email!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Please enter a valid email.';
        message.style.color = 'red';
    }
}

// Function 3: Dynamic Content Loading
function loadContent() {
    const contentDiv = document.getElementById('content');
    const newContent = document.createElement('p');
    newContent.textContent = 'This is dynamically loaded content!';
    contentDiv.appendChild(newContent);
}

// Function 4: Image Carousel
let currentImageIndex = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('carouselImage').src = images[currentImageIndex];
}

// Function 5: Toggle Theme
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
}
document.body.classList.add('light'); // Set default theme to light
