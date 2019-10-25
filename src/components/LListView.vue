<template>
  <ul class="list-view">
    <li class="">
      <img class="" src="~@/assets/iconmonstr-steam-4@2x.png" width="56" height="56">
      <span class="-title">
        Brunch this weekend?
        <span class="-subtitle"><span class="">Ali Connors</span> - I'll be in your neighborhood doing errands this weekend. Do you want ...</span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LListView'
}
</script>

<style lang="sass" scoped>
.list-view
  list-style-type: none

  .-title
    text-align: left
  
  .-subtitle
    text-align: left

</style>