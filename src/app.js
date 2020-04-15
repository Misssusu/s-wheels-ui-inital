import Vue from "vue";
import Button from "./button/button";
import Icon from "./icon/icon";
import ButtonGroup from "./button/buttonGroup";
import Input from "./input/input";
import Tabs from "./tabs/tabs";
import TabsNav from "./tabs/tabs-nav";
import TabsItem from "./tabs/tabs-item";
import TabsBody from "./tabs/tabs-body";
import TabsPane from "./tabs/tabs-pane";
import Popover from "./popover/popover";
import Collapse from "./collapse/collapse";
import CollapseItem from "./collapse/collapse-item";

Vue.component('s-button', Button);
Vue.component('s-icon', Icon);
Vue.component('s-button-group', ButtonGroup);
Vue.component('s-input', Input);
Vue.component('s-tabs', Tabs);
Vue.component('s-tabs-nav', TabsNav);
Vue.component('s-tabs-item', TabsItem);
Vue.component('s-tabs-body', TabsBody);
Vue.component('s-tabs-pane', TabsPane);
Vue.component('s-popover', Popover);
Vue.component('s-collapse', Collapse);
Vue.component('s-collapse-item', CollapseItem);

new Vue({
    el: "#app",
    data: {
        loadings: false,
        message: '',
        selectedTab: '1',
        isSelected: ['2']
    },
    methods: {
        inputChange(e){
            console.log(e.target.value);
        },
        yyy(){
            console.log('yyy');
        }
    }
});

