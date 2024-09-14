import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  let a = '第一个变量'
  const arr = ['abc11111', 'cba', 'nbc']

  const obj = {
    name: "张三",
    age: 18
  }
  let isTure = true;
  let isUndefined = undefined;
  function fn() {
    return '我是函数的返回值';
  }

  return (
    <>
      <View >
        <Text>{a}</Text>
      </View>
      <View>{arr}</View>
      <View>{obj.name}-{obj.age}</View>
      <View>{JSON.stringify(obj)}</View>
      <View>{new Date().getTime()}</View>
      <View>{isTure}</View>
      <View>{isUndefined}</View>
      <View>{1 + 2}</View>
      <View>{
        isTure ? '我是真的' : '我是假的'
      }</View>
      <View>{fn()}</View>
    </>

  )
}
