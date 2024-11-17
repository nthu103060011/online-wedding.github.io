import './App.css';
import Container from '@mui/material/Container';
import Slider from 'react-slick';

const pictures = [
  { file: '20151229.JPg', label: '2015, 清大' },
  { file: '20160131.JPg', label: '2016, 台中' },
  { file: '20160910.jpg', label: '2016, 台南' },
  { file: '20170209.JPg', label: '2017, 台中' },
  { file: '20170718.JPg', label: '2017, 楊梅' },
  { file: '20180609.JPg', label: '2018, 清大' },
  { file: '20180903.jpg', label: '2018, 花蓮' },
  { file: '20180904.jpg', label: '2018, 花蓮' },
  { file: '20180908.jpg', label: '2018, 花蓮' },
  { file: '20181202.jpg', label: '2018, 淡水' },
  { file: '20190113.JPg', label: '2019, 巨城' },
  { file: '20190324.JPg', label: '2019, 巨城' },
  { file: '20190406.JPg', label: '2019, 宜蘭' },
  { file: '20190828.jpg', label: '2019, 澎湖' },
  { file: '20190829.jpg', label: '2019, 澎湖' },
  { file: '20201127.jpg', label: '2020, 宜蘭' },
  { file: '20210405.jpg', label: '2021, 竹東' },
  { file: '20210731-1.jpeg', label: '2021, 清大' },
  { file: '20210731-2.jpeg', label: '2021, 清大' },
  { file: '20230429.jpg', label: '2023, 善化' },
  { file: '20230702-1.jpg', label: '2023, 手作戒指' },
  { file: '20230702-2.jpg', label: '2023, 手作戒指' },
  { file: '20230708.jpg', label: '2023, 求婚當天' },
  { file: '20240228.jpeg', label: '2024, 新竹' },
  { file: '20240505.jpg', label: '2024, 夏威夷' },
  { file: '20240506-1.jpg', label: '2024, 夏威夷' },
  { file: '20240506-2.jpg', label: '2024, 夏威夷' },
  { file: '20240506-3.jpg', label: '2024, 夏威夷' },
  { file: '20240509.jpg', label: '2024, 夏威夷' },
  { file: '20240514.jpg', label: '2024, 日本環球影城' },
  { file: '20240516.jpg', label: '2024, 宇治' },
];

function App() {
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <img
            src='./img/線上家宴邀請函.png'
            alt='線上家宴邀請函'
          />
          <div>
            <p>{'大家好，我是曉彤/董曉彤/阿董/Lisa。餅乾雖然是我媽媽叫我訂的，但因為想和你分享我的近況和喜悅，所以送你一盒。'}</p>
            <p>{'我在去年(2023)7月與林伯禹登記結婚，並在家長的催促與協助下(?)，於今年(2024)11月16號舉辦家宴，代替我們一直懶得舉辦的婚禮。'}</p>
            <p>{'因為是家長主辦，我沒有被分到很多賓客座位，所以很抱歉沒能邀請你來現場參與。'}</p>
            <p>{'這邊我寫了一個很簡單的網頁，邀請你線上體驗我們為當天準備的照片、音樂，和小遊戲。'}</p>
            <p>{'這個網頁跟餅乾一樣有有效期限，請趁早享用，謝謝 <3'}</p>
          </div>
          <h3>現場大螢幕</h3>
        </div>
      </Container>

      <div style={{ maxWidth: '37.5rem', margin: 'auto', borderBlock: '0.5rem solid' }}>
        <div style={{ marginInline: '0.75rem', borderInline: '0.4rem solid' }}>
          <Slider {...settings}>
            {pictures.map(({file, label}, i) => (
              <div>
                <img
                  src={`./img/pic/${file}`}
                  alt='照片'
                />
                <p style={{ marginBlock: '0.5rem', textAlign: 'center' }}>{label}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div style={{ width: '1px', height: '3rem', borderInlineStart: '0.5rem solid', marginInline: 'auto' }}></div>

      <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <h3>現場小遊戲</h3>
          <a target='_blank' rel='noreferrer' href='https://create.kahoot.it/share/tmi/712e11db-e15a-4aab-990d-3fed0e515d83'>https://create.kahoot.it/share/tmi/712e11db-e15a-4aab-990d-3fed0e515d83</a>
          <div>
            <p>{'進去之後點單人遊玩 > 經典模式，就可以開始囉'}</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;

// note in cookie
// 大家好，我是曉彤/董曉彤/阿董/Lisa。餅乾雖然是我媽媽叫我訂的，但因為想和你分享我的近況和喜悅，所以送你一盒。
// 我在去年(2023)7月與林伯禹登記結婚，並在家長的催促與協助下(?)，於今年(2024)11月16號舉辦家宴，代替我們一直懶得舉辦的婚禮。
// 因為是家長主辦，我沒有被分到很多賓客座位，所以很抱歉沒能邀請你來現場參與。
// 這邊我寫了一個很簡單的網頁，邀請你線上體驗我們為當天準備的照片、音樂，和小遊戲。
// 這個網頁跟餅乾一樣有有效期限，請趁早享用，謝謝 <3
