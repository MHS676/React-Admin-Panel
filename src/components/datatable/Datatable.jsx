import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {
    const actionColumn = [{ field: "action", headerName: "Action", width: 200, renderCell: () => {
        return (
            <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        );
    }}];

    return (
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9} // Display 9 rows per page
                rowsPerPageOptions={[9]} // Display an option to select 9 rows per page
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
