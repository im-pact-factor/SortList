/**
 * title: 基本
 * desc:
   基本的用法，将数据直接传输进去。
 */

import React from 'react';
import { DndList, Icon } from '@fineui/react';

const items = [
  {
    icon: <Icon className="date-font" />,
    selected: true,
    text: '时间',
    value: 1,
  },
  {
    icon: <Icon className="search-font" />,
    selected: true,
    text: '搜索',
    value: 2,
  },
  {
    icon: <Icon className="primary-key-font" />,
    selected: false,
    text: '钥匙',
    value: 3,
  },
  {
    icon: <Icon className="minus-font" />,
    selected: false,
    text: '减去',
    value: 4,
  },
  {
    icon: <Icon className="copy-font" />,
    selected: false,
    text: '复制',
    value: 5,
  },
  {
    icon: <Icon className="text-bold-font" />,
    selected: false,
    text: '加粗',
    value: 6,
  },
];

const DndListDemo = () => (
  <DndList
    items={items}
    itemStyle={{ boxShadow: '0 2px 4px 0 rgba(0,0,0,.05)' }}
    itemWidth={250}
    itemHeight={45}
    onChange={(a) => {
      console.log(a);
    }}
  />
);

export default DndListDemo;
