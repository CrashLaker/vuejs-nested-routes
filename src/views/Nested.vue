<template>
    <div id="nested">
        <h2>Nested route</h2>
        <router-link to="/nested/nested1">nested1</router-link><br>
        <router-link to="/nested/nested2">nested2</router-link><br>
        <router-link to="/nested/nested3">nested3</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'nested',
    data(){
        return {

        }
    }
}
</script>