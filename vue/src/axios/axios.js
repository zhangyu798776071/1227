export const axios = {
    data() {
        return {
            list: [],
            total: 0,
            form: {
                name: "",
                sex: "",
                age: ""
            },
            id: 0,
            dialogVisible: false,
            dialogVisible1: false,
            form1: {
                name: "",
                sex: "",
                age: ""
            },
        }
    },
    methods: {
        getList() {
            this.axios({
                url: "http://localhost:3000/people",
                method: "get"
            }).then(res => {
                // console.log("123" + JSON.stringify(res.data));
                this.total = res.data.length;
                this.list = res.data;

                // this.filter.total = res.data.total;
            });
        },
        handleEdit(index, item) {
            //this.shows=true
            this.dialogVisible = true;
            this.axios({
                url: `http://localhost:3000/people/${item.id}`,
                method: "get"
            }).then(res => {
                // console.log(res.data)

                this.form = res.data;

                //this.shows = true;
                this.id = item.id;
            });
            // console.log(item);
        },
        handleDelete(index, item) {
            this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                .then(() => {
                    this.axios({
                        url: `http://localhost:3000/people/${item.id}`,
                        method: "delete"
                    }).then(res => {
                        this.getList();
                    });
                    this.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        onSubmit() {
            this.axios({
                url: `http://localhost:3000/people/${this.id}`,
                method: "put",
                data: this.form
            }).then(res => {
                // this.$message({
                //   message: "恭喜你，修改成功",
                //   type: "success"
                // });
                // this.shows = false;

                this.getList();
                this.dialogVisible = false;

                //this.id = 0;
            });

            //console.log("submit!");
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
    }

}