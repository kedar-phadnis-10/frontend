import { Table,Layout,Menu } from "antd";
import { useEffect, useState } from "react";
import {useParams,useHistory} from 'react-router-dom'
import { getCollegeDetails } from "../../utils/fetchCalls";
import '../colleges/colleges.css'
import './students.css'
const { Sider, Content } = Layout;

export function Students(){
    const {id} = useParams();
    const history = useHistory();
    const [collegeStudents,setCollegeStudents] = useState(null)
    const [collegeDetails,setCollegeDetails] = useState(null);
    const [similarColleges,setSimilarColleges] = useState(null);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Year of Batch',
            dataIndex: 'year',
            key: 'year',
        }
    ];
    function updateCollegeStudents(res){
        setCollegeStudents(res)
    }
    useEffect(() =>{
        getCollegeDetails(id).then(res =>{
            setCollegeDetails(res.collegeDetails);
            updateCollegeStudents(res.collegeStudents);
            setSimilarColleges(res.similarColleges);
        })

    },[id]);

    return(
        <Layout>
        <Sider trigger={null} collapsible={false}>
          <h4 style={{color:'white',textAlign:'center'}}>College Details</h4>
          <Menu theme="dark" mode="inline">
            <h6 className="detail">Name: {collegeDetails?.name}</h6>
            <h6 className="detail">State: {collegeDetails?.state} </h6>
            <h6 className="detail">Country: {collegeDetails?.country}</h6>
            <h6 className="detail">Number of Students: {collegeDetails?.numStudents}</h6>

          </Menu>
        </Sider>
        <Layout className="site-layout">
        
          <Content
            className="site-layout-background"
            style={{

              minHeight: 280,
            }}
          >
              <Table 
                className= "custom-table"
                bordered
                dataSource={collegeStudents} 
                rowKey = "_id"
                columns={columns} 
            />
          </Content>
        </Layout>
        <Sider trigger={null} collapsible={false}>
        <h4 style={{color:'white',textAlign:'center'}}>Similar colleges</h4>
          <Menu theme="dark" mode="inline">
            {
              similarColleges?.map(college=><h6 onClick={()=>history.push(`/colleges/${college._id}`)} className="detail" key={college._id}>{college.name}</h6>)
            }
          </Menu>
        </Sider>
      </Layout>
    )
}
