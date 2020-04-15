<template>
    <button
            :class="['s-button', `icon-${iconPosition}`]"
            @click="$emit('click', $event)">
        <s-icon v-if="icon && !loading" :name="icon"></s-icon>
        <s-icon class="loading icon" v-if="loading" name="loading"></s-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
  import Icon from '../icon/icon';

  export default {
    components: {
      's-icon': Icon
    },
    props: {
      icon: String,
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          console.log(value);
          return !(value !== 'left' && value !== 'right');
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $button-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .s-button {
        height: $button-height;
        font-size: $font-size;
        border-radius: $button-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        padding: .25em 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        cursor: pointer;

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background: $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: .3em;
            margin-left: 0;
        }

        > .content {
            order: 2
        }

        &.icon-right {
            > .content {
                order: 1
            }

            > .icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
        }

        > .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>
