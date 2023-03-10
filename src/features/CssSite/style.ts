export const STYLE = `
@charset "utf-8";
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);

/* ---------------------------------
   Common 
------------------------------------ */
@font-face {
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  src: local('Noto Sans CJK JP'),
    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff2)
      format('woff2'),
    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff)
      format('woff'),
    url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.otf)
      format('opentype');
}

html {
  font-size: 62.5%;
}

body {
  color: #333;
  font-size: 1.3rem;
  font-family: 'メイリオ', 'Meiryo', sans-serif;
  font-feature-settings: 'palt';
  letter-spacing: 0.025em;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* ---------------------------------
   Util 
------------------------------------ */

.inner {
  margin: 0 48px;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 48px;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding-top: 48px;
}

/* ---------------------------------
   For PC 
------------------------------------ */

/* ----------
header 
---------- */
.header {
  position: relative;
  width: 100%;
}

.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  box-sizing: border-box;
  padding: 24px 48px;
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: space-between;

  border-top: 16px solid rgb(241, 239, 234);
}
.header-title {
  font-family: 'Lobster', cursive;
  margin-bottom: 32px;
  font-size: 3.2rem;
  font-weight: 700;
  white-space: nowrap;
}
.header-menulist {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.menuitem {
  margin-right: 24px;
}
.menuitem:hover {
  color: #d2691e;
  transition: 0.4s;
  cursor: pointer;
}
.current {
  color: #d2691e;
}

.menuitem:last-of-type {
  margin-right: 0;
}
.eyecatch {
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 48px;
}

.fade-img {
  position: relative;
  height: 600px;
}
.fade-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
}

/* ----------
main 
---------- */
.main {
  width: 100%;
}
.shopinfo {
  background-color: rgb(241, 239, 234);
  text-align: center;
  padding-bottom: 48px;
  margin-bottom: 48px;
}
.shopinfo-text > p {
  margin-bottom: 32px;
}
.shopinfo-text > p:last-of-type {
  margin-bottom: 0;
}

.information {
  display: flex;
  flex-direction: row;

  border: 1px solid #333;
  padding: 24px;
  margin: 0 96px 48px;
}
.information-title {
  font-weight: bold;
  margin-right: 16px;
}
.information-list {
}
.information-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.information-item:last-of-type {
  margin-bottom: 0;
}
.information-date {
  margin-right: 16px;
}
.information-text > a {
  color: #333;
  text-decoration: underline;
}
.information-text > a:hover {
  color: #aaa;
  text-decoration: underline;
}

.products {
  margin-bottom: 96px;
}
.products-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.products-item {
  position: relative;
  width: 33.33%;
  margin-right: 32px;
}
.products-item:last-of-type {
  margin-right: 0;
}
.products-button {
  position: absolute;
  width: calc(100% / 2);
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
  font-size: 1.2em;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  border: 2px solid #fff;
  padding: 16px;
}
.products-button:hover {
  background-color: burlywood;
  border-color: burlywood;
  transition: all 0.3s;
}

.insta {
  margin: 0 auto 48px;
  padding-bottom: 48px;
  background-color: rgb(241, 239, 234);
}
.instagram {
  width: 800px;
  margin: 0 auto;
}
.insta-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-bottom: 24px;
}
.insta-item {
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
}
.insta-item:hover {
  filter: brightness(0.6);
  transition: 0.4s;
}

.morebutton {
  text-align: center;
  border: 2px solid #333;
  width: 90px;
  padding: 10px;
  margin: 0 auto;
}
.morebutton:hover {
  color: #fff;
  background-color: #333;
  border-color: #333;
}

.access {
  margin: 0 192px 96px;
}
.access-info {
  display: flex;
  justify-content: center;
}
.access-map {
  margin-right: 24px;
}
.access-text {
  line-height: 2;
}
.access-text p span {
  width: 100px;
  margin-right: 16px;
}

.sns {
  width: 100px;
  margin: 0 auto 60px;
}

.sns-list {
  display: flex;
  justify-content: space-between;
  font-size: 2em;
}

.sns-item {
  margin-right: 24px;
  color: #666;
  cursor: pointer;
}

.sns-item:hover {
  opacity: 0.5;
}

/* ----------
footer 
---------- */

.footer {
  width: 100%;
  height: 64px;
  background-color: #333;
}

.footer-copyright {
  font-size: 1.1rem;
  color: #fff;
  padding-top: 24px;
  text-align: center;
}


`
