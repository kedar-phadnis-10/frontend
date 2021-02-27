import { Table } from "antd";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { getCollegeDetails } from "../../utils/fetchCalls";
import '../colleges/colleges.css'
export function Students(){
    const {id} = useParams();
    console.log(id);
    const [collegeStudents,setCollegeStudents] = useState(null)
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
        console.log("mountededede...")
        getCollegeDetails(id).then(res =>{
            
            updateCollegeStudents(res.collegeStudents);
        })

    });

    return(
        <div className = "container">
            <Table bordered dataSource={collegeStudents} columns={columns} rowKey = "_id" className= "custom-table"/>
        </div>
    )
}
