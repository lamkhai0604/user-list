import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table/Table";
import AddUser from "./components/AddUser";
import DataUser from "./components/Table/Data.json"

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
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      data: DataUser,
      textData: ""
    };
  }

  changeStatus = () => {
    this.setState({ status: !this.state.status });
  };

  getDataText = (dl) => {
    this.setState({
      textData: dl
    });
    console.log("Father's data received is " + this.state.text);
  }
  // 1. Cách search tên trong input để lấy dữ liệu
  // 2. Gọi result là 1 tập hợp rỗng, vì ban đầu không có dữ liệu
  // 3.Sau đó tim dữ liệu trong mảng data đã khai báo trong this.state ở hàm getDataText để lấy từng phần tử dc truyềnn vào = hàm forEach dùng hàm arrow function..
  // 4. Ta sẽ gọi tên từng phần tử đi qua = item, sẽ kiểm tra = indexOf nếu mà item.name trong file json dc gọi từ text thông qua hàm getDataText phải khác -1 (khác -1 = có tồn tại)
  // 5. Nếu đã tìm dc giá trị thông qua hàm forEach thì đẩy những giá trị đó vào result.
  // 6. Để sau khi ra kết quả và trên giao diện chỉ hiển thị những kết quả tìm dc, thì cho kết quả vào thay dữ liệu truyền vào trước đó, để child chỉ trả về kết quẩ đã thao tác ở cha.
  // 7. Sau đó để khi F5 thì luôn hiển thị table thì phải khởi tạo textData là rỗng (vì khi tìm rỗng thì luôn sẽ trả về 5 giá trị)
  // 8. Để trong lúc search hiển thị ra kết quả luôn thì trong input của child, gọi luôn hàm của cha thông qua check, và truyền vào dữ liệu trung gian tempValue
  render() {
    // Trước khi render tiến hành tìm kiếm theo từ khóa.
    let result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.textData) !== -1) {
        result.push(item);
      } 
    })
    console.log(result);
    return (
      <div>
        <Header />

        <div className="searchForm">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Searchbar
                  check={(dl) => this.getDataText(dl)}
                  changeButton={() => this.changeStatus()}
                  status={this.state.status}
                />
              </div>
              <div className="col-12">
                <hr />
              </div>
              
                {/* <Table data={this.state.data} /> */}
                <Table data={result} />

                <AddUser status={this.state.status} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
