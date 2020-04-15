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

describe('Tabs', () => {
  //BDD 行为驱动测试 Mocha
  it('存在.', () => {
    expect(Tabs).to.exist
  });
  it('selected prop', (done)=>{
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
      <s-tabs selected="one">
        <s-tabs-nav>
            <s-tabs-item name="one">Tab1</s-tabs-item>
            <s-tabs-item name="two" disabled>Tab2</s-tabs-item>
            <s-tabs-item name="three">Tab3333333333</s-tabs-item>
            <s-tabs-item name="four">Tab4</s-tabs-item>
        </s-tabs-nav>
        <s-tabs-body>
            <s-tabs-pane name="one">Tab1内容</s-tabs-pane>
            <s-tabs-pane name="two">Tab2内容</s-tabs-pane>
            <s-tabs-pane name="three">Tab3内容</s-tabs-pane>
            <s-tabs-pane name="four">Tab4内容</s-tabs-pane>
        </s-tabs-body>
    </s-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let item = vm.$el.querySelector('.s-tabs-item[data-name="one"]');
      expect(item.classList.contains('active')).to.be.true;
      done()
    })
  })
});
