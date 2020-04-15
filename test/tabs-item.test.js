import { describe } from 'mocha';

const expect = chai.expect; //断言
import Vue from 'vue'

import Tabs from "../src/tabs/tabs";
import TabsNav from "../src/tabs/tabs-nav";
import TabsItem from "../src/tabs/tabs-item";
import TabsBody from "../src/tabs/tabs-body";
import TabsPane from "../src/tabs/tabs-pane";

Vue.component('s-tabs', Tabs);
Vue.component('s-tabs-nav', TabsNav);
Vue.component('s-tabs-item', TabsItem);
Vue.component('s-tabs-body', TabsBody);
Vue.component('s-tabs-pane', TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsItem', () => {
  //BDD 行为驱动测试 Mocha
  it('存在.', () => {
    expect(TabsItem).to.exist
  });
  it('name prop', ()=>{
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: 'testName',
      }
    }).$mount();
    expect(vm.$el.getAttribute('data-name')).to.eq('testName')
  });
  it('disabled prop', ()=>{
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true,
      }
    }).$mount();
    expect(vm.$el.classList.contains('disabled')).to.be.true
  })
});
