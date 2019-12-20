import Mock from 'mockjs';
import data from './data.json';

Mock.mock('http://www.lengnuanit.com/getList',{data:data.list});
Mock.mock('http://www.litao.com/getUser',{'name|2':'litao','age|15-20':20});
Mock.mock('http://www.karry.com/getData',{'info|10-20':[{'index|+1':1,'name':'@first @last','id':'@integer(10000,99999)','date':'@datetime','img':'@image("200*200")','text':'@sentence(6,22)'}]});
let Random = Mock.Random;
let productData = req => {
    let productList = [];
    for (let i = 0; i < 100; i++) {
        let product = {
            name: Random.ctitle(5,20),
            img:Random.dataImage('100x100','图片' + Random.integer(1,100)),
            price:Random.integer(1000,9999),
            owner:Random.cname()
        };
        productList.push(product);
    }
    return productList;
}
Mock.mock('http://www.longji.com/getVarietyItem',productData())