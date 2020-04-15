<template>
    <div class="s-tabs-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        inject: ['eventBus']
    }
</script>
<style lang="scss">

</style>