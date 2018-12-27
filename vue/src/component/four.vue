<template>
  <div class="all" >
    <div class="tanqiu" @click="toMove" ref="tanqiu">{{date}}</div>
  </div>
</template>
<script>
// import AA from './aaa.vue'
export default {
  
  data() {
    return {
     
      date:1,
      timer:null,
      l:'',
      t:''
    };
  },
  computed: {},
  components: {
    // aaaa:AA
  },
  methods: {

    toMove() {
     
    },
    
  },
  watch: {
   
  },
  created() {},
  mounted() {
    //声明一个变量指向vue实例this,保证作用域一致

  }
 
};
</script>

<style>
.tanqiu {
  background-color: aqua;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 80;
  left: 0
}
</style>
