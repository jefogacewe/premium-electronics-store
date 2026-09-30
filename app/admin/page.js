const summaryCards = [
  { label: 'Total revenue', value: '$148.2k', change: '+18.2%' },
  { label: 'Orders', value: '2,483', change: '+12.1%' },
  { label: 'Customers', value: '1,290', change: '+8.6%' },
  { label: 'Conversion', value: '4.7%', change: '+1.3%' },
];

const recentOrders = [
  { id: '#1042', customer: 'Sara Malik', amount: '$1,299', status: 'Paid' },
  { id: '#1043', customer: 'Ali Rehman', amount: '$349', status: 'Processing' },
  { id: '#1044', customer: 'Ayesha Khan', amount: '$899', status: 'Shipped' },
  { id: '#1045', customer: 'Hassan Ali', amount: '$459', status: 'Paid' },
];

export default function AdminPage() {
  return (
    <div className="container page-section">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Admin</p>
          <h2>Store overview</h2>
        </div>
      </div>

      <div className="stats-grid">
        {summaryCards.map((card) => (
          <div key={card.label} className="stat-card">
            <span>{card.label}</span>
            <h3>{card.value}</h3>
            <strong>{card.change}</strong>
          </div>
        ))}
      </div>

      <div className="admin-panel">
        <div className="panel-box">
          <h3>Recent orders</h3>
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className="status-badge">{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel-box">
          <h3>Inventory health</h3>
          <ul className="inventory-list">
            <li>
              <span>Audio</span>
              <strong>92%</strong>
            </li>
            <li>
              <span>Gaming</span>
              <strong>74%</strong>
            </li>
            <li>
              <span>Smart home</span>
              <strong>81%</strong>
            </li>
            <li>
              <span>Accessories</span>
              <strong>88%</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
