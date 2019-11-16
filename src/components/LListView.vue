<template>
  <ul class="list-view">
    <li class="-item">
      <img class="-avatar" :src="require(`@/assets/${imgUrl}`)">
      <div class="-content" :class="status ? '' : '-content-disabled'">
        <p class="-title" :class="status ? '' : '-disabled'">{{ title }}</p>
        <p class="-subtitle">{{ date }}</p>
      </div>
      <div class="-action" :class="status ? '' : '-action-width'">
        <i v-if="status" class="-menu fas fa-ellipsis-v"></i>
        <slot v-else name="connect"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LListView',
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.list-view
  margin-top: 18.1px
  display: -webkit-box
  display: -webkit-flex
  display: -ms-flexbox
  display: flex
  -webkit-flex-wrap: wrap
  -ms-flex-wrap: wrap
  flex-wrap: wrap
  -webkit-box-flex: 3
  -webkit-flex: 3
  -ms-flex: 3
  flex: 3

  .-item
    display: -webkit-box
    display: -webkit-flex
    display: -ms-flexbox
    display: flex
    -webkit-flex-wrap: wrap
    -ms-flex-wrap: wrap
    flex-wrap: wrap
    width: 100vw

    .-avatar
      -webkit-align-self: stretch
      -ms-flex-item-align: stretch
      align-self: stretch
      display: inline-block
      width: 52.6px
    
    .-content-disabled
      width: 45vw !important

    .-content
      margin: auto 0
      margin-left: 8.4px
      width: 70vw
    

      .-title
        text-align: left
        font-size: 13px
        font-weight: 500
        font-stretch: normal
        font-style: normal
        line-height: 1.15
        letter-spacing: normal
        text-align: left
        color: #633280

      .-disabled
        color: #d6d6d6 !important

      .-subtitle
        font-size: 11px
        font-weight: 600
        font-stretch: normal
        font-style: normal
        line-height: 1.36
        letter-spacing: normal
        color: #d6d6d6
        text-align: left

    .-action
      justify-content: flex-end
      -webkit-box-pack: end
      -webkit-justify-content: flex-end
      -ms-flex-pack: end
      justify-content: flex-end

      .-menu
        color: #633280
        cursor: pointer

    .-action-width
      width: 15vw !important

      .-menu
        margin: auto 0
</style>