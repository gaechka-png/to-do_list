document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length === 0) {
        alert("пожалуйста, введите дело")
    } else {
        document.querySelector('#tasks').innerHTML
            += `
        <div class="task">
            <span id="taskname">
            ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
               <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
        let currentTasks = document.querySelectorAll(".delete");
        for (let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        let task = document.querySelectorAll('.task')
        for (let i = 0; i<task.length; i++ ){
            task[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";

    }

}