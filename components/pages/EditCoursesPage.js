import { Coursecard } from "../common/courseCards/courseCard";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { useStateIfMounted } from "use-state-if-mounted";
import {useRouter} from "next/router"
import Link from "next/link"
export default function EditCoursesPage() {
  const router = useRouter()
  const id = router.query.id
  const [course, setCourses] = useStateIfMounted([]);
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    db.collection("courses")
      .get()
      .then((snapshot) => {
        const courses = [];
        snapshot.forEach((doc) => {
          courses.push({ ...doc.data(), id: doc.id });
        });
        setCourses(courses);
      });
  }, []);
  useEffect(()=>{
    if(router.pathname === "/admin/courses"){
      setBtn(true)
    }
  },[])
  
  return (
    <div className="courseWrapper">
      <div className="editCourse-title-wrapper new-courses-btn cousers__cards--container">
        <div className="cousers--card edit-course-card"></div>
        <div className="cousers--card edit-course-card">
          <div className="card--title card-sub-title cursor">All Courses</div>
        </div>
        <div className="cousers--card edit-course-card btn-wrapper">
          <div className="card--more new-courses-btn">
            <Link href="/admin/courses/new-course">
              <a className="btn btn-blue  animate-y ">New Course</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="cousers__cards--container">
        {course.map((item) => (
          <Coursecard
            {...item}
            key={item.id}
            leftColor={item.leftColor}
            rightColor={item.rightColor}
            btn={btn}
            
          />
        ))}
      </div>
    </div>
  );
}
