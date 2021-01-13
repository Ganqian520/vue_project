<template>
<!-- huodongsh -->
  <div id="box" v-if="datalist">
    <div id="content" v-for="data in datalist" :key="data.id">
      <div>
        <img :src="data.titlepictureurl" class="l" />
      </div>
      <div class="clear">
        <span class="l" style="font-size: 18px; font-weight: bold">{{
          data.title
        }}</span>
        <i class="el-icon-time r">{{ data.starttime }}</i>
        <i class="el-icon-time r">{{ data.endtime }}</i>
      </div>
      <div>{{ data.content }}</div>
      <div
        style="
          position: absolute;
          top: 140px;
          text-align: left;
          left: 190px;
          color: #999999;
        "
      >
        <i class="el-icon-user-solid" style="font-size: 18px"></i>
        <span style="margin: 0 10px">{{ data.organizerusername }}</span>
      </div>
      <!-- <span>{{ data.maxpeople }}</span>
      <span> {{ data.nowpeople }}</span> -->
      <el-button @click="pass(data.id, data.organizerusername)">通过</el-button>
      <el-button @click="shanchu(data.id)" class="shanchu">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [],
    };
  },
  methods: {
    pass(id, or) {
      return this.axios
        .post("http://127.0.0.1:8080/Activity/auditsetActivitystatu_1", {
          id: id,
          organizerusername: or,
        }) //当页面加载时,返回
        .then((ret) => {
          this.datalist = ret.data;
          this.$router.go(0);
        });
	},
	shanchu(id){
				return this.axios.post('http://127.0.0.1:8080/Activity/deleteActivity',{
					id:id
				}).then((ret) => {
		  console.log(ret.data);
		  if(ret.data.context=='删除成功') {
			  alert('删除成功！');
			  this.$router.go(0);
		  }
        });
			}
  },
  mounted() {
    return this.axios
      .post("http://127.0.0.1:8080/Activity/getAllstatu0Activity") //当页面加载时,返回
      .then((ret) => {
        this.datalist = ret.data;
        console.log(ret.data);
      });
  },
};
</script>

<style scoped lang="less">
#box {
  // border: 1px solid black;
  width: 300px;
  // height: 500px;
}
.r {
  float: right;
}
.l {
  float: left;
}
.clear::after {
  content: "";
  display: block;
  clear: both;
}
#content {
  border-bottom: 1px #ccc solid;
  position: relative;
  width: 100%;
  // margin-right: 200px;
  // height: 200px;
  // border: solid 1px black;
  box-sizing: border-box;
  padding: 25px 25px;
  img {
    margin-right: 10px;
    width: 160px;
    height: 140px;
  }
}
</style>
