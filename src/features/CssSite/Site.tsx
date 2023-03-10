import { useEffect } from 'react'
import styled from 'styled-components'
import { STYLE } from './style'
import { RESET_STYLE } from './reset'
import { MenuTileList } from './MenuTile'
import { InstaList } from './InstaList'
import { EyeCatch } from './EyeCatch'
import $ from 'jquery'

const CssSiteWrapper = styled.div`
  ${RESET_STYLE};
  ${STYLE};
  position: relative;
  transform: translate(0px, 0px);
`
export const Site: React.FC = () => {
  useEffect(() => {
    $('.fade-img img:not(:first-child)').hide()

    const interval = setInterval(function () {
      $('.fade-img img:first-child')
        .fadeOut('slow')
        .next('img')
        .fadeIn('slow')
        .end()
        .appendTo('.fade-img')
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <CssSiteWrapper>
        <header className="header">
          <div className="header-bar">
            <div className="header-title">Antiqushop Oude dagen</div>
            <div>
              <ul className="header-menulist">
                <li className="menuitem current">Home</li>
                <li className="menuitem">AboutUs</li>
                <li className="menuitem">Online Store</li>
                <li className="menuitem">Contact</li>
              </ul>
            </div>
          </div>
        </header>

        <EyeCatch />

        <main className="main">
          <div className="shopinfo">
            <p className="section-title">Antiqueshop Oude dagen</p>
            <div className="shopinfo-text">
              <p>
                ヨーロッパを中心にちょっとお部屋に置きたくなるアンティークをそろえています。
              </p>
              <p>気になる商品がございましたらお気軽にお問い合わせください。</p>
            </div>
          </div>
          <div className="information">
            <div className="information-title">
              <p className="information-title">Information</p>
            </div>
            <div className="information-list">
              <div className="information-item">
                <p className="information-date">2018/08/01</p>
                <p className="information-text">
                  <a href="#">営業時間が変更になりました</a>
                </p>
              </div>
              <div className="information-item">
                <p className="information-date">2018/05/15</p>
                <p className="information-text">
                  <a href="#">新商品入荷のお知らせ</a>
                </p>
              </div>
              <div className="information-item">
                <p className="information-date">2018/04/01</p>
                <p className="information-text">
                  <a href="#">SHOPオープンのご挨拶</a>
                </p>
              </div>
            </div>
          </div>

          <MenuTileList />

          <InstaList />

          <div className="access">
            <p className="section-title">ACCESS</p>
            <div className="access-info">
              <iframe
                title="google_map"
                className="access-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.2072688593034!2d139.66505719368703!3d35.66188569151479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f36b9a296133%3A0x66c43a9f356d5e5d!2z5LiL5YyX5rKi6aeF!5e0!3m2!1sja!2sjp!4v1586594699073!5m2!1sja!2sjp"
                width="250"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
              <div className="access-text">
                <p>〒155-0031 東京都世田谷区北沢２丁目２４−２</p>
                <p>
                  <span>OPEN</span>
                  10:00～18:00
                </p>
                <p>
                  <span>TEL</span>
                  03-1234-5678
                </p>
                <p>
                  <span>Email</span>
                  anqique_oude_dagen@example.com
                </p>
              </div>
            </div>
          </div>

          <div className="sns">
            <ul className="sns-list">
              <li>
                <a href="#" className="sns-item fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="sns-item fa fa-facebook"></a>
              </li>
              <li>
                <a target="_blank" className="sns-item fa fa-instagram"></a>
              </li>
            </ul>
          </div>
        </main>

        <footer className="footer">
          <p className="footer-copyright">
            Antiqueshop Oude dagen Co.,Ltd 2018-2020
          </p>
        </footer>
      </CssSiteWrapper>
    </div>
  )
}
