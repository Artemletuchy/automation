let averageGrade = 100;

if (averageGrade < 60 ){
  console.log("Unsatisfactorily")
}
else if (averageGrade >= 60 && averageGrade <= 70 ){
  console.log("Satisfactorily")
}
else if (averageGrade >= 71 && averageGrade <= 80 ){
  console.log("Done")
}
else if (averageGrade >= 81 && averageGrade <= 90 ){
  console.log("Very well")
}
else if (averageGrade >= 91 && averageGrade <= 100 ){
  console.log("Perfect")
}
else console.log("Anyone")



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