//统一定义后台接口
const MOCKURL = 'http://www.longji.com/';//模拟地址
const SERVICEURL = 'http://localhost:3000/';//真实地址

const URL = {
    getVarietyItem:MOCKURL + 'getVarietyItem',
    getHotProduct:MOCKURL + 'getHotProduct',
    registUser:SERVICEURL + 'user/registUser',
    loginUser:SERVICEURL + 'user/loginUser'
};
export default URL;