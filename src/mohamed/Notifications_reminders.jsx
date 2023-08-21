import React from 'react';

const Notifications_reminders = () => (
    <>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <style >
            {`
      body {
       
      }
      .cardm {
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
        <div className="container" >
            <div className="row">
                <div className="col-12 mb-3 mb-lg-5" style={{
                    marginTop: "100px",
                    background: "#ffffff"
                }}>
                    <div className="position-relative cardm table-nowrap table-card">
                        <div className="card-header align-items-center">
                            <h5 className="mb-0">Notification, Reminders and Announcement</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead className="small text-uppercase bg-body text-muted">
                                    <tr>
                                        <th>Notification, Reminders and Announcement</th>
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
                                        <td>
                                            Notification: Your complaint regarding the incorrect
                                            billing amount has been successfully resolved. The
                                            corrected bill will be sent to you shortly.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Reminder: Due date for your gas bill is on 7/6/2023.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Reminder: Due date for your electricity bill is on
                                            7/10/2023.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Reminder: Due date for your water bill is on 7/7/2023.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Announcement: We are pleased to announce a new cashback
                                            program for our credit card customers. Earn rewards on
                                            every purchase starting from next month.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Notification: Our mobile banking app has been updated with
                                            exciting new features. Update your app now to enjoy a
                                            seamless banking experience.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Reminder: Due date for your telephone bill is on 8/7/2023.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Notification: The technical issue you reported regarding
                                            your internet connection has been resolved. Enjoy
                                            uninterrupted browsing!
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Reminder: Due date for your loan installment payment is on
                                            25/7/2023.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Reminder: Due date for your credit card bill is on
                                            7/5/2023.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Notification: The technical issue you reported regarding
                                            your internet connection has been resolved. Enjoy
                                            uninterrupted browsing!
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Announcement: We are pleased to announce a new cashback
                                            program for our credit card customers. Earn rewards on
                                            every purchase starting from next month.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Notification: Our mobile banking app has been updated with
                                            exciting new features. Update your app now to enjoy a
                                            seamless banking experience.
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td>
                                            Notification: Your complaint regarding the incorrect
                                            billing amount has been successfully resolved. The
                                            corrected bill will be sent to you shortly.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer text-end">
                            <a href="#!" className="btn btn-gray">View more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        <script type="text/javascript"></script>
    </>
);

export default Notifications_reminders;
