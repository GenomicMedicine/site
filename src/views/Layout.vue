<template>
    <!-- logo -->
    <TopLogo/>
    <!-- header navigator-->
    <HeaderNav/>
    <!-- main body -->
    <router-view/>
    <!-- foot -->
    <Foot/>
</template>

<script>
import TopLogo from '@/components/TopLogo.vue';
import HeaderNav from '@/components/HeaderNav.vue';
import Foot from '@/components/Foot.vue';
export default {
    components: {
        TopLogo,
        HeaderNav,
        Foot
    }
};
</script>

<style lang="less" scoped>
</style>