import React, { Component } from 'react';
import {Table} from 'antd'
import BtnModal from '@/Ant/AntDemo/BtnModal'
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '分类',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '问题',
  key: 'action',
},{
  title: '答案',
  key: 'action',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

class Questioncount extends Component {
  render() {
    return (
      <div>
        
        <Table 
          title={()=>(<h2 style={{textAlign:'left'}}>问题汇总
            <BtnModal/>
          </h2>)}
          expandedRowRender={data => <p style={{ margin: 0 }}>{data.address}</p>}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 1 }} 
        >
        </Table>
      </div>
    )
  }
};
export default Questioncount;
