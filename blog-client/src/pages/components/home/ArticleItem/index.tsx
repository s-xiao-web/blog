import React, { useRef, useEffect } from 'react';
import { Col } from 'antd';

import style from './index.less';
import img from '@/assets/20200429100126.png';

require('./test.less')

const ArticleItem = props => {

  const parentEle = useRef();
  const childrenEle = useRef();

  useEffect(() => {
    const eleDom = parentEle.current;
    eleDom.addEventListener('mousemove', mousemoveEvent)
    eleDom.addEventListener('mouseleave', mouseleaveEvent)
    return () => {
      eleDom.removeEventListener('mousemove', mousemoveEvent)
      eleDom.removeEventListener('mouseleave', mouseleaveEvent)
    }
  }, [])

  return (
    <Col span={8}>
      <div className={style['article-wrapper']} ref={parentEle}>
        <div className={style['article-item-wrapper']} ref={childrenEle}>
          <div className={style['article-pic-wrapper']}>
            <div className="article-img">
              <img src={img} alt="" />
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
            <div className={style['info-diamond']}></div>
            <div className={style['info-wrapper']}>
              <div className={style['info-title']}>
                VUe中如何优雅的清楚定时器VUe中如何优雅的清楚定时器VUe中如何优雅的清楚定时器
                </div>
              <ul className={style['info-msg']}>
                <li className={style['msg-time']}>
                  <span className={style['icon']}>i</span>
                  <span>2020-06-10</span>
                </li>
                <li className={style['msg-auth']}>
                  <span className={style['icon']}>i</span>
                  <span>xiao</span>
                </li>
              </ul>
              <div className={style['info-tag']}>
                <span>#react</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )

  function mousemoveEvent(e) {
    const childrenDom = childrenEle.current;
    const x = e.offsetX;
    const y = e.offsetY;
    const centerX = this.clientWidth / 2;
    const centerY = this.clientHeight / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const percentX = deltaX / centerX;
    const percentY = deltaY / centerY;
    const deg = 10;
    childrenDom.style.transform = 'rotateX(' + deg * (-percentY) + 'deg)' + 'rotateY(' + deg * percentX + 'deg)';
  }
  function mouseleaveEvent() {
    const childrenDom = childrenEle.current;
    childrenDom.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }
}

export default ArticleItem;