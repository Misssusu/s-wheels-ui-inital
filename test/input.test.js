const expect = chai.expect; //断言
import Vue from 'vue'
import Input from '../src/input/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    //BDD 行为驱动测试 Mocha
    it('存在.', () => {
        expect(Input).to.exist
    });
    describe('props', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy()
        });
        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'abc'
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('abc');
        });
        it('接收disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true);
        });
        it('接收readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true);
        });
        it('接收error', () => {
            vm = new Constructor({
                propsData: {
                    error: '测试错误'
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            console.log(useElement);
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
            const errorMessage = vm.$el.querySelector('.errorMessage');
            expect(errorMessage.innerText).to.equal('测试错误');
        });
    });
    describe('事件', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy()
        });
        it('支持change/input/focus/blur事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on(eventName, callback);
                let event = new Event(eventName);
                Object.defineProperty(
                    event, 'target', {
                    value: { value: 'hi' }
                });
                const inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi')
            });
        });
    })
});
