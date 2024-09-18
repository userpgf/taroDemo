export default defineAppConfig({
  pages: [
    'pages/index/index', "pages/com/index", "pages/route/index"],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#707070",
    selectedColor: "#1296db",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "assets/images/tabbar/home_no_active.png",
        selectedIconPath: "assets/images/tabbar/home_active.png",
      },
      {
        text: "组件",
        pagePath: "pages/com/index",
        iconPath: "assets/images/tabbar/com_no_active.png",
        selectedIconPath: "assets/images/tabbar/com_active.png",
      }
    ]
  }

});