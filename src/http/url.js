// 注册页面请求地址
export const registerUrl = '/api/register/code';
// 测试示例URL地址
export const topNavUrl = '/api/index/webtopnav';




/* ************** 列表页面 start ************** */
// 列表页 1. 查询市区API接口
export const listQueryCity = '/api/item/queryCity';
// 列表页 2. 查询分类接口
export const listSortGoods = '/api/item/sortGoods';
// 3. 根据城市、一级分类、二级分类查询商品信息



export const listQueryGoodsInfos = '/api/item/queryGoodsInfos';
  // 4. 猜你喜欢接口
// 此接口可以和亲子首页 猜你喜欢 公用
export const listGuessLike = '/api/item/guessLike';
/* ************** 列表页面 end ***************/






/* ************** 详情页面接口start ****************** */
//  获取详情数据信息， 主要是项目功能信息。
export const getItemData = '/api/item/getItems';
//  根据演出 ID 查询排期信息
export const getTimePlan = '/api/desc/getTimePlan';

//  根据 排期ID查找票价信息
export const getPrice = '/api/desc/getPrice';
//  根据根据戏剧 获取评价信息及数据信息
export const getComments = '/api/item/getComments';
//  提交评价信息
export const postComments = '/api/item/getComments';

//  获取推荐信息
export const getRecommend = '/api/item/getRecommend';


//  获取座位信息api_chooseSeat.getSchedule
export const getSeatList = '/api/desc/getSeatList';
//  获取座位状态等信息
export const getSchedule = '/api/desc/getSchedule';

/* ************** 详情页面接口 end   ****************** */


/* ************** 订单确认页面 start ****************** */
// 下单接口
export const submitOrder = '/api/order/submitorder';

/* ************** 订单确认页面 end ****************** */


/* ************** 确认支付页面 start ****************** */
// 根据订单号查询订单详情
export const confirmPay = '/api/order/confirmpay';



// 获取微信支付codeUrl 接口
export const weChatPay = '/api/pay/wechatpay';
// 3. 监听订单支付状态接口
//export const orderState = '/api/pay/orderstate';

/* ************** 确认支付页面 end ****************** */

/* ************** 个人中心-订单列表页面 start ****************** */
// 根据订单号查询订单详情
export const queryOrderList = '/api/order/queryorderlist';

// 个人信息页面接口
// 1.用于个人信息页根据用户Id返回用户信息
export const queryPersonInfo = '/api/user/querypersoninfo';

// 2. 修改用户信息
export const modifyPersonInfo = '/api/user/modifypersoninfo';

// 常用购票人页面
// 1. 根据当前用户返回当前用户常用购票人列表
export const ticketBuyerList = '/api/user/ticketbuyerlist';
// 2. 添加常用购票人
export const addTicketBuyer = '/api/user/addticketbuyer';
// 3. 验证购票人是否已经存在
export const validateBuyerExist = '/api/user/validatebuyerexist';
// 4. 删除联系人
export const deleteTicketBuyer = '/api/user/deleteticketbuyer';


/* ************** 个人中心-订单列表页面 end ****************** */







/* ************** 亲子页面等5个页面接口 start ****************** */

//   获取头部导航页面信息
export const getlineNav = '/api/item/lineNav';

//   获取页面广告地址及信息页面
export const getAdimgUrl = '/api/multiple/getAdimgUrl';
// 获取轮播图数据信息
export const getCarouselData = '/api/item/getCarouselData';
// 获取猜你喜欢界面数据信息
export const getGuessYouLike = '/api/item/getGuessYouLike';


// 获取精彩聚焦界面数据信息
export const getWonderfulData = '/api/item/getWonderfulData';


// 获取热门排行数据信息
export const getPopularSearch = '/api/item/getPopularSearch';




// 获取日历栏界面数据信息
export const getCalendarData = '/api/multiple/getCalendarData';
// 获取亲子界面ParentChildTabs 界面数据信息
export const getParentChild = '/api/multiple/getParentChild';



// 获取其他页面数据信息
export const getOtherTabsData = '/api/multiple/getOtherTabsData';

/* ************** 亲子页面等5个页面接口 end   ****************** */
