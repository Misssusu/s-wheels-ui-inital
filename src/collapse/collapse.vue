<template>
    <div class="s-collapse">
        <slot></slot>
    </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    props: {
      accordion: {
        type: Boolean,
        accordion: false
      },
      selected: {
        type: Array
      }
    },
    data() {
      return {
        eventBus: new Vue()
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    mounted() {
      console.log(this.selected);
      //默认选中
      this.eventBus.$emit('update:selected', this.selected);

      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        if (this.accordion) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected', selectedCopy);
        this.$emit('update:selected', selectedCopy)
      });

      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        let index = selectedCopy.indexOf(name);
        selectedCopy.splice(index, 1);
        this.eventBus.$emit('update:selected', selectedCopy);
        this.$emit('update:selected', selectedCopy)
      });
    }
  };
</script>
<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .s-collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>
<!--1. 点击面板，展开内容-->
<!--2. 再次点击面板，关闭内容-->
<!--3. 点击第一个面板，展开第一个内容，点击第二个面板，第一个内容关闭，第二个内容展开-->

<!--<s-collaps accordion><s-collaps-item name="1"></s-collaps-item></collaps>-->