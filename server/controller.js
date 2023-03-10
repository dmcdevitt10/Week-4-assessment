let database = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['Bide your time, for success is near.', 'Change is happening in your life, so go with the flow!', 'Everywhere you choose to go, friendly faces will greet you.', 'From now on your kindness will lead you to success.', 'Good news will be brought to you by mail.']

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    addGoal: (req, res) => {
        database.push(req.body)
        res.status(200).send(database)
        console.log(database)
    },
    changeStatus: (req, res) => {
        let goal = req.query.goal
        let index

        for(let i = 0; i < database.length; i++){
            let currentGoal = database[i].goal

            if(currentGoal === goal){
                index = i
            }
        }

        if(index === undefined){
            res.status(400).send('goal not found')
        }else{
            database[index].goal = goal + '(in progress)'
            res.status(200).send(database)
        }
    },
    deleteGoal: (req, res) => {
        let goal = req.query.goal
        let index

        for(let i = 0; i < database.length; i++){
            let currentGoal = database[i].goal

            if(currentGoal === goal || currentGoal === goal + '(in progress)'){
                index = i
            }
        }
        if(index === undefined){
            res.status(400).send('goal not found')
        }else{
            database.splice(index, 1)
            res.status(200).send(database)
        }
    }

}