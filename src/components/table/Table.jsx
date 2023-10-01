import "./table.scss";
import React from "react"; // Import React if not already imported
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1122548,
      product: "Acer Nitro 5",
      img: "https://www.mrcomputerservices.co.za/wp-content/uploads/2020/11/Acer-Nitro-5-AN515-54-photogallery-03-1.png",
      customer: "Jhon Smith",
      date: "1 March",
      amount: "877",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2525488,
      product: "Play Station 5",
      img: "https://store.sony.co.nz/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png?sw=442&sh=442&sm=fit",
      customer: "Daneil joe",
      date: "1 March",
      amount: "800",
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2312545,
      product: "Redragon s101",
      img: "https://redragonshop.com/cdn/shop/products/redragonkeyboardandmouses101-3.png?v=1619079452",
      customer: "Jhon Smith",
      date: "1 March",
      amount: "50",
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2136545,
      product: "Razer Blade 15",
      img: "https://assets3.razerzone.com/X_JIbJcZVdafCqHrPaAzvh_qaew=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
      customer: "Jhon Doe",
      date: "1 March",
      amount: "650",
      method: "Online",
      status: "Approved",
    },
    {
      id: 2548973,
      product: "Razer Blade 15",
      img: "https://product.hstatic.net/200000722513/product/15_l_806008e57ad44bd29536cc54133df6d8_454fc13085834783b5894c99e591a15c_d2a2e972645646709e4bb9395aacd5eb.png",
      customer: "Jhon Leo",
      date: "1 March",
      amount: "2000",
      method: "Online",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
  <TableCell>{row.id}</TableCell>
  <TableCell className="tableCell">
    <div className="cellWrapper">
      <img src={row.img} alt="" className="image" />
      {row.product} {/* Product name */}
    </div>
  </TableCell>
  <TableCell className="tableCell">{row.customer}</TableCell>
  <TableCell className="tableCell">{row.date}</TableCell>
  <TableCell className="tableCell">{row.amount}</TableCell>
  <TableCell className="tableCell">{row.method}</TableCell>
  <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
</TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;


