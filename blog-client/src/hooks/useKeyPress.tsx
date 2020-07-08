import React, { useEffect } from 'react';

/*
addEventListener
语法： targetEle.addEventListener(type, listener, options)
type      :  监听事件类型的字符串, 不要使用on前缀
listener  ： 事件触发执行的函数， 所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象
options   ： 可选。布尔值，指定事件是否在捕获或冒泡阶段执行。
            true  -  事件句柄在捕获阶段执行
            false -  默认。事件句柄在冒泡阶段执行
*/

interface PressFace {
  key: string
  func: Function
  rely: any
  source?: Document
};

interface DownFace {
  (ev: EventListener):void
}

type useKeyPress = (arg:PressFace) => void;

const useKeyPress: useKeyPress = ({
  key,
  func,
  rely = false,
  source = document
}) => {

  const downHandle = (ev:globalThis.KeyboardEvent) => {
    const { key: sourceKey } = ev;
    const eventKey = sourceKey === 'Escape'? 'esc' : sourceKey;
    (eventKey === key) && func(ev);
  }

  useEffect(() => {
    source.addEventListener('keydown', downHandle);
    return () => source.removeEventListener('keydown', downHandle);
  }, [rely]);

}

export { useKeyPress };