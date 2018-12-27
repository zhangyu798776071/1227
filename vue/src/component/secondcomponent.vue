<template>
    <div class="all">
        
       <div class="block">
              <el-table
              ref='multipleTable'
      :data="list.slice((this.CurrentChange-1)*this.SizeChange,(this.CurrentChange)*this.SizeChange)"
      style="width: 100%"
       tooltip-effect="dark"
    @selection-change="handleSelectionChange"
       >
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button type="success" @click="addData">添加数据</el-button>
    </div>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[6, 9, 12, 18]"
            :page-size="6"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>

        
         <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="年龄">
            <el-input v-model="form.age" style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="form.name" style="width:150px"></el-input>
        </el-form-item>
         
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex" @change='sex'>
            <el-radio label="boy"></el-radio>
            <el-radio label="girl"></el-radio>
            </el-radio-group>
        </el-form-item>
        
        </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                 <el-button type="primary" @click="onSubmit" :plain="true">修改</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible1"
            width="30%"
            >
            <el-form ref="form1" :model="form1" label-width="150px">
            <el-form-item label="年龄">
            <el-input v-model="form1.age" style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="form1.name" style="width:150px"></el-input>
        </el-form-item>
         
        <el-form-item label="性别">
            <el-radio-group v-model="form1.sex" @change='sex'>
            <el-radio label="boy"></el-radio>
            <el-radio label="girl"></el-radio>
            </el-radio-group>
        </el-form-item>
        
        </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                 <el-button type="primary" @click="onSubmit1" :plain="true">修改</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<!-- the js -->

<script type="text/javascript">
import {axios} from '../axios/axios.js';
export default {
    mixins:[axios],
  data() {
    return {
      currentPage4: 1,
      // list: [],
      // total: 0,
      CurrentChange: 1,
      SizeChange: 6,
      //shows: false,
      // form: {
      //   name: "",
      //   sex: "",
      //   age: ""
      // },
      // form1: {
      //   name: "",
      //   sex: "",
      //   age: ""
      // },
      // id: 0,
      // dialogVisible: false,
      // dialogVisible1: false
    };
  },
  methods: {
    handleSizeChange(val) {
      this.SizeChange = val;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.CurrentChange = val;
      // console.log(`当前页: ${val}`);
    },

//  getList() {
//         this.axios({
//           url: "http://localhost:3000/people",
//           method: "get"
//         }).then(res => {
//           // console.log("123" + JSON.stringify(res.data));
//           this.total = res.data.length;
//           this.list = res.data;
  
//           // this.filter.total = res.data.total;
//         });
//       },
    
    handleSelectionChange(e) {
      console.log(e);
    },
    toggleSelection() {
      this.$refs.multipleTable.clearSelection();
    },

    // handleEdit(index, item) {
    //   //this.shows=true
    //   this.dialogVisible = true;
    //   this.axios({
    //     url: `http://localhost:3000/people/${item.id}`,
    //     method: "get"
    //   }).then(res => {
    //     // console.log(res.data)

    //     this.form = res.data;

    //     //this.shows = true;
    //     this.id = item.id;
    //   });
    //   // console.log(item);
    // },
    // handleDelete(index, item) {
    //   this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       this.axios({
    //         url: `http://localhost:3000/people/${item.id}`,
    //         method: "delete"
    //       }).then(res => {
    //         this.getList();
    //       });
    //       this.$message({
    //         type: "success",
    //         message: "删除成功!"
    //       });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除"
    //       });
    //     });
    // },
    sex(e) {
     // console.log(e);
    },
    // onSubmit() {
    //   this.axios({
    //     url: `http://localhost:3000/people/${this.id}`,
    //     method: "put",
    //     data: this.form
    //   }).then(res => {
    //     // this.$message({
    //     //   message: "恭喜你，修改成功",
    //     //   type: "success"
    //     // });
    //     // this.shows = false;

    //     this.getList();
    //     this.dialogVisible = false;

    //     //this.id = 0;
    //   });

    //   //console.log("submit!");
    // },
    addData() {
      this.dialogVisible1 = true;
      // if (this.$refs.form1!='undefined') {
      //   this.$refs.form1.resetFields();
      // }
      //
      
    this.$nextTick(()=>{
      this.$refs.form1.resetFields();
    });
    },
    onSubmit1() {
      this.axios({
        url: `http://localhost:3000/people`,
        method: "post",
        data: this.form1
      }).then(res => {
        //this.$Message.success("数据添加成功");
        this.dialogVisible1 = false;

        this.getList();
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<!-- the vue style-->
<style>
</style>

