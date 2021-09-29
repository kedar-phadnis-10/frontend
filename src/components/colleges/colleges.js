import { Table ,Layout, Skeleton} from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getColleges } from "../../utils/fetchCalls";
import './colleges.css';
const {Content,Header} = Layout;
export function Colleges(){

    const [collegeDetails, setCollegeDetails] = useState(null);
    const [loading,setLoading] = useState(true);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Year Founded',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'Number of Students',
            dataIndex: 'numStudents',
            key: 'numStudents',
        },
    ];

    function updateCollegeDetails(res){
        setCollegeDetails(res);
    }

    useEffect(() =>{
        getColleges().then(res =>{
            updateCollegeDetails(res);
            setLoading(false);
        })

    }, [])

    const history = useHistory();
    return(

        <Layout>
            <Header>
                <h1 style={{color:'white',textAlign:'center'}}>Colleges</h1>
            </Header>
            <Content 
                style={{
                    margin:'0 auto',
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'center'
                }}
                
            >
            <Skeleton
                active
                loading={loading}
            >
            <Table 
                className= "custom-table"
                bordered
                dataSource={collegeDetails} 
                rowKey = "_id"
                onRow={(record,rowIndex)=>{
                    return {
                        onClick:()=>{
                            history.push(`/colleges/${record._id}`);
                        }
                    }
                }} 
                columns={columns} 
            />
            </Skeleton>
            </Content>
        </Layout>

    )
}
