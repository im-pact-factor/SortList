import React from 'react';
import classNames from 'classnames';
import HolderOutlined from '@ant-design/icons/HolderOutlined';
import { Label, Checkbox } from '../index';
import update from 'immutability-helper';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { LeftRightVerticalAdaptLayout } from '../../react-layout';
import './dndlist.less';

const type = 'DraggableBodyRow';

interface DataType {
  selected?: boolean;
  value: string | number;
  icon?: React.ReactElement;
  text?: string | number;
}

type ItemType = DataType | React.ReactElement;

interface ItemProps {
  moveRow: (dragIndex: number, hoverIndex: number) => void;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  index: number;
  item: ItemType;
  height?: string | number;
  width?: string | number;
}

export interface DndListProps {
  items: ItemType[];
  onChange?: (v?: ItemType[]) => void;
  itemHeight?: string | number;
  itemWidth?: string | number;
  style?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  itemClassName?: string;
  className?: string;
}

const prefixCls = 'bi';

const Item = (props: ItemProps) => {
  const {
    item,
    index,
    moveRow,
    onClick,
    className,
    style,
    height = 24,
    width,
    ...restProps
  } = props;
  const ref = React.useRef(null);

  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: (item: { index: number }) => {
      if (item.index !== index) {
        moveRow(item.index, index);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: { index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drop(drag(ref));

  const getRenderItem = (getItem: ItemType) => {
    if (React.isValidElement(getItem)) {
      return getItem;
    }

    const [select, setSelected] = React.useState(getItem.selected);
    return (
      <LeftRightVerticalAdaptLayout height={height} lgap={10}>
        <Checkbox
          selected={select}
          onChange={(v) => {
            getItem.selected = v;
            setSelected(v);
            onClick?.();
          }}
        />
        <Label lgap={12}>{getItem.icon}</Label>
        <Label>{getItem.text}</Label>
        <LeftRightVerticalAdaptLayout.Right rgap={10}>
          <HolderOutlined style={{ cursor: 'move' }} />
        </LeftRightVerticalAdaptLayout.Right>
      </LeftRightVerticalAdaptLayout>
    );
  };
  return (
    <div
      ref={ref}
      className={classNames(
        className,
        `${prefixCls}-dndlist-item`,
        `${isOver ? dropClassName : ''}`,
      )}
      style={{
        width: width,
        height: height,
        visibility: isDragging ? 'hidden' : 'visible',
        ...style,
      }}
      {...restProps}
    >
      {getRenderItem(item)}
    </div>
  );
};

const DndList = (props: DndListProps) => {
  const { itemHeight, itemWidth, items, onChange, itemStyle, className, itemClassName, ...rest } =
    props;
  const [data, setData] = React.useState<ItemType[]>(items);

  const moveRow = React.useCallback<ItemProps['moveRow']>(
    (dragIndex: number, hoverIndex: number) => {
      const dragRow = data[dragIndex];
      setData(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        }),
      );
    },
    [data],
  );
  React.useEffect(() => {
    onChange?.(data);
  }, [data]);

  return (
    <DndProvider backend={HTML5Backend} context={window}>
      <div className={classNames(className, `${prefixCls}-dndlist`)} {...rest}>
        {data.map((item, index) => (
          <Item
            index={index}
            item={item}
            height={itemHeight}
            width={itemWidth}
            onClick={() => {
              onChange?.(data);
            }}
            className={itemClassName}
            style={itemStyle}
            key={(item as DataType).value || index}
            moveRow={moveRow}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DndList;
