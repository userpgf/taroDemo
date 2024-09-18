import { View, Text, Button, Navigator } from '@tarojs/components'

import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Com() {
  useLoad(() => {
    console.log('Page loaded.')
  })
  function handleNavigator1() {
    Taro.navigateTo({
      url: "/pages/route/index"
    })
  }

  function handleNavigator2() {
    Taro.redirectTo({
      url: "/pages/route/index"
    })
  }
  function handleNavigator3() {
    Taro.switchTab({
      url: "/pages/index/index"
    })
  }
  return (
    <>
      <Navigator url='/pages/route/index?id=100' openType='navigate'>
        <Text>跳转到route页面</Text>
      </Navigator>

      <Navigator url='/pages/route/index?id=100&name=200' openType='redirect'>
        <Text>跳转到route页面</Text>
      </Navigator>

      <Navigator url='/pages/route/index' openType='switchTab'>
        <Text>跳转到index页面</Text>
      </Navigator>

      <Button onClick={handleNavigator1} type='primary'>跳转到route页面</Button>
      <Button onClick={handleNavigator2} type='warn'>跳转到route页面</Button>
      <Button onClick={handleNavigator3} type='default'>跳转到index页面</Button>
    </>
  )

}