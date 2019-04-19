function solve (examPoints, homeworkCompleted, totalHomework) {
    let percentExam = examPoints * 100 / 400;
    let totalPoints = percentExam * 90 / 100;
    let maxPoints = 100;
    let grade = calculcateGrade();

    if(grade < 3){
        grade = 2;
    } else if (grade > 6) {
        grade = 6;
    }
    console.log(grade.toFixed(2));
    

    function calculcateGrade(){
        if(examPoints === 400){
            return 6;
        }else {
            if(homeworkCompleted === totalHomework) {
                totalPoints += 10;
            } else {
                let percHomeWorkComplete = homeworkCompleted * 100 / totalHomework;
                let bounus = percHomeWorkComplete / 10;
                totalPoints += bounus;
            }

            return 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2)
         } 
        
        
        
    } 
}

solve(325, 0, 5);