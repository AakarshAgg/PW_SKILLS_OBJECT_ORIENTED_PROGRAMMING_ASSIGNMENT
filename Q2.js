class Student{
    constructor(name,email) {
        this.name=name;
        this.email=email;
        this.enrolledCourses=[]
    }
 
    showCourses(){
    console.log(`${this.name}'s enrolled courses:`),this.enrolledCourses.forEach((course)=>console.log(course))}
    }

class Admission{
  constructor(){
    this.enrolledStudents=[]
  }
  enrollStudent(obj){
    this.enrolledStudents.push(obj)
    console.log(`${obj.name} has been enrolled `)
        }

  assignCourse(obj,course){
    obj.enrolledCourses.push(course)
  console.log(`${obj.name} has been enrolled in ${course}`)
  }

  showEnrolledStudents(){
   console.log("Enrolled Students:")
   this.enrolledStudents.forEach((student)=>{
    console.log(`${student.name}(${student.email})`)
   })
  }
}

const admissionOffice = new Admission()

const student1= new Student("Mithun","mithun@pw.live")
const student2= new Student("Farman","farman@pw.live")

admissionOffice.enrollStudent(student1)
admissionOffice.enrollStudent(student2)

admissionOffice.assignCourse(student1,"Full stack Web Debelopment")
admissionOffice.assignCourse(student2,"Data Science Masters")

student1.showCourses()
student2.showCourses()

admissionOffice.showEnrolledStudents()