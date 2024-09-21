import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Route() {
  useLoad((options) => {
    console.log('options', options)
    console.log('id', options.id)
  })

  console.log(Taro.ENV_TYPE)
  console.log(Taro.getEnv())

  const env = Taro.getEnv();
  if (env == "WEB") {
    console.log("当前环境是web");
  } else if (env == "WEAPP") {
    console.log("当前环境是微信小程序");
  }


  function handleClickMessage() {
    Taro.showToast({
      title: "消息弹框",
      icon: "loading",
      duration: 2000,
      mask: true,
      success(res) {
        console.log('消息弹框成功');
      }


    })

  }
  function handleClickModel() {
    Taro.showModal({
      title: "这是一个对话框",
      content: "这里是对话框的内容",
      success: function (res) {
        if (res.confirm) {
          console.log("我点击确定")
        }
        else if (res.cancel) {
          console.log("我点击了取消")
        }
      }
    })
  }

  function handleClickLoading() {
    Taro.showLoading({
      title: "正在加载"
    })
  }

  return (
    <View className='route'>
      <Button onClick={handleClickMessage}>消息弹框</Button>
      <Button onClick={handleClickModel}>对话框</Button>
      <Button onClick={handleClickLoading}>加载框</Button>
      <Button onClick={handleClickLoading}>加载框</Button>
      <Button onClick={handleClickLoading}>加载框</Button>
    </View>
  )
}
