---
title: DndList 拖拽排序列表
order: 0
group:
  title: 数据展示
  path: /show
  order: 3
nav:
  title: 组件
  path: /fui
  order: 1
---

# DndList 拖拽排序列表

可以拖拽排序的列表。

## 基本

<code src="./demos/Basic.tsx"></code>

## 传入 ReactElement

<code src="./demos/ReactElement.tsx"></code>

## API

| 参数          | 说明               | 类型                                    | 默认值 |
| ------------- | ------------------ | --------------------------------------- | ------ |
| className     | 自定义类名         | string                                  | -      |
| items         | 传入的数据         | [DataType](#datatype)[] \| ReactElement | -      |
| itemClassName | item 的自定义类名  | string                                  | -      |
| itemHeight    | item 的高度        | string \| number                        | 24     |
| itemWidth     | item 的宽度        | string \| number                        | -      |
| itemStyle     | item 的自定义样式  | CSSProperties                           | -      |
| style         | 自定义样式         | CSSProperties                           | -      |
| onChange      | 改变列表触发的事件 | ()=>void                                | -      |

#### DataType

```ts
interface DataType {
  value: string | number;
  selected: boolean;
  icon: React.ReactElement;
  text: string | number;
}
```
