import { Table } from 'react-bootstrap';

const Payment = () => {
  return (
    <div className="table-responsive">
      <Table bordered hover >
        <thead>
          <tr>
            <th>Duration</th>
            <th>Offer</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3 months</td>
            <td>7 days extra</td>
            <td><div className='rs'>₹ 2997 <span>(GST Extra)</span></div></td>
          </tr>
          <tr>
            <td>6 months</td>
            <td>15 days extra</td>
            <td><div className='rs'>₹ 5994 <span>(GST Extra)</span></div></td>
          </tr>
          <tr>
            <td>12 months</td>
            <td>30 days extra</td>
            <td><div className='rs'>₹ 11988 <span>(GST Extra)</span></div></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Payment;