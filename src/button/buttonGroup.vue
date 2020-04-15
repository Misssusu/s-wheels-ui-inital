<template>
    <div class="s-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        mounted() {   /*当buttonGroup出现在页面中时触发*/
            console.log(this.$el.children);
            for(let node of this.$el.children) {
                console.log(node)
                if(node.nodeName.toLowerCase() !== 'button') {
                    console.warn('s-button-group 的子元素应该全是 s-button')
                }
            }
        }
    }
</script>
<style lang="scss">
    .s-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .s-button {
            &:not(:first-child) {
                margin-left: -1px;
            }
            border-radius: 0;
            &:first-child {
                border-top-left-radius: var(--button-radius);
                border-bottom-left-radius: var(--button-radius);
            }
            &:last-child {
                border-top-right-radius: var(--button-radius);
                border-bottom-right-radius: var(--button-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>