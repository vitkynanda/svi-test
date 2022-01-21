import MaterialTable from "material-table";
import { CircularProgress, Box } from "@mui/material";
import tableIcons from "../../Icons/tableIcons";

const TrashTable = ({ voucherData, isLoading }) => {
  const newData = [];
  const renderLoading = isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        padding: "10px",
        borderRadius: 2,
        backgroundColor: "white",
        marginBottom: 1,
      }}
    >
      <div className="flex space-x-3 items-center w-full bg-blue-100 p-4 rounded-md mx-3">
        <CircularProgress size={20} />
        <p className="text-gray-500 text-sm ">Updating data ...</p>
      </div>
    </Box>
  ) : null;
  return (
    <>
      {renderLoading}
      <MaterialTable
        localization={{
          toolbar: {
            searchPlaceholder: "Search Table",
          },
        }}
        isLoading={isLoading}
        icons={tableIcons}
        title="Trash Table"
        columns={[
          {
            title: "No.",
            field: "number",
          },
          {
            title: "Title",
            field: "code",
          },
          {
            title: "Category",
            field: "keterangan",
            width: "50%",
          },
          {
            title: "Date",
            field: "date",
            render: (rowData) => <p>Test</p>,
          },
          {
            title: "Action",
            field: "user",
            render: (rowData) => (
              <p>
                {rowData.user.slice(0, 1).toUpperCase() + rowData.user.slice(1)}
              </p>
            ),
          },
        ]}
        data={newData}
        options={{
          exportButton: true,
          pageSizeOptions: [10, 20],
          pageSize: 10,
          searchFieldPlaceholder: "Search Table",
        }}
      />
    </>
  );
};

export default TrashTable;
