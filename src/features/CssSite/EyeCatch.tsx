import eyecatch01 from './img/eyecatch01.jpg'
import eyecatch02 from './img/eyecatch02.jpg'
import eyecatch03 from './img/eyecatch03.jpg'
import eyecatch04 from './img/eyecatch04.jpg'

export const EyeCatch: React.FC = () => {
  return (
    <>
      <div id="fade-img" className="eyecatch inner fade-img">
        <img src={eyecatch01} alt="" />
        <img src={eyecatch02} alt="" />
        <img src={eyecatch03} alt="" />
        <img src={eyecatch04} alt="" />
      </div>
    </>
  )
}
