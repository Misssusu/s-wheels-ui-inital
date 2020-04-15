<template>
    <div class="s-tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          active: false
        }
      },
      computed: {
        classes() {
          return {
            active: this.active
          }
        }
      },
      inject: ['eventBus'],
      props: {
        name: {
          type: String | Number,
          required: true
        }
      },
      created() {
        this.eventBus.$on('update:selected', (name)=>{
          this.active = name === this.name;
        })
      }
    }
</script>
<style lang="scss" scoped>
    .s-tabs-pane {
        padding: 1em;
        &.active {
        }
    }
</style>