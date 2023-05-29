import React from 'react';

const View_credit_card_transactions = () => (
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
                                <p className="mb-0 small text-muted">2 Pending</p>
                            </div>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="small text-uppercase bg-body text-muted">
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Date</th>
                                            <th>Credit Card Number</th>
                                            <th>Company</th>
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
                                            <td>#96373829</td>
                                            <td>17 Oct, 2022</td>
                                            <td>1</td>
                                            <td>Zara</td>
                                            <td>Sending</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$250</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#38299637</td>
                                            <td>24 Feb, 2020</td>
                                            <td>3</td>
                                            <td>H&M</td>
                                            <td>Sending</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$185</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-warning text-warning">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#64553837</td>
                                            <td>2 Mar, 2023</td>
                                            <td>3</td>
                                            <td>Pull&Bear</td>
                                            <td>Sending</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$2105</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#41305717</td>
                                            <td>24 Aug, 2022</td>
                                            <td>2</td>
                                            <td>Balenciaga</td>
                                            <td>Sending</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$15000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#45687321</td>
                                            <td>20 Nov, 2022</td>
                                            <td>2</td>
                                            <td>mcdonald's</td>
                                            <td>Sending</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$20</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-warning text-warning">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#21395717</td>
                                            <td>12 Jul, 2022</td>
                                            <td>2</td>
                                            <td>KFC</td>
                                            <td>Sending</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$50</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#71746596</td>
                                            <td>20 Aug, 2021</td>
                                            <td>1</td>
                                            <td>EGYPTAIR</td>
                                            <td>Sending</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$1000</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>#20341007</td>
                                            <td>7 Jun, 2021</td>
                                            <td>2</td>
                                            <td>Uber</td>
                                            <td>Sending</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        <i className="fa fa-arrow-down send" aria-hidden="true"></i>
                                                    </span>
                                                    <span>$410</span>
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
                                <a href="#!" className="btn btn-gray">
                                    View All Transactions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </>
)
export default View_credit_card_transactions
