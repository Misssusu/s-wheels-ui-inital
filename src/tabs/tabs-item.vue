<template>
    <div class="s-tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 's-tabs-item',
    data() {
      return {
        active: false
      };
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    inject: ['eventBus'],
    created() {
      if(this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        });
      }
    },
    methods: {
      onClick() {
        if(this.disabled){ return }
        this.eventBus.$emit('update:selected', this.name, this);
      }
    }
  };
</script>
<style lang="scss" scoped>
    $disabled-text-color: grey;
    .s-tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        font-weight: bold;
        &.active {
            color: blue;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>