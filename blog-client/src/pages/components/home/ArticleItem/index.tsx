import React, { useRef, useEffect } from 'react';
import { Col } from 'antd';

import style from './index.less';
import img from '@/assets/20200429100126.png';

require('./test.less')

const ArticleItem = props => {

  const ele = useRef(); 
  
  useEffect(() => {
    const eleDom = ele.current;
    eleDom.addEventListener('mousemove', function(e) {
      const x = e.offsetX;
      const y = e.offsetY;

      var centerX = this.clientWidth / 2,
          centerY = this.clientHeight / 2;

      var deltaX = x - centerX,
          deltaY = y - centerY;

      var percentX = deltaX / centerX,
          percentY = deltaY / centerY;
      

      var deg = 10;
      
      eleDom.style.transform = 'rotateX(' + deg * (-percentY) + 'deg)' + 'rotateY(' + deg * percentX + 'deg)'
  

    })

        
  }, [])

  return (
    <div id="banner-wrap">
      <div className={style['article-item-wrapper']} ref={ele}>
        <div className={style['article-pic-wrapper']}>
          <div className="article-img">
            <img src={img} alt=""/>
          </div>
        </div>
        <div className={style['article-describe-wrapper']}>
          <div className={style['describe-container']}>
            国务院今日公告，为表达全国各族人民对抗击新冠肺炎疫情斗争牺牲烈士和逝世同胞的深切哀悼，国务院决定，2020年4月4日举行全国性哀悼活动。在此期间，全国和驻外使领馆下半旗志哀，全国停止公共娱乐活动。4月4日10时起，全国人民默哀3分钟，汽车、火车、舰船鸣笛，防空警报鸣响。
            如何让我们的网站符合当前的气氛
            `css
          </div>
        </div>
        <div className={style['article-info-wrapper']}>
          <div className={style['article-diamond']}></div>
          {/* <div className={style['info-wrapper']}>
            <div className={style['info-title']}>
              VUe中如何优雅的清楚定时器VUe中如何优雅的清楚定时器VUe中如何优雅的清楚定时器
            </div>
            <ul className={style['info-msg']}>
              <li className={style['msg-time']}>
                <span className={style['icon1']}>i</span>
                <span>2020-06-10</span>
              </li>
              <li className={style['msg-auth']}>
                <span className={style['icon1']}>i</span>
                <span>xiao</span>
              </li>
            </ul>
            <div className={style['info-tag']}>
              <span>#react</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    // <div style={{ perspective: '1000px' }}>
    
    // </div>
  )
}

export default ArticleItem;