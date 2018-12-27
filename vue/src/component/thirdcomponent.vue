<template>
    <div class="all">
     <el-button @click="increment(2)" type="success" round>点我+2</el-button><!-- mutations -->
  <el-button type="success" round>点我+5</el-button>
  <el-button  type="success" round @click="shows">点我改变</el-button>
  {{show}}
  {{count}}
 
    </div>
</template>
<script>
import {mapGetters,mapMutations,mapActions,mapState} from 'vuex'
export default {
     data() {
      return {
        
      }
    },
    methods: {
          ...mapMutations([
            'increment',
            'shows'
          ])
      // count(){
      //  return this.$store.commit('increment',3)
      // },
      // del(){
      //   return this.$store.getters.del
      // }
    },
    computed:{
      ...mapState([
        'count',
        'show'
      ]),
      ...mapGetters(
        ['del']
      )
    }
}
</script>
