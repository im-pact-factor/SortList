/**
 * title: ReactElement
 * desc:
   将ReactElement传输进去。
 */

import React from 'react';
import { CenterAdaptLayout, DndList, HorizontalAdaptLayout, Text } from '@fineui/react';

const items = [
  <CenterAdaptLayout height={38}>
    <Text style={{ fontWeight: 'bold' }}>《山村咏怀》</Text>
  </CenterAdaptLayout>,
  <CenterAdaptLayout height={38}>
    <Text style={{ fontSize: '14px', fontWeight: '600' }}>宋·邵康节</Text>
  </CenterAdaptLayout>,
  <CenterAdaptLayout height={38}>
    <Text>一去二三里，</Text>
  </CenterAdaptLayout>,
  <CenterAdaptLayout height={38}>
    <Text>烟村四五家。</Text>
  </CenterAdaptLayout>,
  <CenterAdaptLayout height={38}>
    <Text>亭台六七座，</Text>
  </CenterAdaptLayout>,
  <CenterAdaptLayout height={38}>
    <Text>八九十枝花。</Text>
  </CenterAdaptLayout>,
];

const DndListDemo = () => (
  <HorizontalAdaptLayout>
    <DndList
      items={items}
      style={{
        boxShadow: '10px 5px 5px rgba(0,0,0,.05)',
        borderTop: '1px dotted black',
        borderLeft: '1px dotted black',
        borderRight: '1px dotted black',
      }}
      itemWidth={'12em'}
      itemHeight={38}
      itemStyle={{ borderBottom: '1px dotted black', fontSize: '18px', cursor: 'move' }}
      onChange={(a) => {
        console.log(a);
      }}
    />
  </HorizontalAdaptLayout>
);

export default DndListDemo;
