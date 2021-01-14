import { addNewTask, updateTask } from './server';

(async function severSpec() {
    await addNewTask({
        name: "New task",
        id: "12346"
    });
    await updateTask ({
        id: "12346",
        name: "NEWER task"
    })
})();
