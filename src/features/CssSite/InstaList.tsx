import insta01 from './img/insta01.jpg'
import insta02 from './img/insta02.jpg'
import insta03 from './img/insta03.jpg'
import insta04 from './img/insta04.jpg'
import insta05 from './img/insta05.jpg'
import insta06 from './img/insta06.jpg'
import insta07 from './img/insta07.jpg'
import insta08 from './img/insta08.jpg'

const InstaItem: React.FC<{ src: string; name: string }> = ({ src, name }) => {
  return (
    <li className="insta-item">
      <img src={src} alt={name} />
    </li>
  )
}

export const InstaList: React.FC = () => {
  return (
    <div className="insta">
      <p className="section-title">INSTAGRAM</p>
      <div className="instagram">
        <ul className="insta-list">
          <InstaItem src={insta01} name="" />
          <InstaItem src={insta02} name="" />
          <InstaItem src={insta03} name="" />
          <InstaItem src={insta04} name="" />
          <InstaItem src={insta05} name="" />
          <InstaItem src={insta06} name="" />
          <InstaItem src={insta07} name="" />
          <InstaItem src={insta08} name="" />
        </ul>
      </div>
      <div className="morebutton">more</div>
    </div>
  )
}
