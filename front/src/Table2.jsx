import { useState } from 'react'
import Card1 from './Card1'

import './App.css';

export default function Table2() {

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
                <th>Application</th>
                <th>MsgOut</th>
                <th className="text-end">Success</th>
                <th className="text-end">Data Error</th>
                <th className="text-end">Rate</th>
              </tr>
            </thead>
            <tbody>

              <tr className="table-light">
                <td className="fw-bold text-secondary">AA.ARR.INTEREST</td>
                <td className="fw-bold">AA.ARR.INTEREST</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">235</td>
                <td className="text-end fw-bold">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">AA.ARR.INTEREST</td>
                <td className="text-muted small">AA.ARR.INTEREST</td>
                <td>depositsloansfloatingconditionil</td>
                <td className="text-end">232</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">AA.ARR.INTEREST</td>
                <td className="text-muted small">AA.ARR.INTEREST</td>
                <td>financialinstrumentaadepositsinterestrateil</td>
                <td className="text-end">3</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">AA.ARRANGEMENT</td>
                <td className="fw-bold">AA.ARRANGEMENT</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">281</td>
                <td className="text-end fw-bold">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">AA.ARRANGEMENT</td>
                <td className="text-muted small">AA.ARRANGEMENT</td>
                <td>financialinstrumentaadepositsandloansil</td>
                <td className="text-end">281</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">ACCOUNT</td>
                <td className="fw-bold">ACCOUNT</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">60,346</td>
                <td className="text-end fw-bold">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">ACCOUNT</td>
                <td className="text-muted small">ACCOUNT</td>
                <td>cashaccount</td>
                <td className="text-end">60,346</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">CUSTOMER</td>
                <td className="fw-bold">CUSTOMER</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">67,206</td>
                <td className="text-end fw-bold">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">CUSTOMER</td>
                <td className="text-muted small">CUSTOMER</td>
                <td>customer</td>
                <td className="text-end">67,206</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">DX.REP.POSITION</td>
                <td className="fw-bold">DX.REP.POSITION</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">336</td>
                <td className="text-end fw-bold">63</td>
                <td className="text-end text-warning fw-bold">84.21%</td>
              </tr>

              <tr>
                <td className="text-muted small">DX.REP.POSITION</td>
                <td className="text-muted small">DX.REP.POSITION</td>
                <td>futureposition</td>
                <td className="text-end">21</td>
                <td className="text-end">22</td>
                <td className="text-end text-danger">48.84%</td>
              </tr>

              <tr>
                <td className="text-muted small">DX.REP.POSITION</td>
                <td className="text-muted small">DX.REP.POSITION</td>
                <td>optionposition</td>
                <td className="text-end">315</td>
                <td className="text-end">41</td>
                <td className="text-end text-warning">88.48%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">FD.FID.ORDER</td>
                <td className="fw-bold">FD.FID.ORDER</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">2,543</td>
                <td className="text-end fw-bold">959</td>
                <td className="text-end text-danger fw-bold">72.62%</td>
              </tr>

              <tr>
                <td className="text-muted small">FD.FID.ORDER</td>
                <td className="text-muted small">FD.FID.ORDER</td>
                <td>financialinstrumentfiduciaryil</td>
                <td className="text-end">1,751</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">FD.FID.ORDER</td>
                <td className="text-muted small">FD.FID.ORDER</td>
                <td>positionfiduciary</td>
                <td className="text-end">792</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">FD.FID.ORDER</td>
                <td className="text-muted small">FD.FID.ORDER</td>
                <td>positionfiduciaryfwd</td>
                <td className="text-end">0</td>
                <td className="text-end">959</td>
                <td className="text-end text-danger">0.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">FOREX</td>
                <td className="fw-bold">FOREX</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">2,935</td>
                <td className="text-end fw-bold">1</td>
                <td className="text-end text-info fw-bold">99.97%</td>
              </tr>

              <tr>
                <td className="text-muted small">FOREX</td>
                <td className="text-muted small">FOREX</td>
                <td>financialinstrumentforward</td>
                <td className="text-end">1,675</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">FOREX</td>
                <td className="text-muted small">FOREX</td>
                <td>positionsfxforward</td>
                <td className="text-end">1,260</td>
                <td className="text-end">1</td>
                <td className="text-end text-info">99.92%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">MD.DEAL</td>
                <td className="fw-bold">MD.DEAL</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">2,576</td>
                <td className="text-end fw-bold">277</td>
                <td className="text-end text-warning fw-bold">90.29%</td>
              </tr>

              <tr>
                <td className="text-muted small">MD.DEAL</td>
                <td className="text-muted small">MD.DEAL</td>
                <td>financialinstrumentguarantee</td>
                <td className="text-end">1,288</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">MD.DEAL</td>
                <td className="text-muted small">MD.DEAL</td>
                <td>positionsguarantees</td>
                <td className="text-end">1,288</td>
                <td className="text-end">277</td>
                <td className="text-end text-warning">82.30%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">PRICES</td>
                <td className="fw-bold">DX.MARKET.PRICE</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">283</td>
                <td className="text-end fw-bold">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">PRICES</td>
                <td className="text-muted small">DX.MARKET.PRICE</td>
                <td>financialinstrumentfuture</td>
                <td className="text-end">2</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">PRICES</td>
                <td className="text-muted small">DX.MARKET.PRICE</td>
                <td>financialinstrumentoption</td>
                <td className="text-end">281</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">PRICES</td>
                <td className="fw-bold">SC.MIFID.PRODUCT.DETS</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">388,192</td>
                <td className="text-end fw-bold">24,105</td>
                <td className="text-end text-warning fw-bold">94.15%</td>
              </tr>

              <tr>
                <td className="text-muted small">PRICES</td>
                <td className="text-muted small">SC.MIFID.PRODUCT.DETS</td>
                <td>financialinstrumentmifidtma</td>
                <td className="text-end">388,192</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">PRICES</td>
                <td className="text-muted small">SC.MIFID.PRODUCT.DETS</td>
                <td>mifid</td>
                <td className="text-end">0</td>
                <td className="text-end">24,105</td>
                <td className="text-end text-danger">0.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">PRICES</td>
                <td className="fw-bold">SC.PRICE.CHANGE</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">14,997</td>
                <td className="text-end fw-bold">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">PRICES</td>
                <td className="text-muted small">SC.PRICE.CHANGE</td>
                <td>price</td>
                <td className="text-end">14,997</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">PRICES</td>
                <td className="fw-bold">SECURITY.SUPP</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">28,550</td>
                <td className="text-end fw-bold">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">PRICES</td>
                <td className="text-muted small">SECURITY.SUPP</td>
                <td>chronodatafund</td>
                <td className="text-end">7,493</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">PRICES</td>
                <td className="text-muted small">SECURITY.SUPP</td>
                <td>chronologicaldatafixedincome</td>
                <td className="text-end">21,057</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">SEC.ACC.MASTER</td>
                <td className="fw-bold">SEC.ACC.MASTER</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">86,626</td>
                <td className="text-end fw-bold">22</td>
                <td className="text-end text-info fw-bold">99.97%</td>
              </tr>

              <tr>
                <td className="text-muted small">SEC.ACC.MASTER</td>
                <td className="text-muted small">SEC.ACC.MASTER</td>
                <td>csdstrategy</td>
                <td className="text-end">7,818</td>
                <td className="text-end">18</td>
                <td className="text-end text-info">99.77%</td>
              </tr>

              <tr>
                <td className="text-muted small">SEC.ACC.MASTER</td>
                <td className="text-muted small">SEC.ACC.MASTER</td>
                <td>portfolio</td>
                <td className="text-end">19,594</td>
                <td className="text-end">4</td>
                <td className="text-end text-info">99.98%</td>
              </tr>

              <tr>
                <td className="text-muted small">SEC.ACC.MASTER</td>
                <td className="text-muted small">SEC.ACC.MASTER</td>
                <td>portfoliocashaccounts</td>
                <td className="text-end">59,214</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">SECURITY.MASTER</td>
                <td className="fw-bold">SECURITY.MASTER</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">52,990</td>
                <td className="text-end fw-bold">0</td>
                <td className="text-end text-success fw-bold">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentcommodity</td>
                <td className="text-end">92</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentconvertiblebond</td>
                <td className="text-end">23</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentcorporateactions</td>
                <td className="text-end">3,843</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentdiscountinstrument</td>
                <td className="text-end">103</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentfixedincome</td>
                <td className="text-end">5,787</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentindexsm</td>
                <td className="text-end">287</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentlombardweightssc</td>
                <td className="text-end">32,128</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentminifutureturbo</td>
                <td className="text-end">3</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentmutualfund</td>
                <td className="text-end">4,486</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentother</td>
                <td className="text-end">47</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>financialinstrumentstock</td>
                <td className="text-end">4,412</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>spairbagcertificates</td>
                <td className="text-end">448</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>spbonusnotes</td>
                <td className="text-end">8</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>spcapitalprotectednotes</td>
                <td className="text-end">426</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>spdiscountcertificate</td>
                <td className="text-end">285</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>spmemorycouponnotes</td>
                <td className="text-end">273</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>sprevconvbondlinked</td>
                <td className="text-end">73</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>sprevconvcreditlinked</td>
                <td className="text-end">1</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>sprevconvequitylinked</td>
                <td className="text-end">262</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td className="text-muted small">SECURITY.MASTER</td>
                <td>sptwinwincertificate</td>
                <td className="text-end">3</td>
                <td className="text-end">0</td>
                <td className="text-end text-success">100.00%</td>
              </tr>

              <tr className="table-light">
                <td className="fw-bold text-secondary">SECURITY.POSITION</td>
                <td className="fw-bold">SECURITY.POSITION</td>
                <td className="fst-italic text-muted">TOTAL</td>
                <td className="text-end fw-bold">106,312</td>
                <td className="text-end fw-bold">420</td>
                <td className="text-end text-info fw-bold">99.61%</td>
              </tr>

              <tr>
                <td className="text-muted small">SECURITY.POSITION</td>
                <td className="text-muted small">SECURITY.POSITION</td>
                <td>securityposition</td>
                <td className="text-end">106,312</td>
                <td className="text-end">420</td>
                <td className="text-end text-info">99.61%</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}