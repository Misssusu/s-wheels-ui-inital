import { describe } from 'mocha';

const expect = chai.expect; //断言
import Vue from 'vue';
import Popover from '../src/popover/popover';

Vue.component('s-popover', Popover);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Popover', () => {
  //BDD 行为驱动测试 Mocha
  it('存在.', () => {
    expect(Popover).to.exist;
  });
  it('点击popover内容框出现', (done) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
      <s-popover position="top" ref="popTest">
            <template  slot="content">
                <div>
                    弹出内容
                </div>
            </template>
            <button>点我</button>
        </s-popover>

    `;
    let vm = new Vue({
      el: div
    });
    vm.$el.querySelector('button').click();
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.popTest.$refs;
      expect(contentWrapper).to.exist;
      done();
    });
  });
  it('可以设置position.', (done) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
      <s-popover position="top" ref="popTest">
            <template  slot="content">
                <div>
                    弹出内容
                </div>
            </template>
            <button>点我</button>
        </s-popover>

    `;
    let vm = new Vue({
      el: div
    });
    vm.$el.querySelector('button').click();
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.popTest.$refs;
      expect(contentWrapper.classList.contains('position-top')).to.be.true;
      done();
    });
  });
});
