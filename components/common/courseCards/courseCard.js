import Link from "next/link";
import { db } from "../../../config/firebase";
import { useRouter } from "next/router"

export const Coursecard = ({
  leftColor, rightColor, duration, name, placesLeft,
  timeStart, timeEnd, price, lessonsDay, start, id, btn, logo }) => {
  const router = useRouter()
  const idcourse = `courses/${id}`
  const deleteData = () => {
    let res = confirm("Вы уверены?")
    if (res) {
      db.collection("courses").doc(id).delete()
      router.push("/admin/courses")
    }
  }
  
  return (
    <div className="courses-card-wrapper">
      {btn && <div onClick={deleteData} className="delete-btn">
        <svg
          className="ham hamRotate ham4 active"
          viewBox="0 0 100 100"
          width="50"
        >
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          ></path>
          <path className="line middle" d="m 70,50 h -40"></path>
          <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          ></path>
        </svg>
      </div>}
      <div className="cousers--card">
        <div style={{
          background: `linear-gradient(153.43deg, ${leftColor || "#ffe814"}, ${rightColor || "#e51686"} 83.33%)`
        }} className="card--preview">
          <i className={`fab ${logo.lang}`}></i>
          <div className="card--title">{name}<br /> </div>
          <div className="card--title card-sub-title">{price} сом/мес.</div>
        </div>
        <div className="card--description">
          <div className="description">
            <strong>Длительность: </strong>
            <p>{duration} месяцев</p>
          </div>
          <div className="description">
            <strong>Дата запуска: </strong>
            <p>{start} октября</p>
          </div>
          <div className="description">
            <strong>Дни уроков: </strong>
            <p>{lessonsDay}</p>
          </div>
          <div className="description">
            <strong>Время уроков: </strong>
            <p>{timeStart} - {timeEnd}</p>
          </div>
          <div className="description">
            <strong>Осталось: </strong>
            <p>{placesLeft} мест</p>
          </div>
        </div>
        <div className="card--more">
          {
            id 
            ? <Link href={idcourse}>
              <a className="btn btn-blue animate-y">{btn ? "Изменить" : "Подробнее"}</a>
            </Link>
            : <a className="btn btn-blue animate-y">{btn ? "Изменить" : "Подробнее"}</a>
          }
        </div>
      </div>
    </div>
  );
}

