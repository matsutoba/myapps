import produce01 from './img/product01.jpg'
import produce02 from './img/product02.jpg'
import produce03 from './img/product03.jpg'

const MenuTile: React.FC<{ src: string; name: string }> = ({ src, name }) => {
  return (
    <li className="products-item">
      <img src={src} alt={name} />
      <p className="products-button">{name}</p>
    </li>
  )
}

export const MenuTileList: React.FC = () => {
  return (
    <div className="products inner">
      <ul className="products-list">
        <MenuTile src={produce01} name="Clock" />
        <MenuTile src={produce02} name="Light" />
        <MenuTile src={produce03} name="Book" />
      </ul>
    </div>
  )
}
