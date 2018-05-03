const inquirer = require('inquirer');
const {types}=require('./values');





  const questions=[
                 {name:'fee',type:'list',message:'select a fee type',choices:["Exam Fee","Application Fee"]}
  ]
  const q1=[{name:"nationality",type:"list",message:"select a nationality for exam fee",choices:["INDIAN","FOREIGN","NRI","SAARC"]}]
  const q2=[{name:"nationality1",type:"list",message:"select a nationality for application fee",choices:["INDIAN","FOREIGN"]}]

  const q4=[{name:"allcourses",type:"list",message:"select course ",choices:["ALL_COURSES"]}]
  const q5=[{name:"alllevel",type:"list",message:"select level ",choices:["ALL_LEVELS"]}]
  //for application fee
  const q3=[{name:"courses",type:"list",message:"select course category under all_courses",choices:["UG","UG-DIPLOMA","PG"]}]

  var x =types[0]["Application Fee"].INDIAN["ALL_COURSES​"]["UG-DIPLOMA"];
  // console.log()
  const amount1=[{name:'amount',type:'any',message:`amount is ${types[0].Exam_Fee.INDIAN["ALL_COURSES​"]["ALL_LEVEL​"].amount}`}]
  // console.log(amount1)
  const amount2=[{name:'amount',type:'any',message:`amount is ${types[0].Exam_Fee.FOREIGN["ALL_COURSES​"]["ALL_LEVEL​"].amount}`}]
  const amount3=[{name:'amount',type:'any',message:`amount is ${types[0].Exam_Fee.NRI["ALL_COURSES​"]["ALL_LEVEL​"].amount}`}]
  const amount4=[{name:'amount',type:'any',message:`amount is ${types[0].Exam_Fee.SAARC["ALL_COURSES​"]["ALL_LEVEL​"].amount}`}]
  
  const amountUG=[{name:'amount',type:'any',message:`amount is ${types[0]["Application Fee"].INDIAN["ALL_COURSES​"].UG.amount}`}]
  // console.log(amountUG)
  const amountUGDIPLOMA=[{name:'amount',type:'any',message:`amount is ${types[0]["Application Fee"].INDIAN["ALL_COURSES​"]["UG-DIPLOMA"].amount}`}]
  const amountPG=[{name:'amount',type:'any',message:`amount is ${types[0]["Application Fee"].INDIAN["ALL_COURSES​"].PG.amount}`}]
  const amountUG1=[{name:'amount',type:'any',message:`amount is ${types[0]["Application Fee"].INDIAN["ALL_COURSES​"].UG.amount}`}]
  const amountUGDIPLOMA1=[{name:'amount',type:'any',message:`amount is ${types[0]["Application Fee"].FOREIGN["ALL_COURSES​"]["UG-DIPLOMA"].amount}`}]
  const amountPG1=[{name:'amount',type:'any',message:`amount is ${types[0]["Application Fee"].FOREIGN["ALL_COURSES​"].PG.amount}`}]
  // console.log(types[0].Exam_Fee.INDIAN["ALL_COURSES​"]["ALL_LEVEL​"].amount)
  var exam=questions[0].choices[0];
  var application=questions[0].choices[1];
  
  inquirer.prompt(questions).then((answers)=>{
    
      if(answers.fee=="Exam Fee"){
       return inquirer.prompt(q4).then(()=>{
        return inquirer.prompt(q1).then((answers)=>{
          if(answers.nationality=="FOREIGN"){
            return inquirer.prompt(amount2)
          }
          if(answers.nationality=="INDIAN"){
            return inquirer.prompt(amount1)
          }
          if(answers.nationality=="NRI"){
            return inquirer.prompt(amount3)
          }
          if(answers.nationality=="SAARC"){
            return inquirer.prompt(amount4)
          }
        })
       })
        
      }
      else{
        return inquirer.prompt(q2).then((answers)=>{
          if(answers.nationality1=="INDIAN"){
            return inquirer.prompt(q5).then(()=>{
              return inquirer.prompt(q3).then((answers)=>{
                if(answers.courses=="UG"){
                  return inquirer.prompt(amountUG)
                }
                if(answers.courses=="UG-DIPLOMA"){
                  return inquirer.prompt(amountUGDIPLOMA)
                }
                if(answers.courses=="PG"){
                  return inquirer.prompt(amountPG)
                }
              })
            })
          }
          if(answers.nationality1=="FOREIGN"){
            return inquirer.prompt(q5).then(()=>{
              return inquirer.prompt(q3).then((answers)=>{
                if(answers.courses=="UG"){
                  return inquirer.prompt(amountUG1)
                }
                if(answers.courses=="UG-DIPLOMA"){
                  return inquirer.prompt(amountUGDIPLOMA1)
                }
                if(answers.courses=="PG"){
                  return inquirer.prompt(amountPG1)
                }
              })
            })
            
          }
          
      })
    }
  })

  