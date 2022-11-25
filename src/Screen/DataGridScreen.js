import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Group, Inject, Page, Sort, Toolbar, } from '@syncfusion/ej2-react-grids';
// import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { useEffect, useState } from 'react';
import { deleteDemo, getDemo, saveDemo, updateDemo } from '../ApiCalls/ApiCalls';



function DataGrid() {

    const [data, setData] = useState()



    // const data = new DataManager({
    //     adaptor: new UrlAdaptor(),
    //     insertUrl: baseUrl + '/demo/insert',
    //     removeUrl: baseUrl + '/demo/delete',
    //     updateUrl: baseUrl + '/demo/update',
    //     url: baseUrl + '/demo',

    // })
    useEffect(() => {
        const getData = async () => {
            const data = await getDemo()
            setData(data);
        }
        getData();
    }, [])

    console.log(data, 'data')
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, }
    const toolbarOption = ["Add", "Delete", "Edit", "Update", "Cancel"]
    const pageSettings = { pageSize: 5 };

    function refreshGrid() {
        getDemo()
            .then(
                data => {
                    setData(data);
                }
            );
    }

    function dataSourceChanged(state) {
        console.log(state)
        if (state.action === "add") {
            saveDemo(state.data).then(res => refreshGrid())
        }
        else if (state.action === "edit") {
            updateDemo(state.data).then(res => refreshGrid())
        }
        else if (state.requestType === "delete") {
            deleteDemo(state.data[0]).then(res => refreshGrid())
        }

    }

    return <GridComponent
        dataSource={data} width="Full"
        allowPaging={true}
        pageSettings={pageSettings}
        allowFiltering={true}
        editSettings={editOptions}
        toolbar={toolbarOption}
        allowTextWrap={true}
        dataSourceChanged={dataSourceChanged}

    >
        <ColumnsDirective>
            <ColumnDirective field='first_name' width='100' textAlign="Left" />
            <ColumnDirective field='last_name' width='100' textAlign='Left' />
            <ColumnDirective field='phone' width='100' textAlign="Left" editType='numericedit' />
            <ColumnDirective field='education' width='100' format="C2" textAlign="Left" />
            <ColumnDirective field='developer' width='100' textAlign='Left' />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group, Edit, Toolbar]} />
    </GridComponent>
};
export default DataGrid;