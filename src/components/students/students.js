import { Table,Layout,Menu, Card, Skeleton } from "antd";
import { useEffect, useState } from "react";
import {useParams,useHistory} from 'react-router-dom'
import { getCollegeDetails } from "../../utils/fetchCalls";
import '../colleges/colleges.css'
import './students.css'
const { Sider, Content } = Layout;

export const Students = () => {
    const {id} = useParams();
    const history = useHistory();
    const [collegeStudents,setCollegeStudents] = useState(null)
    const [collegeDetails,setCollegeDetails] = useState(null);
    const [similarColleges,setSimilarColleges] = useState(null);
    const [loading,setLoading] = useState(true);
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
    const updateCollegeStudents = (res) => {
        setCollegeStudents(res)
    }
    useEffect(() =>{
        getCollegeDetails(id).then(res =>{
            setCollegeDetails(res.collegeDetails);
            updateCollegeStudents(res.collegeStudents);
            setSimilarColleges(res.similarColleges);
            setLoading(false)
        })

    },[id]);

    return(
        <Layout>
        <Sider trigger={null} collapsible={false}>
          <h2 style={{color:'white',textAlign:'center'}}>College Details</h2>
          <Card>
            <h6 className="detail">Name: {collegeDetails?.name}</h6>
            <h6 className="detail">State: {collegeDetails?.state} </h6>
            <h6 className="detail">Country: {collegeDetails?.country}</h6>
            <h6 className="detail">Number of Students: {collegeDetails?.numStudents}</h6>

          </Card>

        </Sider>
        <Layout className="site-layout">
        
          <Content
            className="site-layout-background"
            style={{
              minHeight: 280
            }}
          >
              <Skeleton active loading={loading}>
                <Table 
                  className= "custom-table"
                  bordered
                  dataSource={collegeStudents} 
                  rowKey = "_id"
                  columns={columns} 
              />
            </Skeleton>
          </Content>
        </Layout>
        <Sider trigger={null} collapsible={false}>
        <h2 style={{color:'white',textAlign:'center'}}>Similar colleges</h2>
          <Menu theme="dark" mode="inline">
            {
              similarColleges?.map(college=><h6 onClick={()=>history.push(`/colleges/${college._id}`)} className="similar-college" key={college._id}>{college.name}</h6>)
            }
          </Menu>
        </Sider>
      </Layout>
    )
}
