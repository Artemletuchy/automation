let averageGrade = 55;

switch(true){


  case averageGrade < 60:
    console.log("Unsatisfactorily")
  break

  case averageGrade >= 60 && averageGrade <= 70:
    console.log("Satisfactorily")
  break

  case averageGrade >= 71 && averageGrade <= 80 :
    console.log("Done")

  break

  case averageGrade >= 81 && averageGrade <= 90 :
    console.log("Very well")
  
  break

  case averageGrade >= 91 && averageGrade <= 100 :
    console.log("Perfect")
  
  break

  default : console.log("Anyone")

}