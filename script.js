document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // 阻止表單跳轉
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                message.classList.remove("hidden");
                form.reset(); // 清空表單
            } else {
                message.textContent = "Oops! Something went wrong.";
                message.classList.remove("hidden");
                message.style.color = "red";
            }
        }).catch(error => {
            message.textContent = "Oops! Something went wrong.";
            message.classList.remove("hidden");
            message.style.color = "red";
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typing-effect");
    const textArray = ["AI Engineer", "Machine Learning Enthusiast", "Software Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // 控制打字和刪除速度
    const typingSpeed = 150;  // 每個字母的打字速度 (ms)
    const deletingSpeed = 100; // 每個字母的刪除速度 (ms)
    const pauseBeforeDelete = 2000; // 停留時間 (2秒)

    function typeEffect() {
        let currentText = textArray[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex--);
        } else {
            textElement.textContent = currentText.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentText.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, pauseBeforeDelete); // 等待 2 秒後開始刪除
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, typingSpeed); // 等待 150ms 再開始打下一個
        } else {
            setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() { // 確保 DOM 加載完成
        const canvas = document.getElementById("businessChart");

        if (!canvas) {
            console.error("Canvas element not found!");
            return;
        }

        const ctx = canvas.getContext("2d");

        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Predictive Analytics", "Automation", "Customer Insights", "Risk Management", "Market Analysis"],
                datasets: [{
                    data: [30, 20, 25, 15, 10],
                    backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#17a2b8"]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }
        });
    }, 500); // 延遲 0.5 秒，確保 DOM 已完全載入
});
