import React from "react";

const View_bank_account_transactions = () => (
    <>
        <head>
            <meta charSet="utf-8" />
            <title>latest transactions - Bootdey.com</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <style type="text/css">
                {`
          body {
          }

          .cardmh {
            box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
          }

          .avatar.sm {
            width: 2.25rem;
            height: 2.25rem;
            font-size: 0.818125rem;
          }

          .table-nowrap .table td,
          .table-nowrap .table th {
            white-space: nowrap;
          }

          .table > :not(caption) > * > * {
            padding: 0.75rem 1.25rem;
            border-bottom-width: 1px;
          }

          table th {
            font-weight: 600;
            background-color: #eeecfd !important;
          }

          .fa-arrow-up {
            color: #00ced1;
          }

          .fa-arrow-down {
            color: #ff00ff;
          }
        `}
            </style>
        </head>
        <body>
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
            />
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3 mb-lg-5" style={{marginTop:"90px"}}>
                        <div className="position-relative cardmh table-nowrap table-card">
                            <div className="card-header align-items-center">
                                <h5 className="mb-0">Latest Transactions</h5>
                                <p className="mb-0 small text-muted">3 Pending</p>
                            </div>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="small text-uppercase bg-body text-muted">
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Date</th>
                                            <th>Bank Account Number</th>
                                            <th>Person/Company</th>
                                            <th>Type</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <style>
                                        {`
                      .send {
                        color: rgb(245, 80, 80); /* Set the desired color here */
                      }
                      .receive {
                        color: rgb(82, 239, 122); /* Set the desired color here */
                      }
                    `}
                                    </style>
                                    <tbody>
                                        <tr className="align-middle">
                                            <td>#57473829</td>
                                            <td>13 Sep, 2022</td>
                                            <td>1</td>
                                            <td>Electricity Company</td>
                                            <td>Sending / Electricity bill</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$145</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#012458780</td>
                                            <td>19 Aug, 2022</td>
                                            <td>3</td>
                                            <td>Ramez Nashat</td>
                                            <td>Receiving / Personal account</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-up receive" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$641.64</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-warning text-warning">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#76444326</td>
                                            <td>03 April, 2023</td>
                                            <td>3</td>
                                            <td>National Bank of Egypt</td>
                                            <td>Sending / Loan installment</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$2000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#12498745</td>
                                            <td>15 March, 2023</td>
                                            <td>1</td>
                                            <td>Yousef Shawky</td>
                                            <td>Sending / Personal account</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$785</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#13896407</td>
                                            <td>26 Nov, 2022</td>
                                            <td>2</td>
                                            <td>Etisalat</td>
                                            <td>Sending / Telephone bill</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$38.2</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-warning text-warning">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#86422314</td>
                                            <td>6 Sep, 2022</td>
                                            <td>1</td>
                                            <td>Mark Mahrous</td>
                                            <td>Receiving / Personal account</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-up receive" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$5200</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#32754108</td>
                                            <td>17 Feb, 2022</td>
                                            <td>2</td>
                                            <td>Water Company</td>
                                            <td>Sending / Water bill</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$50.98</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-warning text-warning">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#65213458</td>
                                            <td>24 Oct, 2021</td>
                                            <td>1</td>
                                            <td>Gas Company</td>
                                            <td>Sending / Gas bill</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$45</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer text-end">
                                <a href="#!" className="btn btn-gray">View All Transactions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
            <script type="text/javascript"></script>
        </body>
    </>
    )

    export default View_bank_account_transactions;