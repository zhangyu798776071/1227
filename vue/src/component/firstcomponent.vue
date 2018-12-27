<template>
    <div class="all" >
        
        <div 
        v-for="(item,index) in data"
        :key="index"
        >
            <div class="xianzi"><p >{{item.title}}</p><p>{{item.date}}</p></div>
            <div><img :src="item.thumbnail_pic_s" alt=""></div>
        </div>
        
    </div>
</template>
<!-- the js -->
<script type="text/javascript">
    export default{
        data(){
            return {
              data:''
            }
        },
        methods:{
            getMockData(){
                this.axios({
                    url:'/news/index',
                    method:'POST'
                }).then(res=>{
                    this.data=res.data.articles
                    console.log(res)
                })
            }
        },
        mounted(){
            this.getMockData()
        }
    }

</script>

<!-- the vue style-->
<style  scoped>
.all{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap
}
.all>div{
width: 350px;
height: 150px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FFFACD;
color: #999;
border-radius: 10px;
padding: 0 10px;
margin: 10px;
transition: margin-top 0.5s ;
box-shadow: 1px 1px 6px #999,inset -1px -1px 6px #999

}
.all>div:hover{
    margin-top: -5px
}
.all>div>div>img{
    width: 100px;
    height: 100px;
    object-fit: cover
}
.xianzi{
   
  width: 60%;
  display: flex;
  flex-direction: column;

}
.xianzi p{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>


