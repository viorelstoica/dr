import { useState } from 'react'
import MyToast from './Toast'
import Card1 from './Card1'
import { Button, Col, Row, Container } from 'react-bootstrap/'

import './App.css';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export default function App() {

  const [currentDate, setCurrentDate] = useState(getDate());

  return (

    <Container fluid>
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">DR4 - TTI Initial Load import errors</h1>
        <p>generated on {currentDate}</p>
      </Container>
      <Row>
        <Col></Col>
        <Col>
          <Card1 border='primary' />
        </Col>
        <Col>
          <Card1 border='danger' />
        </Col>
        <Col>
          <Card1 border='info' />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <div class="card mb-5">
            <div class="card-header">
              <h5 class="mb-0"><i class="fas fa-table me-2"></i>Synthetic Summary</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover align-middle">
                  <thead class="table-light">
                    <tr>
                      <th>Group</th>
                      <th class="text-center">Apps Count</th>
                      <th class="text-center">MsgOuts Count</th>
                      <th class="text-end">Success</th>
                      <th class="text-end">Data Error</th>
                      <th class="text-end">Rate</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td class="fw-bold">AA.ARR.INTEREST</td>
                      <td class="text-center">1</td>
                      <td class="text-center">2</td>
                      <td class="text-end">235</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">AA.ARRANGEMENT</td>
                      <td class="text-center">1</td>
                      <td class="text-center">1</td>
                      <td class="text-end">281</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">ACCOUNT</td>
                      <td class="text-center">1</td>
                      <td class="text-center">1</td>
                      <td class="text-end">60,346</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">CUSTOMER</td>
                      <td class="text-center">1</td>
                      <td class="text-center">1</td>
                      <td class="text-end">67,206</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">DX.REP.POSITION</td>
                      <td class="text-center">1</td>
                      <td class="text-center">2</td>
                      <td class="text-end">336</td>
                      <td class="text-end">63</td>
                      <td class="text-end text-warning fw-bold">84.21%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">FD.FID.ORDER</td>
                      <td class="text-center">1</td>
                      <td class="text-center">3</td>
                      <td class="text-end">2,543</td>
                      <td class="text-end">959</td>
                      <td class="text-end text-danger fw-bold">72.62%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">FOREX</td>
                      <td class="text-center">1</td>
                      <td class="text-center">2</td>
                      <td class="text-end">2,935</td>
                      <td class="text-end">1</td>
                      <td class="text-end text-info fw-bold">99.97%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">MD.DEAL</td>
                      <td class="text-center">1</td>
                      <td class="text-center">2</td>
                      <td class="text-end">2,576</td>
                      <td class="text-end">277</td>
                      <td class="text-end text-warning fw-bold">90.29%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">PRICES</td>
                      <td class="text-center">4</td>
                      <td class="text-center">7</td>
                      <td class="text-end">432,022</td>
                      <td class="text-end">24,105</td>
                      <td class="text-end text-warning fw-bold">94.72%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">SEC.ACC.MASTER</td>
                      <td class="text-center">1</td>
                      <td class="text-center">3</td>
                      <td class="text-end">86,626</td>
                      <td class="text-end">22</td>
                      <td class="text-end text-info fw-bold">99.97%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">SECURITY.MASTER</td>
                      <td class="text-center">1</td>
                      <td class="text-center">20</td>
                      <td class="text-end">52,990</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="fw-bold">SECURITY.POSITION</td>
                      <td class="text-center">1</td>
                      <td class="text-center">1</td>
                      <td class="text-end">106,312</td>
                      <td class="text-end">420</td>
                      <td class="text-end text-info fw-bold">99.61%</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <div class="card mb-5">
            <div class="card-header">
              <h5 class="mb-0"><i class="fas fa-list me-2"></i>Detailed Statistics</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm table-hover align-middle">
                  <thead class="table-light sticky-top">
                    <tr>
                      <th>Group</th>
                      <th>Application</th>
                      <th>MsgOut</th>
                      <th class="text-end">Success</th>
                      <th class="text-end">Data Error</th>
                      <th class="text-end">Rate</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">AA.ARR.INTEREST</td>
                      <td class="fw-bold">AA.ARR.INTEREST</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">235</td>
                      <td class="text-end fw-bold">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">AA.ARR.INTEREST</td>
                      <td class="text-muted small">AA.ARR.INTEREST</td>
                      <td>depositsloansfloatingconditionil</td>
                      <td class="text-end">232</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">AA.ARR.INTEREST</td>
                      <td class="text-muted small">AA.ARR.INTEREST</td>
                      <td>financialinstrumentaadepositsinterestrateil</td>
                      <td class="text-end">3</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">AA.ARRANGEMENT</td>
                      <td class="fw-bold">AA.ARRANGEMENT</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">281</td>
                      <td class="text-end fw-bold">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">AA.ARRANGEMENT</td>
                      <td class="text-muted small">AA.ARRANGEMENT</td>
                      <td>financialinstrumentaadepositsandloansil</td>
                      <td class="text-end">281</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">ACCOUNT</td>
                      <td class="fw-bold">ACCOUNT</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">60,346</td>
                      <td class="text-end fw-bold">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">ACCOUNT</td>
                      <td class="text-muted small">ACCOUNT</td>
                      <td>cashaccount</td>
                      <td class="text-end">60,346</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">CUSTOMER</td>
                      <td class="fw-bold">CUSTOMER</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">67,206</td>
                      <td class="text-end fw-bold">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">CUSTOMER</td>
                      <td class="text-muted small">CUSTOMER</td>
                      <td>customer</td>
                      <td class="text-end">67,206</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">DX.REP.POSITION</td>
                      <td class="fw-bold">DX.REP.POSITION</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">336</td>
                      <td class="text-end fw-bold">63</td>
                      <td class="text-end text-warning fw-bold">84.21%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">DX.REP.POSITION</td>
                      <td class="text-muted small">DX.REP.POSITION</td>
                      <td>futureposition</td>
                      <td class="text-end">21</td>
                      <td class="text-end">22</td>
                      <td class="text-end text-danger">48.84%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">DX.REP.POSITION</td>
                      <td class="text-muted small">DX.REP.POSITION</td>
                      <td>optionposition</td>
                      <td class="text-end">315</td>
                      <td class="text-end">41</td>
                      <td class="text-end text-warning">88.48%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">FD.FID.ORDER</td>
                      <td class="fw-bold">FD.FID.ORDER</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">2,543</td>
                      <td class="text-end fw-bold">959</td>
                      <td class="text-end text-danger fw-bold">72.62%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">FD.FID.ORDER</td>
                      <td class="text-muted small">FD.FID.ORDER</td>
                      <td>financialinstrumentfiduciaryil</td>
                      <td class="text-end">1,751</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">FD.FID.ORDER</td>
                      <td class="text-muted small">FD.FID.ORDER</td>
                      <td>positionfiduciary</td>
                      <td class="text-end">792</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">FD.FID.ORDER</td>
                      <td class="text-muted small">FD.FID.ORDER</td>
                      <td>positionfiduciaryfwd</td>
                      <td class="text-end">0</td>
                      <td class="text-end">959</td>
                      <td class="text-end text-danger">0.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">FOREX</td>
                      <td class="fw-bold">FOREX</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">2,935</td>
                      <td class="text-end fw-bold">1</td>
                      <td class="text-end text-info fw-bold">99.97%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">FOREX</td>
                      <td class="text-muted small">FOREX</td>
                      <td>financialinstrumentforward</td>
                      <td class="text-end">1,675</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">FOREX</td>
                      <td class="text-muted small">FOREX</td>
                      <td>positionsfxforward</td>
                      <td class="text-end">1,260</td>
                      <td class="text-end">1</td>
                      <td class="text-end text-info">99.92%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">MD.DEAL</td>
                      <td class="fw-bold">MD.DEAL</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">2,576</td>
                      <td class="text-end fw-bold">277</td>
                      <td class="text-end text-warning fw-bold">90.29%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">MD.DEAL</td>
                      <td class="text-muted small">MD.DEAL</td>
                      <td>financialinstrumentguarantee</td>
                      <td class="text-end">1,288</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">MD.DEAL</td>
                      <td class="text-muted small">MD.DEAL</td>
                      <td>positionsguarantees</td>
                      <td class="text-end">1,288</td>
                      <td class="text-end">277</td>
                      <td class="text-end text-warning">82.30%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">PRICES</td>
                      <td class="fw-bold">DX.MARKET.PRICE</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">283</td>
                      <td class="text-end fw-bold">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">PRICES</td>
                      <td class="text-muted small">DX.MARKET.PRICE</td>
                      <td>financialinstrumentfuture</td>
                      <td class="text-end">2</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">PRICES</td>
                      <td class="text-muted small">DX.MARKET.PRICE</td>
                      <td>financialinstrumentoption</td>
                      <td class="text-end">281</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">PRICES</td>
                      <td class="fw-bold">SC.MIFID.PRODUCT.DETS</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">388,192</td>
                      <td class="text-end fw-bold">24,105</td>
                      <td class="text-end text-warning fw-bold">94.15%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">PRICES</td>
                      <td class="text-muted small">SC.MIFID.PRODUCT.DETS</td>
                      <td>financialinstrumentmifidtma</td>
                      <td class="text-end">388,192</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">PRICES</td>
                      <td class="text-muted small">SC.MIFID.PRODUCT.DETS</td>
                      <td>mifid</td>
                      <td class="text-end">0</td>
                      <td class="text-end">24,105</td>
                      <td class="text-end text-danger">0.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">PRICES</td>
                      <td class="fw-bold">SC.PRICE.CHANGE</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">14,997</td>
                      <td class="text-end fw-bold">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">PRICES</td>
                      <td class="text-muted small">SC.PRICE.CHANGE</td>
                      <td>price</td>
                      <td class="text-end">14,997</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">PRICES</td>
                      <td class="fw-bold">SECURITY.SUPP</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">28,550</td>
                      <td class="text-end fw-bold">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">PRICES</td>
                      <td class="text-muted small">SECURITY.SUPP</td>
                      <td>chronodatafund</td>
                      <td class="text-end">7,493</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">PRICES</td>
                      <td class="text-muted small">SECURITY.SUPP</td>
                      <td>chronologicaldatafixedincome</td>
                      <td class="text-end">21,057</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">SEC.ACC.MASTER</td>
                      <td class="fw-bold">SEC.ACC.MASTER</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">86,626</td>
                      <td class="text-end fw-bold">22</td>
                      <td class="text-end text-info fw-bold">99.97%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SEC.ACC.MASTER</td>
                      <td class="text-muted small">SEC.ACC.MASTER</td>
                      <td>csdstrategy</td>
                      <td class="text-end">7,818</td>
                      <td class="text-end">18</td>
                      <td class="text-end text-info">99.77%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SEC.ACC.MASTER</td>
                      <td class="text-muted small">SEC.ACC.MASTER</td>
                      <td>portfolio</td>
                      <td class="text-end">19,594</td>
                      <td class="text-end">4</td>
                      <td class="text-end text-info">99.98%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SEC.ACC.MASTER</td>
                      <td class="text-muted small">SEC.ACC.MASTER</td>
                      <td>portfoliocashaccounts</td>
                      <td class="text-end">59,214</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">SECURITY.MASTER</td>
                      <td class="fw-bold">SECURITY.MASTER</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">52,990</td>
                      <td class="text-end fw-bold">0</td>
                      <td class="text-end text-success fw-bold">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentcommodity</td>
                      <td class="text-end">92</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentconvertiblebond</td>
                      <td class="text-end">23</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentcorporateactions</td>
                      <td class="text-end">3,843</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentdiscountinstrument</td>
                      <td class="text-end">103</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentfixedincome</td>
                      <td class="text-end">5,787</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentindexsm</td>
                      <td class="text-end">287</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentlombardweightssc</td>
                      <td class="text-end">32,128</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentminifutureturbo</td>
                      <td class="text-end">3</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentmutualfund</td>
                      <td class="text-end">4,486</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentother</td>
                      <td class="text-end">47</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>financialinstrumentstock</td>
                      <td class="text-end">4,412</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>spairbagcertificates</td>
                      <td class="text-end">448</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>spbonusnotes</td>
                      <td class="text-end">8</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>spcapitalprotectednotes</td>
                      <td class="text-end">426</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>spdiscountcertificate</td>
                      <td class="text-end">285</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>spmemorycouponnotes</td>
                      <td class="text-end">273</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>sprevconvbondlinked</td>
                      <td class="text-end">73</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>sprevconvcreditlinked</td>
                      <td class="text-end">1</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>sprevconvequitylinked</td>
                      <td class="text-end">262</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td class="text-muted small">SECURITY.MASTER</td>
                      <td>sptwinwincertificate</td>
                      <td class="text-end">3</td>
                      <td class="text-end">0</td>
                      <td class="text-end text-success">100.00%</td>
                    </tr>

                    <tr class="table-light">
                      <td class="fw-bold text-secondary">SECURITY.POSITION</td>
                      <td class="fw-bold">SECURITY.POSITION</td>
                      <td class="fst-italic text-muted">TOTAL</td>
                      <td class="text-end fw-bold">106,312</td>
                      <td class="text-end fw-bold">420</td>
                      <td class="text-end text-info fw-bold">99.61%</td>
                    </tr>

                    <tr>
                      <td class="text-muted small">SECURITY.POSITION</td>
                      <td class="text-muted small">SECURITY.POSITION</td>
                      <td>securityposition</td>
                      <td class="text-end">106,312</td>
                      <td class="text-end">420</td>
                      <td class="text-end text-info">99.61%</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )

}