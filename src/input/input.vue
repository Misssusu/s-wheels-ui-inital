<template>
    <div class="s-input" :class="{error}">
            <input type="text" :disabled="disabled" :value="value" :readonly="readonly" :error="error"
                   @change="$emit('change', $event.target.value)"
                   @input="$emit('input', $event.target.value)"
                   @focus="$emit('focus', $event.target.value)"
                   @blur="$emit('blur', $event.target.value)"
            >
        <template v-if="error">
            <s-icon name="error" class="icon-error"></s-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from "../icon/icon";
    export default{
        components: {
            's-icon': Icon
        },
        name: '',      //在使用Vue开发者工具的时候进行标签的命名
        props: {
            value: {
              type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-radius: 4px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 14px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #db0011;
    .s-input {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: .5em;
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
        > .icon-error {
            fill: $red;
        }
        > .errorMessage {
            color: $red;
        }
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
    }
</style>
