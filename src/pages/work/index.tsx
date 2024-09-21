import { View, Text, Swiper, SwiperItem, Image, Button, Input } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Work() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  function handleClickLoading() {
    Taro.showLoading({
      title: "正在加载"
    })
  }

  return (
    <>
      <View className="header">
        <Text className="title">我的应用</Text>
      </View>

      <View className="nav-container">
        <View className="nav-item">新闻</View>
        <View className="nav-item">地图</View>
        <View className="nav-item">贴吧</View>
        <View className="nav-item">视频</View>
        <View className="nav-item">图片</View>
        <View className="nav-item">更多</View>
      </View>

      <Swiper className='swiper-container' indicatorDots indicatorColor='white' indicatorActiveColor='green' autoplay interval={1000} circular>
        {Array(6).fill('https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png').map((src, index) => (
          <SwiperItem key={index}>
            <Image src={src} mode='widthFix' />
          </SwiperItem>
        ))}
      </Swiper>

      <View className='input-container'>
        <Input className='input' placeholder='搜索...' />
        <Button type='primary' onClick={handleClickLoading}>搜索</Button>
      </View>

      <Button type="warn" className='cancel-button'>取消</Button>
    </>
  )
}