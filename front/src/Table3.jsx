import { useState, useEffect } from 'react';
import './App.css';

export default function Table3() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
    const response = await fetch(`http://localhost:3000/output/stats`)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    dataFetch()
  }, []);

  if (loading) {
    return null
  }
  else {
    return (

      <div className="card mb-5">
        <div className="card-header">
          <h5 className="mb-0"><i className="fas fa-list me-2"></i>Detailed Statistics</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-sm table-hover align-middle">
              <thead className="table-light sticky-top">
                <tr>
                  <th>Group</th>
                  <th className="text-end">Success</th>
                  <th className="text-end">Error</th>
                  <th className="text-end">Rate</th>
                </tr>
              </thead>
              <tbody>
              {data.map(d => (
                <tr className="table-light">
                  <td className="fw-bold text-secondary">{d.folder}</td>
                  <td className="text-end fw-bold">{d.suc}</td>
                  <td className="text-end fw-bold">{d.err}</td>
                  <td className="text-end text-success fw-bold">{100-100*d.err/d.suc}%</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}