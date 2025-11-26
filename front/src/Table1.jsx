import { useState } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap/'

import './App.css';

export default function Table1() {

  return (
    <div className="card mb-5">
      <div className="card-header">
        <h5 className="mb-0"><i className="fas fa-table me-2"></i>Synthetic Summary</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Group</th>
                <th className="text-center">Apps Count</th>
                <th className="text-center">MsgOuts Count</th>
                <th className="text-end">Success</th>
                <th className="text-end">Data Error</th>
                <th className="text-end">Rate</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td className="fw-bold">AA.ARR.INTEREST</td>
                <td className="text-center">1</td>
                <td className="text-center">2</td>
                <td className="text-end">235</td>
                <td className="text-end">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="fw-bold">AA.ARRANGEMENT</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-end">281</td>
                <td className="text-end">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="fw-bold">ACCOUNT</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-end">60,346</td>
                <td className="text-end">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="fw-bold">CUSTOMER</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-end">67,206</td>
                <td className="text-end">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="fw-bold">DX.REP.POSITION</td>
                <td className="text-center">1</td>
                <td className="text-center">2</td>
                <td className="text-end">336</td>
                <td className="text-end">63</td>
                <td className="text-end text-warning fw-bold">84.21%</td>
              </tr>

              <tr>
                <td className="fw-bold">FD.FID.ORDER</td>
                <td className="text-center">1</td>
                <td className="text-center">3</td>
                <td className="text-end">2,543</td>
                <td className="text-end">959</td>
                <td className="text-end text-danger fw-bold">72.62%</td>
              </tr>

              <tr>
                <td className="fw-bold">FOREX</td>
                <td className="text-center">1</td>
                <td className="text-center">2</td>
                <td className="text-end">2,935</td>
                <td className="text-end">1</td>
                <td className="text-end text-info fw-bold">99.97%</td>
              </tr>

              <tr>
                <td className="fw-bold">MD.DEAL</td>
                <td className="text-center">1</td>
                <td className="text-center">2</td>
                <td className="text-end">2,576</td>
                <td className="text-end">277</td>
                <td className="text-end text-warning fw-bold">90.29%</td>
              </tr>

              <tr>
                <td className="fw-bold">PRICES</td>
                <td className="text-center">4</td>
                <td className="text-center">7</td>
                <td className="text-end">432,022</td>
                <td className="text-end">24,105</td>
                <td className="text-end text-warning fw-bold">94.72%</td>
              </tr>

              <tr>
                <td className="fw-bold">SEC.ACC.MASTER</td>
                <td className="text-center">1</td>
                <td className="text-center">3</td>
                <td className="text-end">86,626</td>
                <td className="text-end">22</td>
                <td className="text-end text-info fw-bold">99.97%</td>
              </tr>

              <tr>
                <td className="fw-bold">SECURITY.MASTER</td>
                <td className="text-center">1</td>
                <td className="text-center">20</td>
                <td className="text-end">52,990</td>
                <td className="text-end">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="fw-bold">SECURITY.POSITION</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-end">106,312</td>
                <td className="text-end">420</td>
                <td className="text-end text-info fw-bold">99.61%</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}