document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('icon-button');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const outputContainer = document.getElementById('output-container');

    // 添加提示元素
    const taskInputWarning = document.createElement('div');
    taskInputWarning.style.color = 'red';
    taskInputWarning.style.display = 'none';
    taskInputWarning.textContent = 'Task cannot be empty!';
    taskInput.parentNode.insertBefore(taskInputWarning, taskInput.nextSibling);

    button.addEventListener('click', () => {
        let taskValue = taskInput.value.trim();  // 去除前後空格
        if (taskValue === '') {
            taskInputWarning.style.display = 'block';  // 顯示提示
            return;  // 阻止添加空白任務
        } else {
            taskInputWarning.style.display = 'none';  // 隱藏提示
        }

        const priorityValue = prioritySelect.value;

        const newBox = document.createElement('div');
        newBox.classList.add('output-box');

        newBox.innerHTML = `<h2>Task: ${taskValue}</h2><h3>Priority: ${priorityValue}</h3>`;
        outputContainer.appendChild(newBox);

        // 添加 hover 效果
        newBox.addEventListener('mouseover', () => {
            newBox.style.transform = 'scale(2.0)';
            newBox.style.filter = 'grayscale(0%)';
            newBox.style.animation = 'float 1.2s infinite alternate';
        });

        newBox.addEventListener('mouseout', () => {
            newBox.style.transform = 'scale(1)';
            newBox.style.filter = 'grayscale(100%)';
            newBox.style.animation = 'none';
        });

        // 添加點擊事件處理程序，點擊時執行飛出動畫並刪除 box
        newBox.addEventListener('click', () => {
            const directions = ['fly-out-up', 'fly-out-down', 'fly-out-left', 'fly-out-right'];
            const randomDirection = directions[Math.floor(Math.random() * directions.length)];
            const animationDuration = 4.0; // 可以在這裡設置動畫時間

            newBox.style.animation = `${randomDirection} ${animationDuration}s forwards`;
            setTimeout(() => {
                outputContainer.removeChild(newBox);
            }, animationDuration * 1000); // 等待動畫結束後刪除元素
        });
    });
});

