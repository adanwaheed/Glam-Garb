document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });

    // Product categories chart
    const ctx1 = document.getElementById('productCategoriesChart').getContext('2d');
    new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['Boys Category', 'Girls Category', 'Childrens Category', 'Overall Progress'],
            datasets: [{
                data: [25, 20, 20, 25],
                backgroundColor: ['#FF5722', '#FFC107', '#4CAF50', '#6A1B9A']
            }]
        }
    });

    // Product visits chart
    const ctx2 = document.getElementById('productVisitsChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Visits',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: 'rgba(106, 27, 154, 0.2)',
                borderColor: '#6A1B9A',
                borderWidth: 1,
                pointBackgroundColor: '#FF5722'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
