
export const Timelineleft = ({ des, title, img }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="duration date-label-left">
          <img src={img} alt="Intranet" className="img-fluid" />
        </div>
      </div>  
      <div className="col-md-6">
        <div className="works works-description-left">
          <h3>{title}</h3>
          <p className="web-cta-desc mx-auto text-muted">{des}</p>
        </div>
      </div>
    </>
  )
}