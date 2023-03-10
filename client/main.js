const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById('fortuneButton')

const goalForm = document.getElementById('goal-form')
const goalInput = document.getElementById('goalInput')
const goalList = document.getElementById('goalList')

const progressForm = document.getElementById('progress-goal-form')
const progressInput = document.getElementById('progress-goal-input')

const deleteForm = document.getElementById('delete-goal-form')
const deleteInput = document.getElementById('delete-goal-input')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

function getFortune(){
    axios.get("http://localhost:4000/fortune").then((res) => {
        alert(res.data)
    })
}

function addGoalToList(event){
    event.preventDefault()
    
    goalList.innerHTML = ''

    axios.post('http://localhost:4000/goal', {goal: goalInput.value}).then((res) => {
        console.log(res.data)
        res.data.forEach((goalObj) => {
            let newGoal = document.createElement('li')
            newGoal.innerHTML = goalObj.goal
            goalList.appendChild(newGoal)
        })
        goalInput.value = ''
        
    }).catch(err => console.log('problem adding'))
}

function changeGoal(event){
    event.preventDefault()
    let goal = progressInput.value

    axios.put('http://localhost:4000/progress?goal=' + goal).then((res) => {
        goalList.innerHTML = ''
        res.data.forEach((goalObj) => {
            let updatedGoal = document.createElement('li')
            updatedGoal.innerHTML = goalObj.goal
            goalList.appendChild(updatedGoal)
        })
        progressInput.value = ''
    })
}

function completeGoal(event){
    event.preventDefault()
    let goal = deleteInput.value

    axios.delete('http://localhost:4000/delete?goal=' + goal).then((res) => {
        goalList.innerHTML = ''
        res.data.forEach((goalObj) => {
            let updatedGoal = document.createElement('li')
            updatedGoal.innerHTML = goalObj.goal
            goalList.appendChild(updatedGoal)
        })
        progressInput.value = ''
    })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
goalForm.addEventListener('submit', addGoalToList)
progressForm.addEventListener('submit', changeGoal)
deleteForm.addEventListener('submit', completeGoal)

