import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table/Table";
import AddUser from "./components/AddUser";
import DataUser from "./components/Table/Data.json";

// npm i uuid đã hỗ trọ cách tạo id để ko trùng
const { v4: uuidv4 } = require("uuid");

class App extends Component {
  // Cách gọi từ cha sang components con liên quan
  // 1. Set boolean ở cha
  // 2. Sau đó cho AddUser giá trị false (khi f5 thì ko hiển thị form) = cách truyền props cho AddUserAddUser
  // 3. Sau đó qua AddUser gọi hàm có if else (status là false ko hiển thị thì if đầu tiền phải là true)
  // 4. Sau đó gọi hàm cho nút cần xử lí, nếu ấn Add thì sẽ hiện ra form, ấn close thì sẽ mất form
  // 5. Truyển prop cho SearchBar nơi có 2 nút cần xử lí = cách truyền vào 1 arrow function
  // 6. Ở 2 nút trong SearchBar gọi props từ cha thông qua onClick.

  // Cách gọi api từ file json
  // 1. Tạo file json.
  // 2. Gọi file json trong app = cách đặt giá trị trong this.state,sau đó truyền vào components cần dùng, ở đây là table.
  // 3. Sau đó qua file table tạo hàm map để lấy dữ liệu ra.

  // Cách lấy dữ liệu từ child sang cha.
  // 1. Từ cha truyên cho child 1 arrow funtion có dữ liệu vào.
  // 2. Sau đó từ child tạo 1 dữ liệu trung gian thông qua constructor.
  // 3. Sau đó ở nơi cần thao tác tạo 1 arrow function có tham số của cha và dữ liệu truyên vào thông qua function là dữ liệu trung gian của child.

  // Cách làm chức năng thêm mới thành viên.
  //Phân tich logic:
  //Khi ấn nút thêm sẽ hiện ra bảng add user sau đó khi điền đủ thông tin và nhấn nút add thì sẽ lấy dc tất cả nội dung.
  //Sau khi lấy dc nội dung sẽ đóng gói thành 1 dữ liệu và gửi thông tin lên App.js
  //Sau khi App.js lấy dc thông tin sẽ đẩy vào file json và in ra đữ liệu mới
  //Cách làm:
  // 1. Sử dụng hàm onChange trong AddUser để lấy mảng dữ liệu = hàm e.target.value & e.target.name. Cho từng input giá trị name="json file"
  // 2. Sau đó lưu trong state, để sau này cần thì vào state lấy dữ liệu ra: trước tiên khởi tạo những giá trị trong json là 1 rỗng
  // 3. kết nối app với addUser = cách khai báo 1 hàm getNewUserData trong app.js

  //Cách xóa input khi add xong.
  //Phân tích:
  // 1. thêm 1 biến = ""
  // 1 Thêm nút reset

  //Cách sửa thông tin
  //Phân tích logic:
  // 1. kết nối User với App
  // 2.Click vào nút sửa lấy được thông tin thành viên cần sửa
  // 3.Tạo form và load nội dung cần sửa vào form
  // 4. Ấn submit và lưu thông tin vê appjs.
  //Cách làm:
  // 1. connect app với table trước thông qua props.
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      data: DataUser,
      textData: "",
      editUserStatus: false,
      userObj: {}
    };
  }

  editUser = (user) => {
    this.setState({
      userObj: user
    });
    console.log(user);
  };

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };

  changeStatus = () => {
    this.setState({ status: !this.state.status });
  };

  //Truyền cho hàm 3 giá trị từ file json
  getNewUserData = (name, phone, level) => {
    // Đóng gói giá trị trong 1 obj
    let item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.level = level;
    //Gọi 1 tên mới thay cho dữ liệu ở JSON.
    let items = this.state.data;
    //Sau đó cập nhật lại data mới (data trước là file JSON, sau khi cập nhật sẽ thêm đc user)
    //Sau đó push tất cả những dữ liệu đã lấy dc từ item.
    items.push(item);
    this.setState({
      data: items,
    });
  };

  getDataText = (dl) => {
    this.setState({
      textData: dl,
    });
  };
  // 1. Cách search tên trong input để lấy dữ liệu
  // 2. Gọi result là 1 tập hợp rỗng, vì ban đầu không có dữ liệu
  // 3.Sau đó tim dữ liệu trong mảng data đã khai báo trong this.state ở hàm getDataText để lấy từng phần tử dc truyềnn vào = hàm forEach dùng hàm arrow function..
  // 4. Ta sẽ gọi tên từng phần tử đi qua = item, sẽ kiểm tra = indexOf nếu mà item.name trong file json dc gọi từ text thông qua hàm getDataText phải khác -1 (khác -1 = có tồn tại)
  // 5. Nếu đã tìm dc giá trị thông qua hàm forEach thì đẩy những giá trị đó vào result.
  // 6. Để sau khi ra kết quả và trên giao diện chỉ hiển thị những kết quả tìm dc, thì cho kết quả vào thay dữ liệu truyền vào trước đó, để child chỉ trả về kết quẩ đã thao tác ở cha.
  // 7. Sau đó để khi F5 thì luôn hiển thị table thì phải khởi tạo textData là rỗng (vì khi tìm rỗng thì luôn sẽ trả về 5 giá trị)
  // 8. Để trong lúc search hiển thị ra kết quả luôn thì trong input của child, gọi luôn hàm của cha thông qua check, và truyền vào dữ liệu trung gian tempValue

  // Cách lấy dữ liệu khi edit user
  //1.Trong appjs định nghĩa 1 hàm lcho phép lưu trữ user trong state, sau dó đẩy dữ liệu vào đối tượng cần sửa
  //2. Truyền từ cha sang con từ con sang cháu,

  // Cách submit để thay đổi dữ liệu trong edit
  //1.Ấn nút lấy được thông tin đã thay đổi (sử dung state lưu trữ thông tin trong quá trình sửa (state ban đầu sẽ là thông tin cần sửa))
  render() {
    // Trước khi render tiến hành tìm kiếm theo từ khóa.
    let result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.textData) !== -1) {
        result.push(item);
      }
    });
    return (
      <div>
        <Header />

        <div className="searchForm">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">

                <Searchbar
                  userObj= {this.state.userObj}
                  check={(dl) => this.getDataText(dl)}
                  changeButton={() => this.changeStatus()}
                  status={this.state.status}
                  editUserStatus={this.state.editUserStatus}
                  changeStatusEdit={() => this.changeEditUserStatus()}
                />
              </div>

                <hr />

              <Table
                data={result}
                editToTable={(user) => this.editUser(user)}
                changeStatusEdit={() => this.changeEditUserStatus()}
              />

              <AddUser
                status={this.state.status}
                addUser={(name, phone, level) =>
                  this.getNewUserData(name, phone, level)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
