### 开始

#### 使用npm
```
npm instarll
npm start
npm build
```
#### 使用yarn

```
yarn
yarn start
yarn build
```

### 项目结构
```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.ico
│   └── manifest.json
├── src
│   ├── actions
│   │   └── actions.js
│   ├── components
│   │   ├── Button.js
│   │   ├── BuyTabNav.js
│   │   ├── CloudPhone.js
│   │   ├── DevTools.js
│   │   ├── DeviceActions.js
│   │   ├── DeviceTitle.js
│   │   ├── HomeTitle.js
│   │   ├── InputView.js
│   │   ├── List.js
│   │   ├── LoginInput.js
│   │   ├── ModifyPassword.js
│   │   ├── NumberInput.js
│   │   ├── PackageList.js
│   │   ├── PasswordCheckBox.js
│   │   ├── PaymentButton.js
│   │   ├── SelectInput.js
│   │   ├── SelectNav.js
│   │   ├── SubTitle.js
│   │   ├── TabNav.js
│   │   ├── Title.js
│   │   ├── UserTabNav.js
│   │   ├── VerificationCode.js
│   │   └── index.js
│   ├── constants
│   │   ├── constants.js
│   │   ├── images.js
│   │   └── placeholder.js
│   ├── containers
│   │   ├── DeviceManagement.js
│   │   ├── ForgotPassword.js
│   │   ├── Home.js
│   │   ├── HomeBuy.js
│   │   ├── PersonalCenter.js
│   │   ├── SignIn.js
│   │   ├── SignUp.js
│   │   └── index.js
│   ├── index.js
│   ├── logo.svg
│   ├── reducers
│   │   ├── index.js
│   │   └── reducer.js
│   ├── registerServiceWorker.js
│   ├── router
│   │   └── Base.js
│   ├── static
│   │   ├── CP-bkg-img.png
│   │   ├── G-hover.png
│   │   ├── G.png
│   │   ├── help-hover.png
│   │   ├── help.png
│   │   ├── order-hover.png
│   │   ├── order.png
│   │   ├── passwold-hover.png
│   │   ├── passwold.png
│   │   ├── select-down.png
│   │   ├── v-hover.png
│   │   ├── v.png
│   │   └── �\213�\213\211箭头.png
│   ├── store
│   │   └── configureStore.js
│   ├── style
│   │   ├── DeviceManagementStyle.js
│   │   ├── HomeStyle.js
│   │   ├── LoginStyle.js
│   │   ├── ModifyPasswordStyle.js
│   │   └── reast.css
│   └── utils
│       ├── Base64.js
│       ├── Computus.js
│       ├── DataProcess.js
│       ├── DesUtils.js
│       ├── Encryption.js
│       ├── History.js
│       ├── HistoryPush.js
│       ├── Hover.js
│       ├── HttpRequest.js
│       ├── HttpUitl.js
│       ├── ParameterHash.js
│       ├── SwissArmyKnife.js
│       ├── Transition.js
│       └── WeChat.js
├── yarn-error.log
└── yarn.lock

```

### 项目其他信息

1. 接口地址 http://172.16.2.86:8090/pages/viewpage.action?pageId=26483935
2. 接口设计 http://172.16.2.86:8090/pages/viewpage.action?pageId=26482161
3. 开发环境接口地址 http://172.16.2.220:8762 172.16.2.220:8760 //带签名
4. Jenkins http://172.16.2.102:8090/package/view/GROUP_CONTROL/job/GC_WEB/
5. 项目部署地址 172.16.2.223:/data/work/group-control/gc-web/
6. root 用户 ssh -p 2299 root@172.16.2.223
7. 开发环境访问域名 http://gc-web-dev.haimawan.com/


### nginx 配置

```
location / {
              try_files $uri @fallback;
           }
location @fallback 
        {
         rewrite .* /index.html break;
        }
```

### 其他问题


1. 项目中获取手机验证码倒计时,在倒计时中切换路由，再切换回来保持倒计时。

2. redux的基本用法

3. redux的实际应用场景

4. redux的中间件

5. redux 一次多个dispatch 

6. import的几种写法，import和require区别

7. es6的新特性

8. react高阶组件  

9. react组件封装

10. react-router4.0路由嵌套

11. react-router4.0 默认路由

12.  有/api /pub 开头的接口本地开发环境请求设置代理

13. 不同启动命令对应不通的环境
