import { useState } from 'react';

// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = fetch('/config').then((config) => ({
  // 注册子应用信息
  apps: [
    {
      name: 'vue',
      entry: 'http://localhost:3000',
      props: {
        onClick: (event: any) => console.log(event),
        name: '张三',
        age: '28',
      },
    },
  ],
  // lifeCycles: {
  //   afterMount: (props: any) => {
  //     console.log(props);
  //   },
  // },
}));

// 应用通信
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({ a: '1' });

  return {
    masterState,
    setMasterState,
  };
}
